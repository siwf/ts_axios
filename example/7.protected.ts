class Person {
  protected name: string;
  // 构造函数 protected 防止被new
  protected constructor(name: string) {
    this.name = name
  }
}

class WorkerMan extends Person {
  private dept: string;
  constructor(name: string, dept: string) {
    super(name)
    this.dept = dept
  }
  intrucduc() {
    return `hello my name is ${this.name} and my dept is ${this.dept}`
  }
}

let work = new WorkerMan('si', 'xin');
console.log(work.intrucduc())
// console.log(work.name) // 报错 受保护的只能在字类内部使用，不能在外部使用
// let person1 = new Person('si'); // 报错 protected 不可以被new

class ReadPerson {
  readonly name: string; // 只允许在构造函数里面初始化
  constructor(name: string) {
    this.name = name
  }
}

// 参数属性

class ReadPram {
  // 直接用readonly 初始化
  constructor(readonly name: string) {
  }
}

let readparm = new ReadPram('si')
console.log(readparm)