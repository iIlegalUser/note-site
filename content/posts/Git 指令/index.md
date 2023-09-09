---
title: "Git 指令"
date: 2023-05-02T22:13:26+08:00

categories: ["Git"]
series: []
tags: ["Git"]

cover:
    image: "013.webp"
    alt: "cover"
    relative: true
---



## git add

```sh
# 添加工作区一个或多个文件的修改到暂存区
git add [filename | pattern]
# 将所有修改加入暂存区
git add .

# 撤回文件
git rm --cached [file]
```

## git commit

```sh
# 提交暂存区内容到本地仓库的当前分支
git commit -m '注释内容' 
```

## git log

```sh
git log [option]

# --all: 显示所有分支
# --(pretty=)oneline: 将提交信息显示为一行
# --graph: 以图的形式显示
```

多屏显示控制方式：空格向下翻页，b 向上翻页，q 退出

## git diff

将工作区文件与其它版本文件比较，默认和暂存区比较

```sh
git diff [版本] [文件]
```

## git checkout 切换

```sh
# 切换分支
git checkout <branch>
# 例如：切换到名为 develop 的分支
git checkout develop	

# 创建并切换分支
git checkout -b <new-branch>
# 例如：创建并切换到 feature 分支
git checkout -b feature		

# 切换到指定的提交。commit 可以是提交哈希值或者分支名称
git checkout <commit>
# 例如：切换到哈希值为 a1b2c3d4 的提交
git checkout a1b2c3d4

# 切换到指定的标签
git checkout <tag>
# 例如：切换到 v1.0.0 标签
git checkout v1.0.0

# 将指定的文件恢复到上一次提交的状态
git checkout -- <file>
# 例如：将 index.html 文件恢复到上一次提交的状态（放弃修改）
git checkout -- index.html

# 将指定分支中的文件复制到当前分支中
git checkout <branch> -- <file>
# 例如：将 feature 分支中的 index.html 文件复制到当前分支中
git checkout feature -- index.html
```

## git branch 分支管理

```sh
# 列出本地所有分支，当前分支前面会有一个星号 (*) 
git branch [-a|v|r] [--merged] [--no-merged]
# -a: 列出本地和远程仓库的所有分支
# -v: verbose 信息
# -r: 列出远程仓库的所有分支
# --merged: 列出已经被合并的分支
# --no-merged: 列出还未被合并的分支

# 创建本地分支
git branch <name>

# 删除分支
git branch -d <branch>	# 分支必须先被合并到其他分支才能被删除
git branch -D <branch>	# 强制删除

# 重命名分支
git branch -m <new-name>

# 将 branch 分支指向指定的 commit
git branch -f <branch> <commit>

# 设置本地分支跟踪远程分支
git branch --set-upstream-to=<remote>/<branch>

```



## git merge 合并

```sh
# 将名为 <branch> 的分支合并到当前分支
git merge <branch>

# 执行不快进合并，将 <branch> 分支合并到当前分支，同时创建一个新的合并提交
git merge --no-ff <branch>

# 将指定的提交合并到当前分支
git merge <commit>

# 将指定的提交合并到当前分支
git merge --abort
```



## git remote 远程仓库

```sh
# 添加远程仓库，默认远端名称 origin
git remote add <name> <url>
git remote [remove|rename] <name>

#查看远程仓库
git remote -v	
```



## git push, clone, fetch, pull

```sh

# push
git push [-f] [--set--upstream] <remote> <branch>
# -f: 强制覆盖
# --set--upstream: 推送到远端的同时建立和远端分支的联系。

# 从远程 Git 仓库克隆代码，会自动设置一个名为 origin 的远程仓库
git clone <url>

# 不指定远端名称和分支名，则抓取所有分支
git fetch [-p] <remote> <branch>
# -p: 修剪操作，比如删除不存在的远程分支引用

# 拉取
git pull <remote> <branch>
```

Git fetch 和 Git pull 的区别如下：

- Git fetch 命令只会将远程仓库的变化拉取到本地仓库，不会自动将变化合并到当前工作分支。相反，Git pull 命令会拉取远程仓库的变化，并将其合并到当前工作分支。因此，Git pull 命令可以看作是 Git fetch 和 Git merge 两个命令的组合。
- Git fetch 命令可以让你检查远程仓库的变化，以便在合并之前对其进行审查。Git pull 命令会直接将远程仓库的变化合并到当前工作分支，这可能会导致冲突，因此需要在合并之前仔细检查。



