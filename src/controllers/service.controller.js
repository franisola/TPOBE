import Service from '../models/service.model.js';
import Comentario from '../models/comment.model.js';

export const createService = async (req, res) => {
	const { nombre, categoria, frecuencia, tipoMascota, costoHR, estado, descripcion } = req.body;

	const newService = new Service({
		nombre,
		categoria,
		frecuencia,
		tipoMascota,
		costoHR,
		estado,
		descripcion,
		calificacion: 0,
		user: req.user.id,
	});

	
	const serviceSaved = await newService.save();
	res.status(201).json(serviceSaved);

};

export const getServices = async (req, res) => {
	try {
		const services = await Service.find({ user: req.user.id }).populate('user');
		res.status(200).json(services);
	} catch (error) {
		res.status(404).json({ message: 'Services not found' });
	}
};

export const getService = async (req, res) => {
	const { id } = req.params;

	try {
		const service = await Service.findById({ _id: id }).populate('user');
		res.status(200).json(service);
	} catch (error) {
		res.status(404).json({ message: 'Service not found' });
	}
};

export const updateService = async (req, res) => {
	const { id } = req.params;
	const { nombre, categoria, frecuencia, tipoMascota, costoHR, estado, descripcion } = req.body;

	try {
		const updatedService = await Service.findByIdAndUpdate(
			id,
			{
				nombre,
				categoria,
				frecuencia,
				tipoMascota,
				costoHR,
				estado,
				descripcion,
			},
			{ new: true }
		);

		res.status(200).json(updatedService);
	} catch (error) {
		res.status(400).json({ message: 'Error updating the service' });
	}
};

export const deleteService = async (req, res) => {
	const { id } = req.params;
	const service = await Service.findByIdAndDelete(id);
	if (!service) {
		return res.status(404).json({ message: 'Service not found' });
	}
	res.status(204).json({ message: 'Service deleted' });
};

export const getServiceQuery = async (req, res) => {

	const { categoria, tipoMascota, frecuencia, duracion, zona, calificacion } = req.query;

	try {
		const services = await Service.find({
			categoria: { $regex: new RegExp(categoria, 'i') },
			tipoMascota: { $regex: new RegExp(tipoMascota, 'i') },
			frecuencia: { $regex: new RegExp(frecuencia, 'i') },
			duracion: { $regex: new RegExp(duracion, 'i') },
			zona: { $regex: new RegExp(zona, 'i') },
			calificacion: { $regex: new RegExp(calificacion, 'i') },
		}).populate('user');
		res.status(200).json(services);
	} catch (error) {
		res.status(404).json({ message: 'Services not found' });
	}

};


export const createComment = async (req, res) => {


    const { comentario, calificacion } = req.body;

    try {
        const newComment = await Comentario.create({
            user: req.user.id,
            service: req.params.id,
            comentario,
            calificacion,
            fecha: new Date() // Date.now(),
        });

        

        const commentSaved = await newComment.save();

        res.status(200).json({
            id: commentSaved._id,
            content: commentSaved.comentario,
            createdAt: commentSaved.createdAt,
            updatedAt: commentSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};