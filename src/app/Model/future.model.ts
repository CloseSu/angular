export class Future {
  constructor(
    public id: number,
    public date: string,
    public milliseconds: number,
    public contract: string,
    public contractMonth: number,
    public open: number,
    public high: number,
    public low: number,
    public last: number,
    public changeMoney: number,
    public percent: number,
    public volumn: number,
    public settlementPrice: number,
    public openInteres: number,
    public bestBid: number,
    public bestAsk: number,
    public historicalHigh: number,
    public historicalLow: number
  ) {}
}
