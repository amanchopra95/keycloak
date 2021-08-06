import { getPostById, getPosts } from "../dao/post.dao";
import { asyncHandler } from "../middlewares/asyncHandler";

export const posts = asyncHandler(async (req, res, next) => {
    try {
        const data = await getPosts()
        res.status(200).json({
            status: 200,
            success: true,
            data: data
        })
    } catch (err) {
        res.status(400).json({
            status: 400,
            success: false
        })
    }
})

export const postById = asyncHandler(async (req, res, next) => {
    try {
        const id:number = parseInt(req.params.id)
        const data = await getPostById(id)
        res.status(200).json({
            status: 200,
            success: true,
            data: data
        })
    } catch (err) {
        res.status(400).json({
            status: 400,
            success: false
        })
    }
})