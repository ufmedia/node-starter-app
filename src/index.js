const express = require('express')
const appConfig = require('./config/app.config')

const routeIndex = require('./routes/index.route')

const app = express()

app.use('/', routeIndex);


app.listen(appConfig.PORT, () => {
  console.log(`Test app listening on port ${appConfig.PORT}`)
})