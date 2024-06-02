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
import { roleClient, rolePetSitter } from '../middlewares/validateRoleUser.middleware.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createServiceSchema, updateServiceSchema } from '../schemas/service.schema.js';
const router = Router();

router.post('/services', authRequired, rolePetSitter, validateSchema(createServiceSchema), createService);
router.get('/services', authRequired, getServices);
router.get('/services/:id', authRequired, getService);
router.get('/services', authRequired, getServiceQuery);
router.put('/services/:id', authRequired, rolePetSitter, validateSchema(updateServiceSchema), updateService);
router.delete('/services/:id', authRequired, rolePetSitter, deleteService);



//router.post('/services/:id/comments', authRequired, createComment);

export default router;
