export class Trade {
  constructor(
    public userid: number,
    public id: number,
    public tradetype: string,
    public date: string,
    public buyprice: number,
    public sellprice: number,
    public buyunits: number,
    public sellunits: number,
    public totolunits: number,
    public totolmoney: number
  ) {}
}
