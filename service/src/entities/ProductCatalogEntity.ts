import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "product_catalog"
})
export class ProductCatalogEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "product_name"
    })
    name: string;

    @Column({
        name: "product_category"
    })
    category: string;

    @Column({
        name: "product_description"
    })
    description: string;

    @Column({
        name: "product_price"
    })
    price: number;

    @Column()
    active: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
    
}