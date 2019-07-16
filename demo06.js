"use strict";
function zhengxing() {
    var yangzi = '刘德华';
    console.log("\u4F60\u73B0\u5728\u5DF2\u7ECF\u6574\u5F62\u6210\u4E86" + yangzi + "\u7684\u6837\u5B50\uFF01");
}
zhengxing();
console.log('*****************************************************');
var yangzi01 = '刘德华';
function zhengxing1() {
    console.log("\u4F60\u73B0\u5728\u5DF2\u7ECF\u6574\u5F62\u6210\u4E86" + yangzi01 + "\u7684\u6837\u5B50");
}
zhengxing1();
console.log(yangzi01);
console.log('*****************************************************');
var yangzi02 = '刘德华';
function zhengxing2() {
    var yangzi02 = '马德华';
    console.log("\u4F60\u73B0\u5728\u5DF2\u7ECF\u6574\u5F62\u6210\u4E86" + yangzi02 + "\u7684\u6837\u5B50\uFF01");
}
zhengxing2();
console.log(yangzi02);
console.log('*****************************************************');
var yangzi03 = '刘德华';
function zhengxing3() {
    // console.log(`你现在已经整形成了${yangzi03}的样子！`)
    var yangzi03 = '马德华';
    console.log("\u4F60\u73B0\u5728\u5DF2\u7ECF\u6574\u5F62\u6210\u4E86" + yangzi03 + "\u7684\u6837\u5B50\uFF01");
}
zhengxing3();
console.log(yangzi03);
console.log('*****************************************************');
function zhengxing4() {
    var yangzi04a = "刘德华";
    {
        var yangzi04b = '马德华';
        console.log("\u4F60\u73B0\u5728\u5DF2\u7ECF\u6574\u5F62\u6210\u4E86" + yangzi04b + "\u7684\u6837\u5B50\uFF01");
    }
    console.log("\u4F60\u73B0\u5728\u5DF2\u7ECF\u6574\u5F62\u6210\u4E86" + yangzi04a + "\u7684\u6837\u5B50\uFF01");
    // console.log(`你现在已经整形成了${yangzi04b}的样子！`)
}
zhengxing4();
