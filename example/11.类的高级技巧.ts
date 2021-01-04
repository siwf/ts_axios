class Gree {
  static standGree = 'hello'
  greeting: string
  constructor(message?: string) {
    this.greeting = message
  }
  greet() {
    if (this.greeting) {
      console.log(this.greeting)
    } else {
      console.log(Gree.standGree)
    }
  }
}

let greeter: Gree
greeter = new Gree()
console.log(greeter.greet())

let greetMarker: typeof Gree = Gree
greetMarker.standGree = 'hhhh' // 修改静态属性

