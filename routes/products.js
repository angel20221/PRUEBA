const express=require('express');
const router=express.Router();
const ProductoController=require('../controllers/ProductController');

router.get('/',ProductoController.index);
router.post('/products',ProductoController.createProduct);
router.get('/products/:id/edit',ProductoController.showEditForm);
router.post('/products/:id',ProductoController.updateProducto);
router.get('/products/:id/delete', ProductoController.deleteProduct);
module.exports=router;