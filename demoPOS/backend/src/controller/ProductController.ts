import { NextFunction, Request, Response } from "express";
import { Products } from "../entity/Products";
import { AppDataSource } from "../data-source";

export class ProductController {
    private productRepository = AppDataSource.getMongoRepository(Products);
    
    
}
