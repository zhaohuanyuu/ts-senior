import OrderDetail from './OrderDetail'

class Order {
  // public orderId: number = 0
  // public date: Date = new Date()
  // public custname: string = 'none'
  // public phone: string = '123'
  // public orderDetail: Array<OrderDetail> = []

  constructor(
    public orderId: number,
    public date: Date,
    public custname: string,
    public phone: string,
    public orderDetailArr: Array<OrderDetail>
  ) {
    // this.orderId = orderId
    // this.date = date
    // this.custname = custname
    // this.phone = phone
    // this.orderDetail = orderDetailArr
  }
}

const orderDate = new Date(2023, 10, 17, 5, 20, 0)

const orderDetailOne = new OrderDetail(10, 'tv', 30000, 3)
const orderDetailTwo = new OrderDetail(11, 'studio', 200000, 2)
const orderDetailArray: Array<OrderDetail> = [orderDetailOne, orderDetailTwo]

const order = new Order(1, orderDate, 'Lee', '123', orderDetailArray)

export default order
