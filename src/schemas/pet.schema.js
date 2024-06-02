import { z } from 'zod';

export const petSchema = z.object({
	nombre: z.string(),
	tipoMascota: z
		.string()
		.refine(
			(value) =>
				[
					'Perro',
					'Gato',
					'Conejo',
					'Hamster',
					'Pez',
					'Huron',
					'Cobayo',
					'Pajaro',
					'Tortuga',
				].includes(value),
			{
				message: 'Tipo invalido',
			}
		),
});
