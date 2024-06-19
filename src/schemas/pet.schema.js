import { z } from 'zod';
import { tipoMascota } from '../config.js';

export const petSchema = z.object({
	nombre: z
		.string({
			message: 'Nombre invalido',
		})
		.min(1)
		.max(255),
	tipoMascota: z

		.number()
		.min(0)
		.max(tipoMascota.length - 1),
});
