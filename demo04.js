"use strict";
function searchXiaojiejie(age) {
    return "\u627E\u5230\u4E86\u4E00\u4E2A" + age + "\u5C81\u7684\u5C0F\u59D0\u59D0\uFF01";
}
var age = 18;
var results = searchXiaojiejie(age);
console.log(results);
// 有可选参数的函数
function searchXiaojiejie1(age, stature) {
    return "\u627E\u5230\u4E86" + age + "\u5C81" + (stature ? stature : '') + "\u7684\u5C0F\u59D0\u59D0";
}
var results1 = searchXiaojiejie1(18);
console.log(results1);
results1 = searchXiaojiejie1(18, '大长腿');
console.log(results1);
// 有默认参数的函数
function searchXiaojiejie2(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '大胸'; }
    return "\u627E\u5230\u4E86\u4E00\u4E2A" + age + "\u5C81" + stature + "\u7684\u5C0F\u59D0\u59D0";
}
var results2 = searchXiaojiejie2();
console.log(results2);
results2 = searchXiaojiejie2(28, '大长腿');
console.log(results2);
// 有剩余参数的函数
function searchXiaojiejie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '';
    for (var i = 0; i < xuqiu.length; i++) {
        yy += "" + (i > 0 ? '、' : '') + xuqiu[i];
    }
    return "\u627E\u5230\u4E86\u4E00\u4E2A" + yy + "\u7684\u5C0F\u59D0\u59D0\u3002";
}
console.log(searchXiaojiejie3('22岁', '瓜子脸', '水蛇腰'));
