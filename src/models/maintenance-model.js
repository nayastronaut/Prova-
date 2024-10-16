import db from "../config/db.js";

const maintenanceSchema = new db.Schema({
    workshop_id: {
      type: db.Schema.Types.ObjectId,
      ref: 'Workshop',
      required: true,
    },
    vehicle_id: {
      type: db.Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true,
    },
    services_id: {
      type: [String], 
      price: Number,
      ref: 'User', 
      required: true,
    },
    Date: {
        type: Date,
        required: true,
      },
    totalCost: {
        type: Number,
        required: true,
    }
  });

const Maintenance = db.model("Maintenance", maintenanceSchema);

export default Maintenance;