import { Router } from 'express'
import { CreateProductController } from './controller/createProductController';

const router = Router();

const createProduct = new CreateProductController();

router.post("/product", createProduct.handle);

export { router };