---
title: "Windows 下的包管理器：Scoop"
date: 2023-05-03T15:28:08+08:00

categories: ["Windows"]
series: []
tags: ["Windows", "CLI"]

cover:
    image: "/cover/015.webp"
    alt: "cover"
    relative: true
---

Scoop 是一个 Windows 下的命令行安装程序，它可以帮助用户轻松地安装、卸载和管理命令行工具和应用程序。Scoop 的设计理念是使得软件的安装和管理过程更加简单、快速和可靠。

## 环境要求

- PowerShell 5（或更高版本）
- .NET Framework 4.5（或更高版本）

## 安装

以管理员身份打开 PowerShell

- 设置允许 PowerShell 执行本地脚本

```sh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

- 修改 Scoop 安装路径

Scoop 默认安装在 `C:\Users\用户名\scoop` ，其全局安装的软件在 `C:\ProgramData\scoop`。修改默认路径需要提前设置环境变量：

![image-20230503154129620](./img/index/image-20230503154129620.png)

或者通过命令行设置环境变量：

```sh
# Scoop 安装路径
[Environment]::SetEnvironmentVariable('SCOOP', 'D:\Dependency\Scoop', 'User')
# Scoop 全局安装路径，需要以管理员身份运行
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', 'D:\Dependency\Scoop\Global', 'Machine')
```

- 安装 Scoop

```sh
iwr -useb get.scoop.sh | iex
```

- 安装 Aria2

安装 Aria2 后 Scoop 会自动调用 Aria2 实现多线程下载。

```sh
scoop install aria2
```

使用 scoop config 指令可以配置 Aria2 参数，以下是与 Aria2 相关的配置项：

```sh
aria2-enabled: 开启 Aria2 下载，默认true
aria2-retry-wait: 重试等待秒数，默认2
aria2-split: 单任务最大连接数，默认5
aria2-max-connection-per-server: 单服务器最大连接数，默认5 ，最大16
aria2-min-split-size: 最小文件分片大小，默认5M
```

推荐配置：

```sh
scoop config aria2-split 32
scoop config aria2-max-connection-per-server 16
scoop config aria2-min-split-size 1M
```

- 安装 sudo

Scoop 全局安装软件的时候需要管理员权限，安装 sudo 后，我们就可以在 scoop 命令前加 sudo 来提权以简化步骤。

```sh
scoop install sudo
```

- 修复并检查潜在问题

```sh
scoop install 7zip
scoop install innounp
scoop install dark
sudo Set-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem' -Name 'LongPathsEnabled' -Value 1
scoop checkup
```

## scoop install

```sh
# 安装软件
scoop install [-k|g] <app>
# -k: 禁用缓存
# -g: 全局安装，需要管理员权限
```

## scoop uninstall

```sh
# 卸载软件
scoop uninstall [-g|p] <app>
# -g: 卸载全局安装软件，需要管理员权限
# -p: 同时删除配置文件
```

## scoop update

```sh
# 更新软件
scoop update [-g|k] <软件名>
# 更新 Scoop 和所有已安装的软件
scoop update [-g|k] *
# -k: 禁用缓存
# -g: 全局
```

## scoop bucket

bucket 即 Scoop 中的软件仓库，默认软件仓库 main。相关命令：

```sh
# 添加软件仓库
scoop bucket add <仓库名> <仓库地址>

# 列出已添加的软件仓库
scoop bucket list

# 删除软件仓库
scoop bucket rm <仓库名>
```

可以通过 `scoop bucket known` 查看官方支持的 bucket。

```sh
$ scoop bucket known
main
extras		# 包含不太符合主存储桶标准的应用
versions	# 包含一些知名软件包的旧版本的 Bucket
nirsoft	
sysinternals
php
nerd-fonts	# 用于安装 Nerd Fonts 字体的 Bucket
nonportable
java		# 包含不同版本开源 JDK
games
```

对于官方支持的 bucket 可以直接添加。推荐添加 extras 仓库。

```sh
scoop bucket add extras
```

添加 `nerd-fonts` 仓库后可以通过以下命令搜索到所有的字体：

```sh
scoop search "-NF"
```

安装字体需要使用管理员权限：

```sh
sudo scoop install FiraCode-NF
```

对于第三方 bucket：

```sh
# 添加第三方 bucket
scoop bucket add <bucketname> https://github.com/xxx/xxx
# 从第三方 bucket 中安装软件
scoop install <bucketname>/<app>
```

## scoop cache

默认情况下，Scoop 安装软件会缓存应用的安装包。使用 `scoop cache` 命令来清理。

- `scoop cache show`：显示安装包缓存
- `scoop cache rm <app>`：删除指定应用的安装包缓存
- `scoop cache rm *`：删除所有的安装包缓存

## scoop cleanup

Scoop 默认保留软件的旧版本，更新软件后通过 `scoop cleanup` 命令来清理。

- `scoop cleanup [-k] <app>`：删除指定软件的旧版本。-k 表示删除缓存
- `scoop cleanup *`：删除所有软件的旧版本

## 其他

```sh
# 列出已安装的软件
scoop list

# 查找软件
scoop search <app>

# 显示软件信息
scoop info <app>

# 检查 Scoop 潜在问题并给出建议
scoop checkup

# 查看命令帮助说明
scoop help <command>
```

## 代理

Scoop 默认使用的是系统代理，可以通过 `scoop config` 指定代理。需要注意只支持 http 协议。

```sh
# 设置代理
scoop config proxy localhost:1080

#查看代理
scoop config proxy

# 取消代理
scoop config rm proxy
```

## 常用命令

```sh
# 更新 scoop 及软件包列表
scoop update

## 安装软件 ##
# 非全局安装（并禁止安装包缓存）
scoop install -k <app>
# 全局安装（并禁止安装包缓存）
sudo scoop install -gk <app>

## 卸载软件 ##
# 卸载非全局软件（并删除配置文件）
scoop uninstall -p <app>
# 卸载全局软件（并删除配置文件）
sudo scoop uninstall -gp <app>

## 更新软件 ##
# 更新所有非全局软件（并禁止安装包缓存）
scoop update -k *
# 更新所有软件（并禁止安装包缓存）
sudo scoop update -gk *

## 垃圾清理 ##
# 删除所有旧版本非全局软件（并删除软件包缓存）
scoop cleanup -k *
# 删除所有旧版本软件（并删除软件包缓存）
sudo scoop cleanup -gk *
# 清除软件包缓存
scoop cache rm *
```

## 参考

[1] [Scoop - 最好用的 Windows 包管理器](https://p3terx.com/archives/scoop-the-best-windows-package-manager.html) 

[2] [使用 Scoop 管理 Windows 下的软件和开发环境](https://dejavu.moe/posts/windows-scoop/) 
