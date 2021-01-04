class Animal2 {
  private name: string;
  public constructor (name: string) {
    this.name = name
  }
  public move(distance: number) {
    console.log(`${this.name} move ${distance}`)
  }
}

new Animal2('Cat').move(10)

class Rhinno extends Animal2 {
  constructor() {
    super('rhino')
  }

}
class Employee {
  private name: string;
  constructor(name: string) {
    // super(name)
    this.name = name
  }
}
let animal = new Animal2('fathter');
let rhinno = new Rhinno()
// animal = rhinno
rhinno = animal
let emplyee = new Employee('employee')
// emplyee = animal 不兼容 报错