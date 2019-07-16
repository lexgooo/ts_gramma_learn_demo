"use strict";
// 构造函数法
var reg1 = new RegExp('lex');
var reg2 = new RegExp('goo', 'gi');
console.log(reg1, reg2);
console.log('*******************************');
// 字面量法
var reg3 = /lex/;
var reg4 = /goo/gi;
console.log(reg3, reg4);
console.log('*******************************');
// 常用方法
var str = '你好，我叫 Lex Goo, 也可以写成 lexgoo, lex goo, LexGoo';
console.log(reg1.test(str), reg2.test(str));
console.log('*******************************');
console.log(reg3.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str), reg4.exec(str));
