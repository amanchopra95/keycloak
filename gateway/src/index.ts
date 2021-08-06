import express from 'express'
import cors from 'cors'
import * as http from 'http'
import { KeycloakResource } from './lib/keycloak.resource'
import { ProxyConfig } from './proxy/proxy-config'
import proxy from 'express-http-proxy'

const app = express()

// const keycloak = KeycloakResource.initKeycloak()

app.use(cors())

// app.use(keycloak.middleware())

// app.get('/test1', (req, res) => {
//     res.send("Wow")
// })

// app.get('/test', (req, res, next) => {
//     console.log("Wowo")
//     next()
// }, proxy('http://localhost:3001', {
//     proxyReqPathResolver: (rq) => {
//         let parts = rq.url.split('/')
//         console.log(rq.url,parts)
//         parts[1] = 'posts'
//         let url = parts.join('/')
//         console.log(url)
//         return url
//     },
//     proxyErrorHandler: (err, res, next) => {
//         console.error(err)
//         next(err)
//     }
// }), (req, res) => {
//     res.send("No way home")
// })

ProxyConfig.init(app)


console.log(app._router)

http.createServer(app)
.listen(3000)
.on('error', (err) => {
    console.error(err)
})

