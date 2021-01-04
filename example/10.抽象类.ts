// 抽象类
abstract class Second {
 name: string;
 constructor(name: string) {
   this.name = name
 }
 printName(): void {

 }
 abstract printMettig(): void

}
class Accouna extends Second {
  constructor(name: string) {
    super(name)
  }
  getnetReport(): void {}
  printMettig(): void {
    console.log(1)
  }
}

let acc: Second;
// acc = new Second(); // 抽象类不能被实例化，只能实例化子类
acc = new Accouna('si');
acc.printMettig();
// acc.getnetReport() // 报错 Second类型中没有getnetReport 这个方法
