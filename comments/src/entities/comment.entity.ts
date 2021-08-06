import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'comments'
})
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    comment: string

    @Column()
    postId: number

    @Column()
    parent: number
}