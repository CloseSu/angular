export class Trade {
  constructor(
    public id: number,
    public date: string,
    public buyPrice: number,
    public sellPrice: number,
    public buyUnits: number,
    public sellUnits: number,
    public totoUnits: number,
    public totolMoney: number
  ) {}
}
