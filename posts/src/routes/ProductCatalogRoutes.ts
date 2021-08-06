import { Router } from "express";
import {
    addProductCatalog,
    deleteProductCatalog,
    getProductCatalog,
    patchProductCatalog,
    updateProductCatalog,
    getProductCatalogById
} from "../controller/ProductCatalogController"

const productCatalogRouter = Router()

productCatalogRouter.route('/')
    .get(getProductCatalog)
    .post(addProductCatalog)

productCatalogRouter.route('/:id')
    .get(getProductCatalogById)
    .put(updateProductCatalog)
    .delete(deleteProductCatalog)
    .patch(patchProductCatalog)


export default productCatalogRouter;