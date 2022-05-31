class Vechile {
  public brand: string
  public vechileNo: string
  public days: number
  public deposit: number
  public total : number = 0

  constructor(
    brand: string,
    vechileNo: string,
    days: number,
    deposit: number
  ) {
    this.brand = brand
    this.vechileNo = vechileNo
    this.days = days
    this.deposit = deposit
  }

  // 计算租赁车的价格 ( calculateRent)
  public calculateRent() {
    console.log("calculateRent来自Vechile=>this.brand:", this.brand)
    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");

    return 0;
  }

  //支付押金的方法( payDesposit)
  payDesposit() {
    console.log(this.brand + " 车牌号为:" + this.vechileNo + " 支付了:" + this.deposit);
  }

  //  安全检测方法（safeShow)
  public safeShow() {
    console.log("车规则....");
    console.log(this.brand + " 车牌号为:" + this.vechileNo + " 违规了:");
  }
}

export default Vechile
