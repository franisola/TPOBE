const mongoose = require('mongoose');


const UserSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true,
        },
        apellido: {
            type: String,
            required: [true, 'Please provide a last name'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            trim: true,
            unique: true,
        },
        contrasena: {
            type: String,
            required: true,
            trim: true,
        },
        telefono: {
            type: String,
            required: [true, 'Please provide a telefono'],
            trim: true,
        },
        descripcion: {
            type: String,
            required: [true, 'Please provide a descripcion'],
            trim: true,
        },
        domicilio: {
            type: String,
            required: [true, 'Please provide a domicilio'],
            trim: true,
        },
        foto: {
            type: string,
            trim: true,
        },
        zona: {
            type: String,
            required: [true, 'Please provide a zona'],
            trim: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        

    }, 
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;