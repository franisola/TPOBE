import Service from '../models/service.model.js';
import Comment from '../models/comment.model.js';
import {
	tipoMascota as TP,
	categoria as C,
	frecuencia as F,
	barriosCABA as CABA,
} from '../config.js';

export const createService = async (req, res, next) => {
	const { nombre, categoria, frecuencia, tipoMascota, costoHR, estado, descripcion } = req.body;
	const calificacion = 1;

	const newService = new Service({
		nombre,
		categoria,
		frecuencia,
		tipoMascota,
		costoHR,
		estado,
		calificacion,
		descripcion,
		user: req.user.id,
		});
		
		// user: req.user.id,
	const serviceSaved = await newService.save();
	res.status(201).json(serviceSaved);
};

export const getServices = async (req, res, next) => {
	const { idUser } = req.params;
	try {
		const services = await Service.find({ user: idUser }).populate('user');
		res.status(200).json(services);
	} catch (error) {
		next(error);
	}
};

export const getServiceQuery = async (req, res, next) => {
	const { categoria, tipoMascota, frecuencia, zona, calificacion } = req.query;


 

	let queryObj = {};

	if (categoria !== 'undefined') queryObj.categoria = C[categoria];
	if (tipoMascota !== 'undefined') queryObj.tipoMascota = TP[tipoMascota];
	if (frecuencia !== 'undefined') queryObj.frecuencia = F[frecuencia];
	if (zona !== 'undefined') queryObj.zona = CABA[zona];
	if (calificacion !== 'undefined') queryObj.calificacion = calificacion;



	const page = parseInt(req.query.page) || 1;
	const limit = 10;
    const skip = (page - 1) * limit;

	

	try {

        const services = await Service.find(queryObj).skip(skip).limit(limit).populate('user');

        if (!services) return next({ message: 'No services found', statusCode: 404 });

        const hasMore = await Service.exists({ ...queryObj, _id: { $gt: services[services.length - 1]._id } });

		res.status(200).json({ data: services, hasMore });
	} catch (error) {
		next(error);
	}	
};

export const getService = async (req, res, next) => {
	const { id } = req.params;

	try {
		const service = await Service.findById({ _id: id }).populate('user');
        const totalComments = await Comment.countDocuments({ service: id });
    
        const feedback = {
            totalComments,
            totalServicesCompleted: null,
            averageServiceRating: service.calificacion,
        };


		res.status(200).json({service, feedback});
	} catch (error) {
		next(error);
	}
};

export const updateService = async (req, res, next) => {
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

		if (!updatedService) return next({ message: 'Service not found', statusCode: 404 });

		res.status(200).json(updatedService);
	} catch (error) {
		res.status(400).json({ message: 'Error updating the service' });
	}
};

export const deleteService = async (req, res, next) => {
	const { id } = req.params;
	const service = await Service.findByIdAndDelete(id);
	if (!service) return next({ message: 'Service not found', statusCode: 404 });
	res.status(204).json({ message: 'Service deleted' });
};





// export const getAssociatedServices = async (req, res, next) => {
// 	try {
// 		const services = await Service.find({ user: req.user.id });
// 		const listServices = [];

// 		services.map((service) => {
// 			if (
// 				categoria.includes(service.categoria) &&
// 				!listServices.includes(service.categoria)
// 			) {
// 				listServices.push(service.categoria);
// 			}
// 		});
// 		res.status(200).json(listServices);
// 	} catch (error) {
// 		next(error);
// 	}
// };

