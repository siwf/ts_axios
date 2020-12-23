// 数字
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;

// 字符串
let nyName:string = '123';

// 数组

let student: number [] = [1, 2, 3]
let people: Array<number> = [1, ,2, 3];

// 元组

let tutle: [number, string] = [1, 's']

// 枚举类型
enum Color { 
  RED = 12,
  GREEN,
  BLUE
}

let sb: Color = Color.RED;
let sb1: Color = Color['RED'];
let sb2: string = Color[12];
let sb3: number = Color['RED']

// any数据类型 跳过类型检查

let notSure: any = 4;
notSure = 's12'
notSure = true

// void 类型
// null 和 undefined 是所有类型的子类型

function warnNothing() :void {

}
let unusable: void = undefined;
let untouch: void = null;


// let special2: null = 1