import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { engine, create } from 'express-handlebars'
import auth from './routes/auth.js'
import product from './routes/products.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const hbs = create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')
app.use(auth)
app.use(product)
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


const PORT = process.env.PORT || 4100
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))