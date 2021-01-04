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
var Person = /** @class */ (function () {
    // 构造函数 protected 防止被new
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var WorkerMan = /** @class */ (function (_super) {
    __extends(WorkerMan, _super);
    function WorkerMan(name, dept) {
        var _this = _super.call(this, name) || this;
        _this.dept = dept;
        return _this;
    }
    WorkerMan.prototype.intrucduc = function () {
        return "hello my name is " + this.name + " and my dept is " + this.dept;
    };
    return WorkerMan;
}(Person));
var work = new WorkerMan('si', 'xin');
console.log(work.intrucduc());
// console.log(work.name) // 报错 受保护的只能在字类内部使用，不能在外部使用
// let person1 = new Person('si'); // 报错 protected 不可以被new
var ReadPerson = /** @class */ (function () {
    function ReadPerson(name) {
        this.name = name;
    }
    return ReadPerson;
}());
// 参数属性
var ReadPram = /** @class */ (function () {
    function ReadPram(name) {
        this.name = name;
    }
    return ReadPram;
}());
var readparm = new ReadPram('si');
console.log(readparm);
