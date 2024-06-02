import { z } from 'zod';
import { tipoMascota } from '../config.js';

export const petSchema = z.object({
	nombre: z.string(),
	tipoMascota: z.string().refine((value) => tipoMascota.includes(value), {
		message: 'Tipo invalido',
	}),
});
