import ErrorResponse from "../dto/ErrorResponse";
import { asyncHandler } from "../middlewares/asyncHandler";
import { NextFunction, Request, Response } from 'express';
import { addProduct, getProducts, updateProductById, getProductById } from '../dao/ProductCatalogDao';
import { ProductCatalog } from "../dto/ProductCatalog"


export const getProductCatalog = asyncHandler(async (request:Request, response:Response, next: NextFunction) => {
    try {
        const filters = {...request.body}
        const data = await getProducts(filters)
        response.status(200).json({
            "success": true,
            data
        })
    } catch(err) {
        throw new ErrorResponse("Not able to get anything", 401);
    }
})

export const addProductCatalog = asyncHandler(async (request:Request, response:Response) => {
    try {
        const product:ProductCatalog = <ProductCatalog>request.body
        const data = await addProduct(product)
        response.status(201).json({ "success": true, data })
    } catch (err) {
        throw new ErrorResponse("not able to add the product" + err, 400);
    }
    
})

export const updateProductCatalog = asyncHandler(async (request:Request, response:Response) => {
    try {
        const product:ProductCatalog = <ProductCatalog>request.body
        const id:number = parseInt(<string>request.params.id, 10)
        const newProduct = await updateProductById(id, product);
        response.status(200).json({ "success": true, data: newProduct })
    } catch (err) {
        throw new ErrorResponse(`not able to update the product by id ${request.params.id} ${err}`, 400);
    }
})

export const deleteProductCatalog = asyncHandler(async (request:Request, response:Response) => {
    response.status(200).json({ "success": true })
})

export const patchProductCatalog = asyncHandler(async (request:Request, response:Response) => {
    response.status(200).json({ "success": true })
})

export const getProductCatalogById = asyncHandler(async (req: Request, resp: Response) => {
    try {
        const id:number = parseInt(<string>req.params.id, 10)
        const data = await getProductById(id)
        resp.status(200).json({ "success": true, data })
    } catch(err) {
        throw new ErrorResponse(`Could not get product by id ${req.params.id}`, 400);
    }
})