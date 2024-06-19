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
		},
		zona: {
			type: String,
			trim: true,
			enum: barriosCABA,
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
