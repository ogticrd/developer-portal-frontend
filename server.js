const express = require('express')
const next = require('next')
const axios = require('axios')
require('dotenv').config()

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const apiUrl = process.env.API_URL

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(
    express.urlencoded({
      extended: true,
    }),
  )

  server.use(express.json())

  server.get('/server/*', async (req, res) => {
    const fullUrl = apiUrl + req.url.replace('/server', '')
    if (req.url.includes('picture') || req.url.includes('user/avatar')) {
      console.log('picture');
      const { data } = await axios.get(fullUrl, {
        responseType: 'arraybuffer',
        
      })
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'no-cache',
      })

      res.end(data, 'binary')
    } else {
      const { data } = await axios.get(fullUrl, {
        headers: { Authorization: req.headers?.authorization },
      })
      res.send(data)
    }
  })

  server.post('/server/*', async (req, res) => {
    try {
      const fullUrl = apiUrl + req.url.replace('/server', '')
      const { data } = await axios
        .post(fullUrl, req.body, {
          headers: { Authorization: req.headers?.authorization },
        })
        .catch((err) => res.status(err.response.status).json(err))
      res.send(data)
    } catch (err) {
      res.send(err)
    }
  })

  server.put('/server/*', async (req, res) => {
    try {
      const fullUrl = apiUrl + req.url.replace('/server', '')
      const { data } = await axios
        .put(fullUrl, req.body, {
          headers: { Authorization: req.headers?.authorization },
        })
        .catch((err) => res.status(err.response.status).json(err))
      res.send(data)
    } catch (err) {
      res.send(err)
    }
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }
    console.log(`Ready on http://localhost:${port}`)
  })
})
