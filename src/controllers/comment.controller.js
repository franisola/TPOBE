import Comment from '../models/comment.model.js';
import Service from '../models/service.model.js';

export const createComment = async (req, res) => {
	const { comentario, calificacion } = req.body;
	const { id_service } = req.params;
	const { id } = req.user;
	

	try {
		const newComment = await Comment.create({
			user: id,
			service: id_service,
			comentario,
			calificacion,
			fecha: new Date(), // Date.now(),
		});

		const commentSaved = await newComment.save();


		res.status(200).json({
			id: commentSaved._id,
			content: commentSaved.comentario,
			calificacion: commentSaved.calificacion,
			createdAt: commentSaved.createdAt,
			updatedAt: commentSaved.updatedAt,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getComments = async (req, res) => {
	const { id_service } = req.params;
	try {
		const comments = await Comment.find({ service: id_service }); //.populate('user').populate('service');
		res.status(200).json(comments);
	} catch (error) {
		res.status(404).json({ message: 'Comments not found' });
	}
};

export const getComment = async (req, res) => {
	const { id } = req.params;
	try {
		const comment = await Comment.findById(id); //.populate('user').populate('service');
		if (!comment) {
			return res.status(404).json({ message: 'Comment not found' });
		}
		res.status(200).json(comment);
	} catch (error) {
		res.status(404).json({ message: 'Comment not found' });
	}
};

export const deleteComment = async (req, res) => {
	const { id } = req.params;
	const comment = await Comment.findByIdAndDelete(id);
	if (!comment) {
		return res.status(404).json({ message: 'Comment not found' });
	}
	res.status(204).json({ message: 'Comment deleted' });
};
