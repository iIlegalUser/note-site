---
title: "Windows Terminal 美化"
date: 2023-09-09T14:20:00+08:00

categories: ["Windows"]
series: []
tags: ["Windows"]

math: false
draft: false

cover:
    image: "034.webp"
    alt: "cover"
    relative: true
---

## 安装 Scoop

见 [Windows 下的包管理器：Scoop](../scoop) 

安装 terminal 使用的字体，推荐使用 JetBrainsMono-NF。

```powershell
sudo scoop install -k JetBrainsMono-NF
```

## 安装 Powershell 7

```
scoop install pwsh -k
```

## 安装并配置 on-my-posh

PowerShell 7 自带 PSReadLine，在 PowerShell 5 上需要自己安装，可以通过 `$PSVersionTable` 命令查看当前 PowerShell 版本。

```powershell
$PSVersionTable

Name                           Value
----                           -----
PSVersion                      7.3.7
PSEdition                      Core
GitCommitId                    7.3.7
OS                             Microsoft Windows 10.0.19045
Platform                       Win32NT
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
WSManStackVersion              3.0
```

- 以管理员身份运行 PowerShell，安装插件

```powershell
set-executionpolicy remotesigned
Install-Module PSReadLine -Force
Install-Module posh-git
Install-Module Terminal-Icons
```

- 安装 on-my-posh

```shell
scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json
```

- 下载 oh-my-posh 主题（可选）

```sh
git clone https://github.com/JanDeDobbeleer/oh-my-posh
```

保留其中的 themes 文件夹即可。

## 配置 PowerShell

```powershell
notepad $profile
```

写入以下文本。注意修改 config 路径。

```powershell
oh-my-posh init pwsh --config D:\Env\oh-my-posh\themes\my\sail.omp.json | Invoke-Expression
# Import-Module posh-git
# Import-Module Terminal-Icons

# Shows navigable menu of all options when hitting Tab
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete

# Autocompletion for arrow keys
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward

# auto suggestions
# List
Set-PSReadLineOption -PredictionSource History -PredictionViewStyle ListView
# Line
# Set-PSReadLineOption -PredictionSource History

# cls
```

重新打开 terminal 查看。

## 配置 Windows Terminal

修改配置文件 settings.json，具体文件见附件。

**注意修改 backgroundImage 路径** 。

## 右键在此处打开 Terminal

将以下文本保存为 .reg 文件并执行，或下载附件执行。

注意：需要下载 terminal.ico 图标文件（见附件），如果不生效试试把 wt 改成 windows terminal 完整路径。

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

[2] [魔改的一个posh3主题](https://kirigaya.cn/blog/article?seq=100) 

[3] [Win11下安装PSReadLine终端自动补全](https://blog.csdn.net/m0_61544935/article/details/127474944) 

{{< attachments title="附件" pattern=".*" />}}

