import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: [true, 'Please provide a name'],
		trim: true,
	},
	categoria: {
		type: String,
		required: [true, 'Please provide a category'],
		trim: true,
		enum: ['Cuidado de mascotas', 'Adiestramiento', 'Paseos'],
	},
	frecuencia: {
		type: String,
		required: [true, 'Please provide a frequency'],
		trim: true,
		enum: ['Unica', 'Diario', 'Semanal', 'Mensual'],
	},
	tipoMascota: {
		type: String,
		required: [true, 'Please provide a pet type'],
		trim: true,
		enum: ['Perro', 'Gato', 'Conejo', 'Hamster', 'Pez', 'Huron', 'Cobayo', 'Pajaro', 'Tortuga'],
	},
	costoHR: {
		type: Number,
		required: [true, 'Please provide a cost per hour'],
	},
	estado: {
		type: String,
		default: 'Publicado',
		enum: ['Publicado', 'No Publicado'],
	},
	descripcion: {
		type: String,
		required: [true, 'Please provide a description'],
		trim: true,
	},
	calificacion: {
		type: Number,
		default: 0,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

export default mongoose.model('Service', serviceSchema);
