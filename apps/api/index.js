const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.json({ message: 'Bazel CI/CD Demo API', status: 'ok' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

if (require.main === module) {
  app.listen(PORT, () => console.log(`API running on port ${PORT}`))
}

module.exports = app
