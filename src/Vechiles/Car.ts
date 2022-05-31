import Vechile from './Vechile'

class Car extends Vechile {
  public type: string

  constructor(brand: string, vechileNo: string, days: number, deposit: number, type: string) {
    super(brand, vechileNo, days, deposit)

    this.type = type
  }

  public calculateRent() {
    return this.days * this.getPriceByType()
  }

  // 根据车的型号来获取租用一天该型号车的租金
  public getPriceByType() {
    let rentMoneyByDay: number = 0;//每天的租金
    if (this.type === "普拉多巡洋舰") {
      rentMoneyByDay = 800;
    } else if (this.type === "凯美瑞旗舰版") {
      rentMoneyByDay = 400;
    } else if (this.type === "威驰智行版") {
      rentMoneyByDay = 200;
    }
    return rentMoneyByDay;
  }
}

export default Car
