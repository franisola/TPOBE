import mongoose from 'mongoose';
import { barriosCABA } from '../config.js';

const UserSchema = new mongoose.Schema(
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
		contraseña: {
			type: String,
			required: true,
			trim: true,
		},
		telefono: {
			type: String,
			required: [true, 'Please provide a telefono'],
			trim: true,
		},
		domicilio: {
			type: String,
			required: [true, 'Please provide a domicilio'],
			trim: true,
		},
		descripcion: {
			type: String,
			trim: true,
		},
		foto: {
			type: String,
			trim: true,
            default: 'https://firebasestorage.googleapis.com/v0/b/tpoapi-fe3ee.appspot.com/o/image_header.png?alt=media&token=56073619-3c33-4e90-b0c1-57e1e0344439'
		},
		zona: {
			type: String,
			trim: true,
			enum: barriosCABA,
            default: '',
		},
		role: {
			type: Number,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('User', UserSchema);
