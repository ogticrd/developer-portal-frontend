const express = require('express')
const next = require('next')
const axios = require('axios')
require('dotenv').config()

const port = process.env.PORT
const dev = process.env.NODE_ENV !== 'production'
const apiUrl = process.env.REACT_APP_API_URL

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
      const { data } = await axios.get(fullUrl, {
        responseType: 'arraybuffer',
      })
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'no-cache',
      })

      res.end(data, 'binary')
    } else {
      const headers = {}
      if (req.headers?.authorization) {
        headers['Authorization'] = req.headers?.authorization
      }

      const result = await axios
        .get(fullUrl, {
          headers,
        })
        .catch((err) => {
          console.log(err.response.data.errors)
          res.status(err.response?.status || 500).json(err.response.data.errors)
        })
      if (result) res.send(result.data)
    }
  })

  server.post('/server/*', async (req, res) => {
    try {
      const fullUrl = apiUrl + req.url.replace('/server', '')
      const headers = {}
      if (req.headers?.authorization) {
        headers['Authorization'] = req.headers?.authorization
      }
      const result = await axios
        .post(fullUrl, req.body, {
          headers,
        })
        .catch((err) => {
          console.log(err.response.data.errors)
          res.status(err.response?.status || 500).json(err.response.data.errors)
        })
      if (result) res.send(result.data)
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  })

  server.put('/server/*', async (req, res) => {
    try {
      const fullUrl = apiUrl + req.url.replace('/server', '')
      const headers = {}
      if (req.headers?.authorization) {
        headers['Authorization'] = req.headers?.authorization
      }
      const result = await axios
        .put(fullUrl, req.body, {
          headers,
        })
        .catch((err) => {
          console.log(err.response.data.errors)
          res.status(err.response?.status || 500).json(err.response.data.errors)
        })
      if (result) res.send(result.data)
    } catch (err) {
      res.send(err)
    }
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log(`Ready on http://localhost:${port}`)
  })
})
