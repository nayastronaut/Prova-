import Vehicle from "../models/vehicle-model.js";

export const store = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const vehicle = await Vehicle.find(req.query).exec();
    res.json(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};


export const update = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const vehicle = await Scheduling.findByIdAndDelete(req.params.id).exec();
    res.json(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};
