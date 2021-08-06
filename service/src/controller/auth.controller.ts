import { asyncHandler } from "../middlewares/asyncHandler";
import axios from 'axios'
import FormData from 'form-data';
import { btoa } from "buffer";
const keycloak = require('../../keycloak.json');

export const loginUser = asyncHandler(async (req, res, next) => {
    try {

        let obj:{ [key:string]:string } = {
            "grant_type": "password",
            "client_id": 'frontend',
            // "client_secret": keycloak.credentials.secret,
            "scope": "openid",
            "username": <string>req.body.username,
            "password": <string>req.body.password,
        }

        // const fd = new FormData()
        // fd.append('username', req.body.username)
        // fd.append('password', req.body.password)
        // fd.append('grant_type', 'password')
        // fd.append('client_id', 'service')
        // fd.append('client_secret', '43108279-6454-471b-9edb-6d423d877148')
        // fd.append('scope', 'openid')

        let formBody:any = [];
        for (var property in obj) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(obj[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const resp = await axios({
            url:   `http://localhost:8080/auth/realms/${req.body.realm}/protocol/openid-connect/token`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa('service:43108279-6454-471b-9edb-6d423d877148')
            },
            data: formBody
        })

        res.status(200).json({
            ...resp.data
        })

    } catch (err) {
        console.error(err)
        res.status(400).json({ ...err})
    }
})