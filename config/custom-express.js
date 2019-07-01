const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = () => {
  const app = express()
  
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(cors())
  consign()
    .include('controllers')
    .into(app)

  return app
}