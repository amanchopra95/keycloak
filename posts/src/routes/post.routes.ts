import { Router } from "express";
import { postById, posts } from "../controller/post.controller";

export const router = Router()

router.route('/')
.get(posts)

router.route('/:id')
.get(postById)