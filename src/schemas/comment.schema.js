import { z } from 'zod';

export const commentSchema = z.object({

    comentario: z.string().min(1).max(255),
    calificacion: z.number().int().min(1).max(5),

    fecha: z.undefined(),

});