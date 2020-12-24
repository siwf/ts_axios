// 类去实现接口
// 类有两种类型 一种是静态类型，一种是实例类型
var Clock = /** @class */ (function () {
    // 构造器属于静态的类型
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function () { };
    return Clock;
}());
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var c = Clock;
var b = new Clock(1, 2);
