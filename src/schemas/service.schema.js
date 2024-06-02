import { z } from 'zod';

export const createServiceSchema = z.object({
	nombre: z
		.string({
			message: 'El nombre debe ser un string',
		})
		.min(3)
		.max(255),

	categoria: z
		.string({
			message: 'La categoria debe ser un string',
		})
		.refine((value) => ['Cuidado de mascotas', 'Adiestramiento', 'Paseos'].includes(value)),

	frecuencia: z
		.string({
			message: 'La frecuencia debe ser un string',
		})
		.refine((value) => ['Unica', 'Diario', 'Semanal', 'Mensual'].includes(value)),

	tipoMascota: z
		.string({
			message: 'El tipo de mascota debe ser un string',
		})
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

	costoHR: z
		.number({
			message: 'El costo por hora debe ser un número',
		})
		.min(1),

	estado: z
		.string({
			message: 'El estado debe ser un string',
		})
		.refine((value) => ['Publicado', 'No publicado'].includes(value), {
			message: 'Tipo invalido',
		}),

	descripcion: z
		.string({
			message: 'La descripción debe ser un string',
		})
		.min(3)
		.max(255),
});

export const updateServiceSchema = z.object({
	nombre: z
		.string({
			message: 'El nombre debe ser un string',
		})
		.min(3)
		.max(255)
		.optional(),

	categoria: z
		.string({
			message: 'La categoria debe ser un string',
		})
		.refine((value) => ['Cuidado de mascotas', 'Adiestramiento', 'Paseos'].includes(value))
		.optional(),

	frecuencia: z
		.string({
			message: 'La frecuencia debe ser un string',
		})
		.refine((value) => ['Unica', 'Diario', 'Semanal', 'Mensual'].includes(value))
		.optional(),

	tipoMascota: z
		.string({
			message: 'El tipo de mascota debe ser un string',
		})
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
		)
		.optional(),

	costoHR: z
		.number({
			message: 'El costo por hora debe ser un número',
		})
		.min(1)
		.optional(),

	estado: z
		.string({
			message: 'El estado debe ser un string',
		})
		.refine((value) => ['Publicado', 'No publicado'].includes(value), {
			message: 'Tipo invalido',
		})
		.optional(),

	descripcion: z
		.string({
			message: 'La descripción debe ser un string',
		})
		.min(3)
		.max(255)
		.optional(),


	calificacion: z.undefined()

});
