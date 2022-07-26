const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const appConfig = require('./src/config/app.config')

const routeIndex = require('./src/routes/index.route')

const app = express()

//Expose view directories
const nunjucksViews = [
  path.join(__dirname, 'node_modules/govuk-frontend/'),
  __dirname
]

const nunjucksEnvironment = nunjucks.configure(nunjucksViews, {
  autoescape: true,
  express: app
});

nunjucksEnvironment.addGlobal('js_path', '/public/bundle.js')

app.use('/', routeIndex);


app.use('/public', express.static(path.join(__dirname, '/assets/')))
app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk/assets')))
app.use('/govuk-frontend', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk')));

app.listen(appConfig.PORT, () => {
  console.log(`Test app listening on port ${appConfig.PORT}`)
})