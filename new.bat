@echo off
setlocal enabledelayedexpansion 

set "base_dir=content\posts"
:main

set folder_count=0

REM 列出选项
echo     0: 新建分类
for /d %%F in ("%base_dir%\*") do (
    set /a folder_count+=1
    echo     !folder_count!: %%~nxF
)

set /p choice=请输入选项: 
if not defined choice (
    cls
    echo 无效的数字
    goto main
)

if "%choice%" equ "0" goto create

set selected_folder=undefined
set idx=0
for /d %%F in ("%base_dir%\*") do (
    set /a idx+=1
    if !idx! equ %choice% (
        set "selected_folder=%%~nxF"
        echo     已选择: !selected_folder!
        goto endloop
    )
)
:endloop
if "!selected_folder!"=="undefined" (
    cls
    echo 输入无效
    goto main
)
REM 提示用户输入标题名称并创建文章
set /p title=请输入文章标题: 

if not defined title (
    cls
    echo 无效的标题
    goto main
)
hugo new "%base_dir%\%selected_folder%\%title%\index.md" 
goto end

:create
set /p new_folder_name=请输入分类文件夹名称: 
if "!new_folder_name!" equ "" (
    echo 无效的文件夹名称
    cls
    goto main
)
mkdir "%base_dir%\%new_folder_name%"
echo 分类文件夹 "%new_folder_name%" 已创建。

:end
REM 询问用户是否继续
set /p continue=是否继续操作？(y/n, default n): 
if not defined continue set continue="n"
if /i "%continue%"=="y" goto main
