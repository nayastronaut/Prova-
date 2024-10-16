import Maintenance from "../models/maintenance-model.js";

export const store = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body);
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const maintenance = await Animal.find(req.query).exec();
    res.json(maintenance);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(maintenance);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id).exec();
    res.json(maintenance);
  } catch (error) {
    res.status(400).send(error);
  }
};