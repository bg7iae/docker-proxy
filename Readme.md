# 通过 Cloudflare Workers 自建 Docker 代理

众所周知的原因，国内访问 Docker Hub 非常慢，甚至无法访问。而通过 Cloudflare 提供的 Workers 可以实现反向代理，从而实现加速访问。

## 配置

1. 注册 Cloudflare 账号，添加域名，配置 DNS 解析。

2. 注册 Workers 账号，绑定域名，创建一个新的 Worker。

3. 复制 `workers.js` 中的代码，粘贴到 Worker 中，保存并部署。

4. 设置自定义域名（假设为 docker.domain.com）。

## 使用

1. 在终端这样使用（假设前面配置的域名为 docker.domain.com）

```
docker pull docker.domain.com/mysql:latest
```

2. 用就完了...