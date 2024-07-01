addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    // 获取原始请求 URL
    let url = new URL(request.url)
  
    // 替换为 Docker Hub 的 URL
    url.hostname = 'registry-1.docker.io'
    url.protocol = 'https:'
  
    // 重构请求头
    let headers = new Headers(request.headers)
    headers.set('Host', 'registry-1.docker.io')
  
    // 删除不需要的头
    headers.delete('cf-connecting-ip')
    headers.delete('cf-ipcountry')
    headers.delete('cf-ray')
    headers.delete('cf-visitor')
    headers.delete('x-forwarded-proto')
    headers.delete('x-forwarded-for')
    headers.delete('x-real-ip')
  
    // 发送代理请求
    let response = await fetch(url.href, {
      method: request.method,
      headers: headers,
      body: request.body
    })
  
    // 返回代理响应
    return response
  }