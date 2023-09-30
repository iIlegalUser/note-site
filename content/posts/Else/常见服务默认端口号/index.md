---
title: "常见服务默认端口号"
date: 2023-09-29T19:43:04+08:00

categories: ["Linux"]
series: []
tags: ["Linux", "Port"]

math: false
mermaid: false
draft: false

cover:
    image: "035.webp"
    alt: "cover"
    relative: true
---

0 - 1023 之间的端口号被称作 Well Konwn Ports，由 IANA 分配管理，1024 及以上的端口号可以被其它应用程序使用。

| Port  | Service                  | Description       |
|:-----:|--------------------------|-------------------|
| 1080  | Socks 代理                 |                   |
| 1521  | Oracle 数据库监听端口           |                   |
| 2049  | NFS                      | 网络文件系统            |
| 2181  | Apache Zookeeper         |                   |
| 2375  | Docker REST API (HTTP)   |                   |
| 2376  | Docker REST API (HTTPS)  |                   |
| 3000  | Grafana                  | 监控可视化平台           |
| 3306  | MySQL                    |                   |
| 4200  | AngularJS                | JS 应用设计框架         |
| 5244  | AList                    | 支持多种存储的文件列表程序     |
| 5432  | PostgreSQL               |                   |
| 5901  | VNC                      | 远程桌面控制            |
| 6000  | X11                      |                   |
| 6379  | Redis                    |                   |
| 8080  | Jenkins                  | CI工具              |
| 8848  | Nacos                    | 注册中心、配置中心         |
| 8888  | Jupyter Notebook<br>宝塔面板 | 交互式笔记本<br>服务器运维面板 |
| 9000  | Portainer                | Docker 图形化工具      |
| 25565 | 我的世界                     |                   |
| 27017 | MongoDB                  |                   |

## 参考

[1] [De Facto Ports](https://matt-rickard.com/de-facto-ports) 
