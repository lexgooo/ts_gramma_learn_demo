"use strict";
var XiaoJiejie = /** @class */ (function () {
    function XiaoJiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJiejie.prototype.say = function () {
        console.log('小哥哥好！');
    };
    return XiaoJiejie;
}());
var xiaojiejie = new XiaoJiejie('范冰冰', 18);
console.log(xiaojiejie);
xiaojiejie.say();
