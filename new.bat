@echo off
setlocal enabledelayedexpansion 

set "base_dir=content\posts"
:main

set folder_count=0

REM �г�ѡ��
echo     0: �½�����
for /d %%F in ("%base_dir%\*") do (
    set /a folder_count+=1
    echo     !folder_count!: %%~nxF
)

set /p choice=������ѡ��: 
if not defined choice (
    cls
    echo ��Ч������
    goto main
)

if "%choice%" equ "0" goto create

set selected_folder=undefined
set idx=0
for /d %%F in ("%base_dir%\*") do (
    set /a idx+=1
    if !idx! equ %choice% (
        set "selected_folder=%%~nxF"
        echo     ��ѡ��: !selected_folder!
        goto endloop
    )
)
:endloop
if "!selected_folder!"=="undefined" (
    cls
    echo ������Ч
    goto main
)
REM ��ʾ�û�����������Ʋ���������
set /p title=���������±���: 

if not defined title (
    cls
    echo ��Ч�ı���
    goto main
)
hugo new "%base_dir%\%selected_folder%\%title%\index.md" 
goto end

:create
set /p new_folder_name=����������ļ�������: 
if "!new_folder_name!" equ "" (
    echo ��Ч���ļ�������
    cls
    goto main
)
mkdir "%base_dir%\%new_folder_name%"
echo �����ļ��� "%new_folder_name%" �Ѵ�����

:end
REM ѯ���û��Ƿ����
set /p continue=�Ƿ����������(y/n, default n): 
if not defined continue set continue="n"
if /i "%continue%"=="y" goto main
