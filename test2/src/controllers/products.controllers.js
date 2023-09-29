import Product from '../models/Products'

export const createProduct = async (req, res) => {
    
    const {nombre, marca, disponibilidad, descuento, precioDescuento, imagen, descripcion, categorias, habilitado} = req.body

    const newProduct = new Product({nombre, marca, disponibilidad, descuento, precioDescuento, imagen, descripcion, categorias, habilitado});

    const productSaved = await newProduct.save();
    
    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product)
}

export const updateProductByID = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    });
    res.status(204).json()
}

export const deleteProductById = async (req, res) => {
    const {productId} = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(204).json(productId)
}