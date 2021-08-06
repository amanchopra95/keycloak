import express, { NextFunction, Request, RequestHandler, Response } from "express";
import { Keycloak } from "keycloak-connect";
import { KeycloakResource } from "../lib/keycloak.resource";

export const protect = (path:any, app:express.Application, keycloak:Keycloak) => (req:Request, res:Response, next:NextFunction) => {

    // In this case keycloak can't be a Singleton

    // Check the route path
    console.log(path.sourcePath, req.headers.authorization)
    console.log(keycloak.accountUrl())
    return keycloak.protect()
    // next()
}