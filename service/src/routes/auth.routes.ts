import { Router } from "express";
import { loginUser } from "../controller/auth.controller";

export const authRouter = Router()

authRouter.route('/')
.post(loginUser)