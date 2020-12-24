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
function printLael(params) {
    console.log(params.name);
}
printLael({ name: 'siw' });
function CreateSquare(params) {
}
var point = { x: 1, y: 2 };
// point.x = 1 // error
// 只读数组
var a = [1, 2, 3];
// 数组只是只读的
var po = [1, 2, 3];
var mysearch = function (a, b) {
    return false;
};
var myArray = ['s', 'b'];
var arr1 = myArray[0];
var arr2 = myArray['0'];
console.log(arr1, arr2);
// 下面这个例子
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var testArr = ['1'];
