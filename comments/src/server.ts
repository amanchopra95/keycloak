import express from 'express'
import dotenv from 'dotenv'
import { db } from './config/db'
import productCatalogRouter from './routes/ProductCatalogRoutes'
import { router as commentRouter } from './routes/comment.routes'
import { errorHandler } from './middlewares/errorHandler'
import { KeycloakResource } from './lib/keycloak.resource'
import { ExpressSession } from './lib/session.resource'
import session from 'express-session'
import cors from 'cors'

// Initialize environment variables
dotenv.config()

const PORT: number = parseInt(<string>process.env.SERVER_PORT, 10)
let _keycloak

db()
.then((connection) => {

    const app = express()

    app.use(cors())

    app.use(session({
        secret: 'some-scret',
        resave: false,
        saveUninitialized: true,
        store: ExpressSession.memoryStore()
    }))

    _keycloak = KeycloakResource.initKeycloak()

    // Middlewares
    
    app.use(express.json())
    // app.use(_keycloak.middleware())
    app.use('/comments', commentRouter)
    app.use('/api/v1/product', _keycloak.protect(), productCatalogRouter)
    app.use(errorHandler)

    app.listen(PORT, () => {
        console.log(`Rocking on the port ${PORT}`)
    })
})
.catch((err) => {
    console.error(err)
})