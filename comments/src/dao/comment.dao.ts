import { getManager } from "typeorm"
import { CommentEntity } from "../entities/comment.entity"

export const getComments = async (filter:{}) => {
    const commentRepo = getManager().getRepository(CommentEntity)
    return await commentRepo.find({
        where: { ...filter }
    })
}

export const getCommentById = async (id:number) => {
    const commentRepo = getManager().getRepository(CommentEntity)
    return await commentRepo.findOne(id)
}