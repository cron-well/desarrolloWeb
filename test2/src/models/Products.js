import {Schema, model} from 'mongoose';	

const productSchema = new Schema({
    // identificador : Number,
    nombre: String,
    marca: String,
    disponibilidad: Boolean,
    descuento: Number,
    precioDescuento: Number,
    imagen: String,
    descripcion: String,
    categorias: [String],
    habilitado: Boolean
},{
    timestamps: true,
    versionKey: false
});

export default model('Product', productSchema);