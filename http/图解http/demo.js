const net = require('net')

const client = net.createConnection(
  {
    host: 'www.baidu.com',
    port: 80
  },
  () => {
    client.write(`HEAD / HTTP/1.1\r\n
    Host: www.baidu.com\r\n
    Cookie: BAIDUID=818763236A41AB723EE45626F70C2555:FG=1;`)
    console.log('connected to server!')
  }
)

client.on('data', (chunk) => {
  console.log(chunk.toString())
  client.end()
})
