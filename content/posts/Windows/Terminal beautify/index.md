---
title: "Terminal美化"
date: 2023-09-09T14:20:00+08:00

categories: ["Windows"]
series: []
tags: []

math: false
draft: true

cover:
    image: "cover.webp"
    alt: "cover"
    relative: true
---

## 安装 scoop

以管理员身份运行 PowerShell

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
[Environment]::SetEnvironmentVariable('SCOOP', 'D:\Env\Scoop', 'User')
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', 'D:\Env\Scoop\Global', 'User')
```

普通用户身份运行 PowerShell

```powershell
iwr -useb get.scoop.sh | iex
scoop install aria2
scoop config aria2-split 32
scoop config aria2-max-connection-per-server 16
scoop config aria2-min-split-size 1M
scoop install sudo  
scoop install 7zip
scoop install innounp
scoop install dark
sudo Set-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem' -Name 'LongPathsEnabled' -Value 1
scoop checkup
scoop bucket add nerd-fonts
sudo scoop install -kg JetBrainsMono-NF
```

这里使用的字体是 JetBrainsMono-NF

## 安装 on-my-posh3

以管理员身份运行 PowerShell

```powershell
set-executionpolicy remotesigned
Install-Module PSReadLine -Force
Install-Module posh-git
Install-Module Terminal-Icons
```

下载 oh-my-posh 主题

```sh
git clone https://github.com/JanDeDobbeleer/oh-my-posh
```

保留其中的 themes 文件夹即可

## 配置 Windows Terminal

修改配置文件 settings.json，具体文件见附件

**注意修改 backgroundImage 路径** 

## 配置 on-my-posh 主题

```powershell
notepad $profile
```

写入以下文本。注意修改配置文件路径 

```powershell
oh-my-posh init pwsh --config "D:\Env\oh-my-posh\sail.omp.json" | Invoke-Expression
Import-Module posh-git
Import-Module Terminal-Icons
Set-PSReadLineOption -PredictionSource History
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
cls
```

重新打开 terminal 查看

## 右键在此处打开 Terminal

将以下文本保存为 .reg 文件并执行。

注意：需要下载 terminal.ico 图标文件，如果不生效试试把 wt 改成 windows terminal 可执行文件路径

```toml
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\directory\background\shell\wt]
@="Open Terminal"
"icon"="%LOCALAPPDATA%\\Microsoft\\WindowsApps\\terminal.ico"

[HKEY_CLASSES_ROOT\directory\background\shell\wt\command]
@="wt -d ."
```

## 参考

[1] [我的windows terminal美化方案（oh-my-posh3）](https://kirigaya.cn/blog/article?seq=52) 

{{< attachments title="附件" pattern=".*" />}}

