export class Consumption {
  id: number = 0;
  consumption: UnitConsumption[] = [];
}

export class UnitConsumption {
  month: string = '';
  year: number = 0;
  energy: number = 0;
}

//modelo de consumo e da unidade de consumo por ano/mês
