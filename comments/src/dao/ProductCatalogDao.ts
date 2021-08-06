import { ProductCatalogEntity } from "../entities/ProductCatalogEntity";
import { ProductCatalog } from "../dto/ProductCatalog";
import { getManager } from "typeorm";

export class ProductCatalogDao {
    private productRepo = getManager().getRepository(ProductCatalogEntity)

    async addProduct (data:ProductCatalog) {
        const product = this.productRepo.create(data);
        return await this.productRepo.save(product);
    }

    async getProducts(filter:{}) {
        return await this.productRepo.find({
            where: {...filter}
        })
    }

    async getProductById(id:number) {
        return await this.productRepo.findOne({
            where: {
                id
            }
        })
    }

}

export const addProduct = async (data:ProductCatalog) => {
    const productRepo = getManager().getRepository(ProductCatalogEntity);
    const product = productRepo.create(data)
    return await productRepo.save(product);
}

export const getProducts = async (filter:{}) => {
    const productRepo = getManager().getRepository(ProductCatalogEntity);
    return await productRepo.find({
        where: {...filter}
    })
}

export const getProductById = async (id:number) => {
    const productRepo = getManager().getRepository(ProductCatalogEntity);
    return await productRepo.findOne(id);
}

export const updateProductById = async (id:number, data:ProductCatalog) => {
    const productRepo = getManager().getRepository(ProductCatalogEntity);
    const oldProduct = await productRepo.findOne(id)
    const product = productRepo.create(data)
    const newProduct = {...oldProduct, ...product}
    return await productRepo.save(newProduct);
}


