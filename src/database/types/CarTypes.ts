import { Document, Model } from 'mongoose';

export interface ICar {
    name: string;
    brand: string;
    country: number;
    created_at?: Date;
    updated_at?: Date;
}

export interface ICarDocument extends ICar, Document {};

export interface ICarModel extends Model<ICarDocument> {
    findOneOrCreate: (
      this: ICarModel,
      {
          name,
          brand,
          country,
      }: { name: string; brand: string; country: number }
    ) => Promise<ICarDocument>;

    findByAge: (
      this: ICarModel,
      min?: number,
      max?: number
    ) => Promise<ICarDocument[]>;
  }