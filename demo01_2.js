"use strict";
var myName = 'LexGoo';
console.log(myName);
console.log('----------------------');
var PERSON;
(function (PERSON) {
    PERSON[PERSON["male"] = 0] = "male";
    PERSON[PERSON["female"] = 1] = "female";
    PERSON[PERSON["other"] = 2] = "other";
})(PERSON || (PERSON = {}));
console.log(PERSON.other);
console.log('----------------------');
var PERSON_02;
(function (PERSON_02) {
    PERSON_02["male"] = "\u7537\u4EBA";
    PERSON_02["female"] = "\u5973\u4EBA";
    PERSON_02["other"] = "\u5996\u4EBA";
})(PERSON_02 || (PERSON_02 = {}));
console.log(PERSON_02.other);
console.log('----------------------');
var t = 10;
t = 'LexGoo';
t = true;
console.log(t);
console.log('-------------------');
