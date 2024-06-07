import Contract from "../models/contract.models.js";
import Service from "../models/service.model.js";

export const createContract = async (req, res) => {
    const { fechaInicio, fechaFin, horarioReferencia, motivoDelServicio  } = req.body;
    const { id_service } = req.params;
    const idUser = req.user.id;

    const idPetSitter = await Service.findById(id_service);

    const newContract = new Contract({
        fechaInicio,
        fechaFin,
        horarioReferencia,
        motivoDelServicio,
        idPetSitter: idPetSitter.user._id,
        service: id_service,
        user: idUser,
    });

    try {
        const contractSaved = await newContract.save();
        res.status(201).json(contractSaved);
    } catch (error) {
        res.status(400).json({ message: "Error saving the contract" });
    }

}
export const getContracts = async (req, res) => {
    const { id } = req.user;
    try {

        const contracts = await Contract.find({ idPetSitter: id });
        res.status(200).json(contracts);
    } catch (error) {
        res.status(404).json({ message: "Contracts not found" });
    }


}
export const getContract = async (req, res) => {
    const { id } = req.params;
    try {
        const contract = await Contract.findById(id);
        res.status(200).json(contract);
    } catch (error) {
        res.status(404).json({ message: "Contract not found" });
    }

}
export const updateContract = async (req, res) => {
    const { id } = req.params;


	const contract = await Contract.findByIdAndUpdate(id, req.body, {
		new: true,
	});

	if (!contract) {
		return res.status(404).json({ message: 'Contract not found' });
	}

	res.status(200).json(contract);
}
