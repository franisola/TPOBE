import Pet from '../models/pet.model.js';

export const createPet = async (req, res) => {
	const { nombre, tipoMascota } = req.body;

	const newPet = new Pet({
		nombre,
		tipoMascota,
		user: req.user.id,
	});

	try {
		const petSaved = await newPet.save();
		res.status(201).json(petSaved);
	} catch (error) {
		res.status(400).json({ message: 'Error saving the pet' });
	}
};

export const getPets = async (req, res) => {
	try {
		const pets = await Pet.find({ user: req.user.id }).populate('user');
		res.status(200).json({pets: pets, date: Date.now()});
		console.log(new Date());
	} catch (error) {
		res.status(404).json({ message: 'Pets not found' });
	}
};

export const getPet = async (req, res) => {
	const { id } = req.params;

	try {
		const pet = await Pet.findById({ _id: id }).populate('user');
		res.status(200).json(pet);
	} catch (error) {
		res.status(404).json({ message: 'Pet not found' });
	}
};

export const deletePet = async (req, res) => {
	const { id } = req.params;
	const pet = await Pet.findByIdAndDelete(id);
	if (!pet) {
		return res.status(404).json({ message: 'Pet not found' });
	}
	res.status(204).json({ message: 'Pet deleted' });
};
