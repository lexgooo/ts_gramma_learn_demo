"use strict";
// 不传递任何参数
var d = new Date();
console.log(d);
console.log('****************************');
// 传递一个整数
var d1 = new Date(1000);
var d2 = new Date(2000);
console.log(d1, d2);
console.log('****************************');
// 传递一个字符串
var d3 = new Date('2019/07/16 16:35:17');
var d4 = new Date('2019-07-16 16:35:17');
var d5 = new Date('2019-07-16T16:35:17');
console.log(d3, d4, d5);
console.log('****************************');
var d6 = new Date(2019, 7, 16, 16, 35, 17, 90);
console.log(d6);
