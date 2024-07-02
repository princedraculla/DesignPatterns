interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  public area(): number {
    return this.width * this.height;
  }

  public perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }

  public perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

function calculationArea(shape: Shape): number {
  return shape.area();
}

function calculationPerimeter(shape: Shape): number {
  return shape.perimeter();
}

export { calculationArea, calculationPerimeter, Circle, Rectangle };
