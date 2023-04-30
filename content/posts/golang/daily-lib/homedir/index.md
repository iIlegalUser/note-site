---
title: "Homedir"
date: 2023-04-27T22:09:11+08:00
lastmod: 2023-04-30T14:30:11+08:00

categories: ["go"]
series: ["daily-lib"]
tags: []

searchHidden: false
hidemeta: false
draft: false
cover:
    image: "cover.jpg"
    alt: "cover"
    relative: true
    hidden: true
---

## 介绍

homedir 是一个不借助 cgo 获取用户目录的 go 库。

使用 go 内置的 `os/user` 也可以获取用户目录，但是在 Darwin 系统中需要使用 cgo，这意味着任何使用了 `os/user` 的 go 代码都不能交叉编译。但是大多数时候使用 `os/user` 都只是为了获取用户目录。

## 使用

安装：

```shell
$ go get github.com/mitchellh/go-homedir
```

示例：

```go
func TestDir(t *testing.T) {
	dir, err := homedir.Dir()
	expand, err := homedir.Expand("~/example/path")
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(dir)	// C:\Users\用户名
	fmt.Println(expand)	// C:\Users\用户名\example\path
}
```

homedir 的使用非常简单，只有两个函数：`Dir()` 用于获取用户目录，`Expand(path string)` 用于将 `~` 转换为用户目录。

默认情况下 homedir 开启了缓存功能，获取到用户目录后会缓存到属性中，即使运行过程中修改了用户目录也会返回之前的内容。可以通过将 `DisableCache` 属性设置为 true 来关闭缓存，也可以通过 `Reset()` 方法重置缓存。

## 原理

homedir 库只有一个 `homedir.go` 文件，其属性和主要方法如下：

```go
var DisableCache bool

var homedirCache string
var cacheLock sync.RWMutex

func Dir() (string, error)
func Expand(path string) (string, error)
func Reset()
```

排除缓存代码后，`Dir()` 方法关键实现代码如下：

```go
if runtime.GOOS == "windows" {
    result, err = dirWindows()
} else {
    // Unix-like system, so just assume Unix
    result, err = dirUnix()
}
```

根据系统类型调用不同方法。

`dirWindows()` 方法：

```go
func dirWindows() (string, error) {
	// First prefer the HOME environmental variable
	if home := os.Getenv("HOME"); home != "" {
		return home, nil
	}

	// Prefer standard environment variable USERPROFILE
	if home := os.Getenv("USERPROFILE"); home != "" {
		return home, nil
	}

	drive := os.Getenv("HOMEDRIVE")
	path := os.Getenv("HOMEPATH")
	home := drive + path
	if drive == "" || path == "" {
		return "", errors.New("HOMEDRIVE, HOMEPATH, or USERPROFILE are blank")
	}

	return home, nil
}
```

依次从 `HOME`、`USERPROFILE` 获取，否则将 `HOMEDRIVE` 和 `HOMEPATH` 拼接。

`dirUnix()` 方法：

```go
func dirUnix() (string, error) {
	homeEnv := "HOME"
	if runtime.GOOS == "plan9" {
		// On plan9, env vars are lowercase.
		homeEnv = "home"
	}

	// First prefer the HOME environmental variable
	if home := os.Getenv(homeEnv); home != "" {
		return home, nil
	}

	var stdout bytes.Buffer

	// If that fails, try OS specific commands
	if runtime.GOOS == "darwin" {
		cmd := exec.Command("sh", "-c", `dscl -q . -read /Users/"$(whoami)" NFSHomeDirectory | sed 's/^[^ ]*: //'`)
		cmd.Stdout = &stdout
		if err := cmd.Run(); err == nil {
			result := strings.TrimSpace(stdout.String())
			if result != "" {
				return result, nil
			}
		}
	} else {
		cmd := exec.Command("getent", "passwd", strconv.Itoa(os.Getuid()))
		cmd.Stdout = &stdout
		if err := cmd.Run(); err != nil {
			// If the error is ErrNotFound, we ignore it. Otherwise, return it.
			if err != exec.ErrNotFound {
				return "", err
			}
		} else {
			if passwd := strings.TrimSpace(stdout.String()); passwd != "" {
				// username:password:uid:gid:gecos:home:shell
				passwdParts := strings.SplitN(passwd, ":", 7)
				if len(passwdParts) > 5 {
					return passwdParts[5], nil
				}
			}
		}
	}

	// If all else fails, try the shell
	stdout.Reset()
	cmd := exec.Command("sh", "-c", "cd && pwd")
	cmd.Stdout = &stdout
	if err := cmd.Run(); err != nil {
		return "", err
	}

	result := strings.TrimSpace(stdout.String())
	if result == "" {
		return "", errors.New("blank output when reading home directory")
	}

	return result, nil
}
```

1. 尝试获取 `HOME` 变量（在 `plan9` 系统中是 `home`）
2. `Mac` 系统下使用指令 `dscl -q . -read /Users/"$(whoami)" NFSHomeDirectory | sed 's/^[^ ]*: //'` 获取
3. `getent` 命令可以用来查看系统数据库中的相关记录，通过`getent passwd [key]` 查询当前用户的信息，其中就包含了用户目录

4. 如果以上命令都失败了，因为 `cd` 命令不加参数可以回到用户目录，所以可以通过`cd && pwd` 返回用户目录。
