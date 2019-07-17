"use strict";
var XiaoJiejie2 = /** @class */ (function () {
    function XiaoJiejie2(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJiejie2.prototype.sayHello = function () {
        console.log('小哥哥你好！');
    };
    XiaoJiejie2.prototype.sayLove = function () {
        console.log('我爱你！');
    };
    return XiaoJiejie2;
}());
var jiejie2 = new XiaoJiejie2('女', '山口百慧', 23);
console.log(jiejie2.sex);
// console.log(jiejie2.name) // 可以执行但不合规，不能在 ts 语法中出现这种访问
// console.log(jiejie2.age) // 可以执行但不合规，不能在 ts 语法中出现这种访问
jiejie2.sayHello();
// jiejie2.sayLove() // 可以执行但不合规，不能在 ts 语法中出现这种访问
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
console.log(man);
console.log(man.sex);
// man.sex = '女' // 可以执行成功但不合规，不能在 ts 语法中出现这种访问
// console.log(man.sex)
