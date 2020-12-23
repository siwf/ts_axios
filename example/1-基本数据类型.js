// 数字
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
// 字符串
var nyName = '123';
// 数组
var student = [1, 2, 3];
var people = [1, , 2, 3];
// 元组
var tutle = [1, 's'];
// 枚举类型
var Color;
(function (Color) {
    Color[Color["RED"] = 12] = "RED";
    Color[Color["GREEN"] = 13] = "GREEN";
    Color[Color["BLUE"] = 14] = "BLUE";
})(Color || (Color = {}));
var sb = Color.RED;
var sb1 = Color['RED'];
var sb2 = Color[12];
var sb3 = Color['RED'];
console.log(sb, sb1);
