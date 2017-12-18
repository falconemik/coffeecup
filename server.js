const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
const session = require('express-session')
const app = require('express')()
const port = process.env.PORT || 3000
// Body parser, to access req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  console.log(req.params)
  console.log(req.body)
  res.status(200).send()
})

app.post('/answer', (req, res) => {
  const { status } = req.body
  console.log(status)
  sendEmail(status)
  res.status(200).send()
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})

function sendEmail (status) {
  sgMail.setApiKey('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')

  const msg = {
    to: 'ulianazhernokleva@gmail.com',
    subject: 'заказ' + status
  }
  const promise = sgMail.send(msg)
  promise.then((resolve, reject) => { resolve() })
  console.log(promise)
}

// Sessions to create req.session
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// POST /api/login to log in the user and add him to the req.session.authUser
app.post('/api/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

// POST /api/logout to log out the user and remove it from the req.session
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(8080)
console.log('Server is listening on http://localhost:8080')
