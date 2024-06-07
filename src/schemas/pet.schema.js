import { z } from 'zod';
import { tipoMascota } from '../config.js';

export const petSchema = z.object({
	nombre: z
		.string({
			message: 'Nombre invalido',
		})
		.min(1)
		.max(255),
	tipoMascota: z.string().refine((value) => tipoMascota.includes(value), {
		message: 'Tipo invalido',
	}),
});
