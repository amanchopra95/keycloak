import { Router } from 'express'

import {
    getCommentById,
    getComments
} from '../controller/comment.controller'

export const router = Router()

router.route('/')
.get(getComments)

router.route('/:id')
.get(getCommentById)