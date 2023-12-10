const http = require('http')
const { json } = require('stream/consumers')

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-allow-headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
    'Access-Control-Max-Age': '1000'
  })
  let str = JSON.stringify({ name: 'tom', age: 20 })
  res.end(str)
})

app.listen(3001, () => {
  console.log('server is running on port 3001')
})
