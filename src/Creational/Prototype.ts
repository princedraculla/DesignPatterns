// generic example 

interface IUserDetails {
  name: string;
  age: number;
  email: string;
}

interface IPrototype {
  clone(): IPrototype;
  getUserDetails(): IUserDetails;
}


class Prototype implements IPrototype {
  constructor(private user: IUserDetails) {}

  public clone(): IPrototype {
    const clone = Object.create(this)
    clone.user = {...this.user}
    return clone
  }

  public getUserDetails(): IUserDetails {
    return this.user;
  }
}

let user1 = new Prototype({
  name: "amir",
  age: 28,
  email: "amirtorkashvand@gmail.com"
})

let user2 = user1.clone()
console.log(user1 === user2)

// real world example
interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    public properties: ShapeProperties,
    public height: number,
    public width: number
  ) {
    super(properties);
  }

  public clone(): Shape {
    let cloneProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(cloneProperties, this.height, this.width);
  }
}

class Circle extends Shape {
  constructor(public properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  public clone(): Shape {
    let cloneProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(cloneProperties, this.radius);
  }
}

const redRectangle: Shape = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 100,
  },
  10,
  20
);

const blueRectangle: Shape = redRectangle.clone()
blueRectangle.properties.color = "Blue"

console.log(redRectangle);
console.log(blueRectangle.properties.color);
