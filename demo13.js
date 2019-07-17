"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Jspang;
}());
var jspang = new Jspang('技术胖', 18, 'web');
console.log(jspang);
jspang.interest();
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai(name, age, skill, xinxiang) {
        var _this = _super.call(this, name, age, skill) || this;
        _this.xinxiang = xinxiang;
        return _this;
    }
    JsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    JsShuai.prototype.zhuanQian = function () {
        console.log('一天赚一个亿');
    };
    return JsShuai;
}(Jspang));
var shuai = new JsShuai('技术帅', 18, '演讲', '帅气');
console.log(shuai);
shuai.interest();
shuai.zhuanQian();
