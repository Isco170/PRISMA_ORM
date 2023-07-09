import { Router } from 'express'
import { CreateProductController } from './controller/createProductController';
import { CreateCategoriesController } from './controller/createCategoriesController';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoriesController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);

export { router };