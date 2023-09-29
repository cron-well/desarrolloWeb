import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    nombre: String,
    apellidos: String,
    fechaNacimiento: Date,
    validacionClave: String,
    direccionEntrega: String,
    nit: String,
    test: Boolean,
    numeroTelefonico: String,
    correo: {
        type: String,
        required: true,
        unique: true
    },
    clave: {
        type: String,
        required: true
    },
    roles: [{
        ref : "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (clave) => {
    const salt = await bcrypt.genSalt(10)
    bcrypt.hash(clave, salt)
}

userSchema.statics.comparePassword = async (clave, receivedClave) => {
    return await bcrypt.compare(clave, receivedClave)
}

// productSchema.statics.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
// };

// productSchema.statics.comparePassword = async (password,            receivedPassword) => {
//     return await bcrypt.compare(password, receivedPassword)
// }

export default model('User', userSchema);