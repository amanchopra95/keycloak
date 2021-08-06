import { getManager } from "typeorm"
import { PostEntity } from "../entities/post.entity"

export const getPosts = async () => {
    const post = getManager().getRepository(PostEntity)
    return await post.find()
}

export const getPostById = async (id:number) => {
    const post = getManager().getRepository(PostEntity)
    return await post.findOne(id)
}