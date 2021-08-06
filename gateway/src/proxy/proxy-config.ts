import express from 'express'
import proxy from 'express-http-proxy'
import * as url from 'url'
import { merge as _merge } from 'lodash'
import { KeycloakResource } from '../lib/keycloak.resource'
import { protect } from '../middlewares/keycloak.middleware'

const proxyDefaultOptions = {
    changeOrigin: true,
    // filter: (req: Request) => {
    //     return !isPathFromAnOrchestratedRoute(req);
    // },
    limit: "15MB",
    logLevel: "debug",
    preserveHostHdr: true,
    // proxyReqOptDecorator: (proxyReqOpts: any, srcRequest: any) => {
    //     proxyReqOpts.headers = _merge({}, srcRequest.headers, {
    //         "x-request-identifier": uuid.v4(),
    //     });
    //     return proxyReqOpts;
    // },
    // proxyReqPathResolver: (req: Request) => {
    //     return req.originalUrl;
    // },
};

const commentPath = [
    {
        sourcePath: '/comments',
        targetPath: url.format({
            hostname: 'localhost',
            pathname: 'comments',
            port: 3002,
            protocol: 'http'
        }),
        auth: {
            realm: "dispatch",
            resource: "comments",
            "bearer-only": true,
            "auth-server-url": "http://localhost:8080/auth/",
            "confidential-port": 0,
            "ssl-required": "external",
        }
    }
]

const postPath = [
    {
        sourcePath: '/posts',
        targetPath: url.format({
            hostname: 'localhost',
            pathname: 'posts',
            port: 3001,
            protocol: 'http'
        }),
        auth: {
            realm: "dispatch",
            resource: "posts",
            "bearer-only": true,
            "auth-server-url": "http://localhost:8080/auth/",
            "confidential-port": 0,
            "ssl-required": "external",
        }
    }
]

const proxyPaths = [...commentPath, ...postPath]

export class ProxyConfig {
    public static init(app:express.Application) {
        proxyPaths.forEach((path:any) => {
            const { sourcePath, targetPath, options = {} } = path
            let keycloak = KeycloakResource.initiliaze(JSON.stringify(path.auth))
            app.use(keycloak.middleware())
            app.use(sourcePath, 
                protect(path, app, keycloak),
                // keycloak.protect(),
                proxy(targetPath, {
                    proxyReqPathResolver: (req) => {
                        console.log(targetPath)
                        return targetPath
                    }
                }))
        })
    }
}