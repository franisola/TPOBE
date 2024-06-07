import { z } from 'zod';
import { contractState } from '../config.js';

export const createContractSchema = z.object({
    fechaInicio: z.string(),
    fechaFin: z.string().optional(),
    horarioReferencia: z.string(),
    motivoDelServicio: z.string(),

    estado: z.undefined(),
    user: z.undefined(),
    service: z.undefined(),
});

export const updateContractSchema = z.object({
    estado: z.string().refine((value) => contractState.includes(value), {
        message: 'Estado invalido',
    }),

    fechaInicio: z.undefined(),
    fechaFin: z.undefined(),
    horarioReferencia: z.undefined(),
    motivoDelServicio: z.undefined(),
    user: z.undefined(),
    service: z.undefined(),
});
    