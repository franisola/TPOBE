import e from 'express';
import { z } from 'zod';

export const registerSchema = z.object({
	nombre: z
		.string({
			message: 'El nombre debe ser un string',
		})
		.min(3)
		.max(255),

	apellido: z
		.string({
			message: 'El apellido debe ser un string',
		})
		.min(3)
		.max(255),

	email: z
		.string({
			message: 'El email debe ser un string',
		})
		.email({
			message: 'El email debe ser un email válido',
		}),

	contraseña: z
		.string({
			message: 'La contraseña debe ser un string',
		})
		.min(3, {
			message: 'La contraseña debe tener al menos 6 caracteres',
		})
		.max(20, {
			message: 'La contraseña debe tener como máximo 20 caracteres',
		}),

	telefono: z
		.string({
			message: 'El teléfono es invalido',
		})
		.startsWith('11', {
			message: 'El teléfono es invalido',
		})
		.min(9, {
			message: 'El teléfono es invalido',
		})
		.max(9, {
			message: 'El teléfono es invalido',
		}),

	domicilio: z
		.string({
			message: 'El domicilio debe ser un string',
		})
		.min(3, {
			message: 'El domicilio debe tener al menos 3 caracteres',
		}),
	role: z.number().int().finite().gte(1).lte(2), // No se puede enviar en el registro

	
	descripcion: z.undefined(), // No se puede enviar en el registro
	zona: z.undefined(), // No se puede enviar en el registro
	foto: z.undefined(), // No se puede enviar en el registro
});

export const loginSchema = z.object({
	email: z
		.string({
			message: 'El email debe ser un string',
		})
		.email({
			message: 'El email debe ser un email válido',
		}),

	contraseña: z
		.string({
			message: 'La contraseña debe ser un string',
		})
		.min(3, {
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
		.min(3, {
			message: 'La zona debe tener al menos 3 caracteres',
		})
		.optional(),

	telefono: z
		.string({
			message: 'El teléfono es invalido',
		})
		.startsWith('11', {
			message: 'El teléfono es invalido',
		})
		.min(9, {
			message: 'El teléfono es invalido',
		})
		.max(9, {
			message: 'El teléfono es invalido',
		})
		.optional(),

	descripcion: z
		.string({
			message: 'La descripción debe ser un string',
		})
		.min(3, {
			message: 'La descripción debe tener al menos 3 caracteres',
		})
		.optional(),

	foto: z.string().optional(),

	nombre: z.undefined(), // No se puede enviar en la edición de perfil
	apellido: z.undefined(), // No se puede enviar en la edición de perfil
	contraseña: z.undefined(), // No se puede enviar en la edición de perfil
	role: z.undefined(), // No se puede enviar en la edición de perfil
});
