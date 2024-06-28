import { z } from 'zod';
import { barriosCABA } from '../config.js';

export const registerSchema = z.object({
	nombre: z
		.string({
			message: 'Debes completar este campo',
		})
		.min(3, {
            message: 'El nombre debe tener al menos 3 caracteres',
        })
		.max(30, {
            message: 'El nombre debe tener como máximo 30 caracteres',
        }),

	apellido: z
		.string({
			message: 'Debes completar este campo',
		})
		.min(3, {
            message: 'El apellido debe tener al menos 3 caracteres',
        })
		.max(30, {
            message: 'El apellido debe tener como máximo 30 caracteres',
        }),

	email: z
		.string({
			message: 'Debes completar este campo',
		})
		.email({
			message: 'El email debe ser un email válido',
		}),

	contraseña: z
		.string({
			message: 'Debes completar este campo',
		})
		.min(6, {
			message: 'La contraseña debe tener al menos 6 caracteres',
		})
		.max(20, {
			message: 'La contraseña debe tener como máximo 20 caracteres',
		}),

	telefono: z
		.string({
			message: 'Debes completar este campo',
		})
        .min(10, {
			message: 'El teléfono es invalido',
		})
		.max(10, {
			message: 'El teléfono es invalido',
		})
		.refine((val) => val.startsWith('11') || val.startsWith('15'), {
            message: 'El teléfono debe comenzar con 11 o 15',
        }),		

	domicilio: z
		.string({
			message: 'Debes completar este campo',
		})
		.min(3, {
			message: 'El domicilio debe tener al menos 3 caracteres',
		}),
	role: z.number({ message: 'El role debe ser un número' }).int().finite().gte(1).lte(2), // No se puede enviar en el registro

	descripcion: z.undefined(), // No se puede enviar en el registro
	zona: z.undefined(), // No se puede enviar en el registro
	foto: z.undefined(), // No se puede enviar en el registro
});

export const loginSchema = z.object({
	email: z
		.string({
			message: 'Debes completar este campo',
		})
		.email({
			message: 'El email debe ser un email válido',
		}),

	contraseña: z
		.string({
			message:'Debes completar este campo',
		})
		.min(6, {
			message: 'La contraseña debe tener al menos 6 caracteres',
		})
		.max(20, {
			message: 'La contraseña debe tener como máximo 20 caracteres',
		}),

	nombre: z.undefined(), // No se puede enviar en el login
	apellido: z.undefined(), // No se puede enviar en el login
	telefono: z.undefined(), // No se puede enviar en el login
	domicilio: z.undefined(), // No se puede enviar en el login
	zona: z.undefined(), // No se puede enviar en el login
	descripcion: z.undefined(), // No se puede enviar en el login
	foto: z.undefined(), // No se puede enviar en el login
	role: z.undefined(), // No se puede enviar en el login
});

export const editProfileSchema = z.object({
	email: z
		.string({
			message: 'El email debe ser un string',
		})
		.email({
			message: 'El email debe ser un email válido',
		})
		.optional(),

	domicilio: z
		.string({
			message: 'El domicilio debe ser un string',
		})
		.min(3, {
			message: 'El domicilio debe tener al menos 3 caracteres',
		})
		.optional(),

	zona: z
		.string({
			message: 'La zona debe ser un string',
		})
		.refine((value) => barriosCABA.includes(value), {
			message: 'Tipo invalido',
		})
        .optional(),
	telefono: z
		.string({
			message: 'El teléfono es invalido',
		})
		.startsWith('11', {
			message: 'El teléfono es invalido',
		})
		.min(10, {
			message: 'El teléfono es invalido',
		})
		.max(10, {
			message: 'El teléfono es invalido',
		})
		.optional(),

	descripcion: z
		.string({
			message: 'La descripción debe ser un string',
		})
		.min(10, {
			message: 'La descripción debe tener al menos 10 caracteres',
		})
        .max(50, {
            message: 'La descripción debe tener menos de 50 caracteres'
        })
		.optional(),

	foto: z.string().optional(),

	nombre: z.undefined(), // No se puede enviar en la edición de perfil
	apellido: z.undefined(), // No se puede enviar en la edición de perfil
	contraseña: z.undefined(), // No se puede enviar en la edición de perfil
	role: z.undefined(), // No se puede enviar en la edición de perfil
});

export const verifyUserSchema = z.object({
	email: z
		.string({
			message: 'Debes completar este campo',
		})
		.email({
			message: 'El email debe ser un email válido',
		}),

	telefono: z
		.string({
			message: 'Debes completar este campo',
		})
		.startsWith('11', {
			message: 'El teléfono es invalido',
		})
		.min(10, {
			message: 'El teléfono es invalido',
		})
		.max(10, {
			message: 'El teléfono es invalido',
		}),

	nombre: z.undefined(), // No se puede enviar en el login
	apellido: z.undefined(), // No se puede enviar en el login
	contraseña: z.undefined(), // No se puede enviar en el login
	domicilio: z.undefined(), // No se puede enviar en el login
	zona: z.undefined(), // No se puede enviar en el login
	descripcion: z.undefined(), // No se puede enviar en el login
	foto: z.undefined(), // No se puede enviar en el login
	role: z.undefined(), // No se puede enviar en el login
});

export const resetPasswordSchema = z.object({
	email: z
		.string({
			message: 'El email debe ser un string',
		})
		.email({
			message: 'El email debe ser un email válido',
		}),

	contraseña: z
		.string({
			message: 'Debes completar este campo',
		})
		.min(6, {
			message: 'La contraseña debe tener al menos 6 caracteres',
		})
		.max(20, {
			message: 'La contraseña debe tener como máximo 20 caracteres',
		}),

	nombre: z.undefined(), // No se puede enviar en el login
	apellido: z.undefined(), // No se puede enviar en el login
	domicilio: z.undefined(), // No se puede enviar en el login
	zona: z.undefined(), // No se puede enviar en el login
	descripcion: z.undefined(), // No se puede enviar en el login
	foto: z.undefined(), // No se puede enviar en el login
	role: z.undefined(), // No se puede enviar en el login
});
