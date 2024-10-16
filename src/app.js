import express from "express";
import mongoose from "mongoose";
import workshopRouter from "./router/workshop-router.js";
import vehicleRouter from "./router/vehicle-router.js";
import maintenanceRouter from "./router/maintenance-router.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/workshop", workshopRouter);
app.use("/vehicle", vehicleRouter);
app.use("/maintenance", maintenanceRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));