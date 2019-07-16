// 不传递任何参数
let d:Date = new Date()
console.log(d)

console.log('****************************')

// 传递一个整数
let d1:Date = new Date(1000)
let d2:Date = new Date(2000)
console.log(d1, d2)

console.log('****************************')

// 传递一个字符串
let d3:Date = new Date('2019/07/16 16:35:17')
let d4:Date = new Date('2019-07-16 16:35:17')
let d5:Date = new Date('2019-07-16T16:35:17')
console.log(d3, d4, d5)

console.log('****************************')

let d6:Date = new Date(2019, 7, 16, 16, 35, 17, 90)
console.log(d6)