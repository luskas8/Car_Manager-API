import { model } from "mongoose";
import { ICarDocument } from "../types/CarTypes";
import CarSchema from "../schemas/CarSchema";

export const CarModel = model<ICarDocument>("user", CarSchema);