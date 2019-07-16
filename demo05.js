"use strict";
// 函数声明法
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 4));
// 函数表达式法
var add1 = function (n1, n2) {
    return n1 + n2;
};
console.log(add1(8, 9));
// 箭头函数
var add2 = function (n1, n2) {
    return n1 + n2;
};
console.log(add2(2, 5));
