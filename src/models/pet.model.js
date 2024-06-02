import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema(
	{
		nombre: {
			type: String,
			required: [true, 'Please provide a name'],
			trim: true,
		},
		tipoMascota: {
			type: String,
			required: [true],
			trim: true,
			enum: [
				'Perro',
				'Gato',
				'Conejo',
				'Hamster',
				'Pez',
				'Huron',
				'Cobayo',
				'Pajaro',
				'Tortuga',
			],
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Pet', PetSchema);
