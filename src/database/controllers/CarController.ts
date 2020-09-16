import { ICarDocument, ICarModel } from '../types/CarTypes';

export async function findOneOrCreate(this: ICarModel, carId: string): Promise<ICarDocument> {
    const record = await this.findOne({ carId });
    if (record) {
        return record;
    } else {
        return this.create();
    }
}

export async function findByBrand(this: ICarModel, min?: number, max?: number): Promise<ICarDocument[]> {
    return this.find({ brand: { $gte: String(min) || '0', $lte: String(max) || String(Infinity) } });
}