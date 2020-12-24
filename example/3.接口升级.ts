// 类类型
// 实例接口
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}


// 类去实现构造器接口
 // 构造器接口
interface ClockConstructor {
  new (hour: number, minute: number)
}

// 类去实现接口
// 类有两种类型 一种是静态类型，一种是实例类型
class Clock implements ClockInterface {
  currentTime: Date
  // 构造器属于静态的类型
  constructor(h: number, m: number) {}
  setTime() {}
}

/* ==================================================== */
interface InstanceInterface {
  tick()
}
interface ConstructorInterface {
  new(h: number, m: number)
}
class Clock {
  constructor(h: number, m: number) {}
}

let c: ConstructorInterface = Clock
let b = new Clock(1, 2)
