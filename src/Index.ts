// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

// import order from './Order'
// console.log(order);

// import ArrayList from './ArrayList'
// console.log(ArrayList)

// import LocalStorage from './Class-examples/LocalStorage'
// console.log(LocalStorage.getInstance())

// import Car from './Vechiles/Vechile'
// console.log(Car)

import Car from './Vechiles/Car'
const pld = new Car('普拉多', '京A123', 3, 50000, '普拉多巡洋舰')

console.log(pld.calculateRent(['xxx']))
