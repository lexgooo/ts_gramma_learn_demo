// 构造函数法
let reg1:RegExp = new RegExp('lex')
let reg2:RegExp = new RegExp('goo', 'gi')
console.log(reg1, reg2)

console.log('*******************************')

// 字面量法
let reg3:RegExp = /lex/
let reg4:RegExp = /goo/gi
console.log(reg3, reg4)

console.log('*******************************')

// 常用方法
let str:string = '你好，我叫 Lex Goo, 也可以写成 lexgoo, lex goo, LexGoo'
console.log(reg1.test(str), reg2.test(str))

console.log('*******************************')
console.log(reg3.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str))