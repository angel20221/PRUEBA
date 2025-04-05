const Product=require('../models/Product');
exports.index = async (req, res)=>{
    try{
        const products=await Product.obtenerTodo();
         res.render('index',{ products });
    }catch(error){
        res.redirect('/?error=Error al cargar productos');

    }
}

exports.createProduct = async(req,res)=>{
    try{
        
        await Product.create(req.body);
        res.redirect('/?success=Producto creado')
    }catch(error){
        res.redirect('/?error=Error al crear');
    }
};

exports.showEditForm = async(req,res)=>{
    try{
        const product= await Product.getById(req.params.id);
        
        res.render('products/edit',{product});
    }catch(error){
        res.redirect('/?error=Error al cargar edición');
    }
};
exports.updateProducto= async(req,res)=>{
    try{

        await Product.update(req.params.id,req.body);
        res.redirect('/?success=Producto actualizado');
    }catch(error){
        res.redirect('/?error=Error al actualizar');
    }
}
exports.deleteProduct = async (req, res) => {
    try {
      await Product.delete(req.params.id);
      res.redirect('/?success=Producto eliminado');
    } catch (error) {
      res.redirect('/?error=Error al eliminar');
    }
  };