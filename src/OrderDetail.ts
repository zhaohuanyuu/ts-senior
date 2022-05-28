class OrderDetail {
  public orderDetailId: number = 0
  public productName: string = ''
  public price: number = 0
  public count: number = 0

  constructor(orderDetailId: number, productName: string, price: number, count: number) {
    this.orderDetailId = orderDetailId
    this.productName = productName
    this.price = price
    this.count = count
  }
}

export default OrderDetail
