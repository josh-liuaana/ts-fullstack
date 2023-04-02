import server from './server'

const path = require('path')
const dotenv = require('dotenv')

const envPath = path.join(__dirname, '../.env')
dotenv.config({ path: envPath })

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)  
  // console.log(process.env.IMDB_KEY)
})