## git tag 标签管理

`git tag` 命令用于给 Git 仓库中的某个提交打标签，可以理解为 Git 版本库的快照。通过给某个重要的提交打上一个有意义的标记，以便在后续查找和管理。

**Git 中的标签分为两种：** 

- 轻量标签（lightweight tag）：指向某个提交的引用，没有附加信息，它只是指向该提交的指针
- 附注标签（annotated tag）：一个独立的 Git 对象，它有自己的校验和，包含标签名称、标签创建者、标签日期、标签注释等附加信息

```sh
# 创建一个轻量标签
git tag v1.0.0

# 创建一个附注标签
git tag -a v1.0.0 -m "First version released" 123b45b1

# 查看标签信息
git show <tag>
# 或者
git tag -v <tag>

# 推送所有标签
git push origin --tags
# 推送指定标签
git push origin <tag>

# 删除指定标签
git tag -d <tag>
#删除远程仓库指定标签
git push origin :refs/tags/<tag>

# 获取指定标签
git fetch origin <tag>
```

## git reset 回退

```sh
git reset <option> <commit>
# 参数：
# --sort：仅在本地库移动 HEAD 指针
# --mixed：在本地库移动 HEAD 指针，重置暂存区(默认值)
# --hard：在本地库移动 HEAD 指针，重置暂存区，重置工作区

git reset --hard HEAD\^\^：后退两个版本
git reset --hard HEAD~2：后退两个版本
```

## git revert 撤销

`git revert` 命令可以用于撤销一个或多个提交，同时创建一个新的提交来保存撤销操作，这样可以 **保留** 原有的提交 **历史记录**，并在之后的开发中进行修改和调整。用法

```sh
git revert <commit>

# 同时撤销多个提交
git revert <commit1> <commit2> ...

# 撤销最近的提交
git revert HEAD

# 撤销某一段提交
git revert <start>..<end>
```

## git rebase 重放

`git rebase` 是 Git 命令中的一个常用命令，用于将一个分支的修改合并到另一个分支中。与 `git merge` 命令不同，`git rebase` 命令会将本地未提交的修改「移动」到目标分支的最新提交之上。

```sh
# 将当前分支的修改“移动”到 <branch> 分支的最新提交之上
git rebase <branch>

# 以交互模式（interactive mode）执行 rebase，可以让开发者自定义合并策略
git rebase -i <commit>
# 例如：
git rebase -i HEAD~3

# 在解决完冲突后继续执行 rebase 操作
git rebase --continue

# 取消当前的 rebase 操作，并回到 rebase 操作之前的状态
git rebase --abort
```

## git stash 贮藏

假如现在我们在某个分支做了一些工作（但是还没完成，暂时不能 push），这时候这个分支急需进行操作（比如 rebase）。

`git stash` 命令用于将工作区中的修改暂时贮藏起来，以便稍后恢复。这在需要切换分支或者打补丁时非常有用，用法：

```sh
# 保存当前工作目录中的修改，并添加一条描述信息，以便在后续的工作中更好地区分每个 stash。
git stash save "message"

# 列出所有已保存的贮藏操作
git stash list

# 查看指定 stash 的详细信息
git stash show stash@{n}

# 将指定 stash 中的修改应用到当前分支上，并将这些修改从 stash 中删除。
git stash apply stash@{n}

# 将最新的 stash 中的修改应用到当前分支上，并将这些修改从 stash 中删除
git stash pop

# 放弃（删除）指定 stash 中的修改
git stash drop stash@{n}

# 清空所有的 stash
git stash clear
```

**注意** 恢复 stash 贮藏操作，如果与当前工作目录暂存区的修改冲突，也要先修改冲突才能再进行 stash 的相关操作。

## git cherry-pick 挑选提交

我们知道，Git 的每次提交（commit）都会生成一个唯一的哈希值。`git cherry-pick` 命令可以将某个提交的更改应用到当前分支中（而无需将整个分支合并过来），并自动生成一个新的提交，这个新的提交包含了指定提交的更改，用法：

```sh
git cherry-pick <commit>
```

**注意** `git cherry-pick` 会自动解决冲突。

## git reflog 回溯

用于查看本地仓库历史操作记录

```sh
git reflog
```

## 参考

[Git 版本控制学习笔记（二）](https://dejavu.moe/posts/git-note-2/) 
