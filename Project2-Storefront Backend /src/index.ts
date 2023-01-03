import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import product_routes from './handlers/product'
import user_routes from './handlers/user'
import order_routes from './handlers/order'


const app: express.Application = express()
const address: string = "0.0.0.0:3100"

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
      extended: true,
    }))
app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

product_routes(app);
user_routes(app)
order_routes(app)

app.listen(3100, function () {
    console.log(`starting app on: ${address}`)
})

export default app