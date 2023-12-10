const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
  console.log('in server')
  const data = fs.readFileSync('./index.html')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(data)
})

app.listen(3002, () => {
  console.log('server is running on port 3002')
})
