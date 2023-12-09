- HTTP 协议用于客户端和服务器端之间的通信

- 请求/响应

  - demo.js

- HTTP 是无状态(stateless)协议, 引入 Cookie 解决状态记录的问题

- 告知服务器意图的 HTTP 方法

  - GET ：获取资源
  - POST：传输实体主体
  - PUT：传输文件 鉴于 HTTP/1.1 的 PUT 方法自身不带验证机制(?)，任何人都可以 上传文件 , 存在安全性问题，因此一般的 Web 网站不使用该方法。若 配合 Web 应用程序的验证机制，或架构设计采用 REST（REpresentational State Transfer，表征状态转移）标准的同类 Web 网站，就可能会开放使用 PUT 方法。
  - HEAD：获得报文首部
  - DELETE：删除文件
  - OPTIONS：询问支持的方法
  - TRACE：追踪路径
  - CONNECT：要求用隧道协议连接代理

- 持久连接

  - 持久连接的特点是，只要任意一端 没有明确提出断开连接，则保持 TCP 连接状态。

- 管线化
