type type_param = {
  width?: number,
  height?: number,
  radius?: number
}

class Square {

  public width: number
  public height: number

  constructor(width: number, height: number)
  constructor(config: type_param)
  constructor(rect: any, height: number = 0) {
    if (typeof rect === 'object') {
      this.width = rect.width
      this.height = rect.height
    } else {
      this.width = rect
      this.height = height
    }
  }

  public getArea() {
    return this.height * this.width
  }
}

const square = new Square(50, 50)
console.log(square.getArea())
const chartConfig: type_param = { width: 50, height: 50 }
const square2 = new Square(chartConfig)
