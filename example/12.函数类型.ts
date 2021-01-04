function  add(x: number, y: number) {
  
}
let addMy = function (x: number, y: number): number {
  return x + y
}
// 下面这种返回值类型必须要写 即使为空
let newDay: (x: number, y: number) => number = function (s: number, d: number): number {
 return s + d 
}