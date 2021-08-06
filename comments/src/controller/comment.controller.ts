import { asyncHandler } from "../middlewares/asyncHandler";
import { getCommentById as commentById, getComments as comments } from "../dao/comment.dao";

export const getComments = asyncHandler(async (req, resp, next) => {
    const data = await comments({})
    resp.status(200).json({
        status: 200,
        success: true,
        data: data
    })
})

export const getCommentById = asyncHandler(async (req, resp, next) => {
    const id:number = <number>parseInt(<string>req.query.id, 10)
    const data = await commentById(id)
    resp.status(200).json({
        status: 200,
        success: true,
        data: data
    })
})