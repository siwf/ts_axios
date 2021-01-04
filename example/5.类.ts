class Animal1 {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}`)
  }
}

class Dog1 extends Animal1 {
  bark() {
    console.log('woof woof!')
  }
}
let dog = new Dog1()

dog.move(10)
dog.bark();