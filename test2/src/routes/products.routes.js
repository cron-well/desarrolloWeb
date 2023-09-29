import {Router} from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controllers'

router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', productsCtrl.updateProductByID)

router.delete('/', productsCtrl.deleteProductById)

export default router;