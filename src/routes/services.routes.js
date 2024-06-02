import { Router } from 'express';
import {
	createService,
	getServices,
	getService,
	updateService,
	deleteService,
	getServiceQuery,
} from '../controllers/service.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createServiceSchema, updateServiceSchema } from '../schemas/service.schema.js';
const router = Router();

router.post('/services', authRequired, validateSchema(createServiceSchema), createService);
router.get('/services', authRequired, getServices);
router.get('/services/:id', authRequired, getService);
router.get('/services', authRequired, getServiceQuery);
router.put('/services/:id', authRequired, validateSchema(updateServiceSchema), updateService);
router.delete('/services', authRequired, deleteService);

export default router;
