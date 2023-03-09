import express from 'express'
import path from 'path'

import movieRoute from './routes/movies'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/v1/movies', movieRoute)


// wildcard route
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server
