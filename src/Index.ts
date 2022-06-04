// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

// import ArrayList from './1-basic/ArrayList'
// console.log(ArrayList)

// import order from './2-Class-examples/Order'
// console.log(order);

// import LocalStorage from './2-Class-examples/LocalStorage'
// console.log(LocalStorage.getInstance())

// import Car from './3-Vechiles/Vechile'
// console.log(Car)

// import Car from './3-Vechiles/Car'
// const pld = new Car('普拉多', '京A123', 3, 50000, '普拉多巡洋舰')
// console.log(pld.calculateRent(['xxx']))

// import { People, Stu } from './4-assertion/part1/extend'
// const people = new People()
// const result = people as Stu // 类型断言
// const result = <Stu>people // 类型转换
// result.study()
// const stu = new Stu('wangwu', 22, 'bj', '123')

import { People, Stu } from './4-assertion/part2/convert'

const people = new People('wangnwu', 23, 'beijing')
const stuConvert = people as Stu

const stu = new Stu('zhangsan', 23, 'hebei')
const peopleCpmvert = stu as People


