// 接口
// 接口首字母通常是大写
interface LabelVal {
  name: string
}
function printLael(params:LabelVal) {
  console.log(params.name)
}
printLael({ name: 'siw'})

// 可选属性
interface Square {
  color: string
  area?: number
}

function CreateSquare(params: Square) {
  
}
// 只读属性
interface ReadOnlyProperty {
  readonly x: number
  readonly y: number
}
let point: ReadOnlyProperty = { x : 1, y: 2 }
// point.x = 1 // error

// 只读数组

let a: number [] = [1, 2, 3]
// 数组只是只读的
let po: ReadonlyArray<number> = [1, 2, 3]

// 函数类型接口

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mysearch: SearchFunc = function(a: string, b: string):boolean {
  return false
}

// 可索引类型

interface StringArray {
  // 数字索引 返回值类型是字符串
  [index: number]: string
}
let myArray: StringArray = ['s', 'b']
let arr1 = myArray[0]
let arr2 = myArray['0']
console.log(arr1, arr2)

interface CanIndex {
  // 数字索引的返回值类型，必须是字符串索引返回值的子类型
  [index: number]: number
  [age: string]: number
  sex: number
  // name: string error
}
// 下面这个例子


class Animal {
  name: string
}
class Dog extends Animal {
  breed: string
}
interface NotOkay {
  [x: number]: Dog
  [y: string]: Animal
}

// 索引类型可以设置成只读的

interface ReadOnlyArrayString {
  readonly [index: number]: string
}
let testArr: ReadOnlyArrayString = ['1']