import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
	const { nombre, apellido, email, contraseña, telefono, domicilio, role } = req.body;

	try {
		const passwordHashed = await bcrypt.hash(contraseña, 10);

		const newUser = await User.create({
			nombre,
			apellido,
			email,
			contraseña: passwordHashed,
			telefono: '549' + telefono,
			domicilio,
			role,
		});

		const userSaved = await newUser.save();
		const token = await createAccessToken({
			id: userFound._id,
			nombre: userFound.nombre,
			apellido: userFound.apellido,
			email: userFound.email,
			role: userFound.role,
		});

		res.cookie('token', token);
		res.status(200).json({
			id: userSaved._id,
			nombre: userSaved.nombre,
			email: userSaved.email,
			createdAt: userSaved.createdAt,
			updatedAt: userSaved.updatedAt,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const login = async (req, res) => {
	const { email, contraseña } = req.body;

	try {
		const userFound = await User.findOne({ email });

		if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' });

		const isMatch = await bcrypt.compare(contraseña, userFound.contraseña);

		if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

		const token = await createAccessToken({
			id: userFound._id,
			nombre: userFound.nombre,
			apellido: userFound.apellido,
			email: userFound.email,
			role: userFound.role,
		});

		res.cookie('token', token);
		res.status(200).json({
			id: userFound._id,
			nombre: userFound.nombre,
			email: userFound.email,
			createdAt: userFound.createdAt,
			updatedAt: userFound.updatedAt,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const logout = (req, res) => {
	res.cookie('token', '', {
		expires: new Date(0),
	});
	return res.sendStatus(200);
};

export const profile = async (req, res) => {
	const userFound = await User.findById(req.user.id);

	if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' });

	return res.json(userFound);
};

export const editProfile = async (req, res) => {
	const user = await User.findByIdAndUpdate(req.user.id, req.body, {
		new: true,
	});

	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}

	res.status(200).json(user);
};

