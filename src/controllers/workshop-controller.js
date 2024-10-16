import Workshop from "../models/workshop-model.js";

export const store = async (req, res) => {
  try {
    console.log(req.body);
    const workshop = await Workshop.create(req.body);
    res.status(201).json(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const workshop = await Workshop.find(req.query).exec();
    res.json(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const update = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndDelete(req.params.id).exec();
    res.json(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};