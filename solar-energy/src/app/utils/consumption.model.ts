import { IUnit } from './unit.model';

export interface IComsumption extends IUnit {
  date: number;
  energy: number;
}
