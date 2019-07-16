// 函数声明法
function add (n1:number, n2:number):number {
    return n1 + n2
}

console.log(add(1, 4))

// 函数表达式法
const add1 = function (n1:number, n2:number):number {
    return n1 + n2
}
console.log(add1(8, 9))

// 箭头函数
const add2 = (n1:number, n2:number):number => {
    return n1 + n2
}

console.log(add2(2, 5))