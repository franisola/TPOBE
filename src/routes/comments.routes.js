import express from 'express';
import { createComment, deleteComment, getComments, getComment } from '../controllers/comment.controller.js';
import { roleClient, rolePetSitter } from '../middlewares/validateRoleUser.middleware.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = express.Router();

router.post('/services/:id_service/comments', authRequired, createComment);
router.get('/services/:id_service/comments', getComments);
router.get('/comments/:id', getComment);
router.delete('/comments/:id', deleteComment);


export default router;