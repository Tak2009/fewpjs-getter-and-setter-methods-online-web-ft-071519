class Bird {
    constructor(name) {
      this.name = name;
    }
   
    set phrase(phrase) {
      this._phrase = phrase;
    }
   
    get speak() {
      return `${this.name} says ${this._phrase || 'squawk'}`;
    }
  }

  class Circle {
      constructor(radius){
          this.radius = radius;
      }
      get diameter() {
          return this.radius * 2
      }

      get circumference(){
          return this.diameter * Math.PI
　　　}
      get area(){
          return this.radius ** 2 * Math.PI
      }

      set diameter(newDiameter){
          this.radius = newDiameter/2
      }

      set circumference(newCircumference){
          this.radius = newCircumference/Math.PI/2
      }

      test(){
        return this.radius ** 3
      }
    
}

class Fish {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  sayName() {
      return `Hi my name is ${this.name}`;
  }

  
}

let gooppy = new Fish("goo", 1);

class Dog {}