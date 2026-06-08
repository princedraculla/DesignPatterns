// generic example

interface IHanlder {
  setNext(handler: IHanlder): IHanlder;
  handler(request: string): string | null;
}


abstract class AbstractHandler implements IHanlder {
  private nextHandler: IHanlder | null = null;

  public setNext(handler: IHanlder): IHanlder {
    this.nextHandler = handler;
    return handler
  }

  public handler(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handler(request)
    }
    return null
  }

}

class MonkyHandler extends AbstractHandler {
  public handler(request: string): string | null {
    if (request === "Banana") {
      return `Monkey: i'll eat: ${request}`
    }
    return super.handler(request)
  }
}


class SquirrelHandler extends AbstractHandler {

  public handler(request: string): string | null {
    if (request === "Nut") {
      return `Squirrel: I'll eat: ${request}`
    }
    return super.handler(request)
  }
}


class DogHandler extends AbstractHandler {

  public handler(request: string): string | null {
    if(request === "MeatBall") {
      return `Dog: i'll eat: ${request}`
    }
    return super.handler(request)
  }
}


// client side code

function clientCode(handler: IHanlder): void {
  const foods = ["Nut", "Cup of Coffee", "MeatBall", "cherry", "Banana"]

  for (const food of foods) {
    console.log(`who wants to eat ${food}`)
    const result = handler.handler(food)
    if (result) {
      console.log(result)
    }
    console.log(`${food} was left untouched`)
  }
}

const monkey = new MonkyHandler()
const squirrel = new SquirrelHandler()
const dog = new DogHandler()

monkey.setNext(squirrel).setNext(dog)

clientCode(monkey)



// real world example

class Order {
  public isValid(): boolean {
    return true
  }

  public applyDiscount(): void {
    // logic here...
  }

  public processPayment(): boolean {
    return true;
  }

  public ship(): void {}
}



interface Handler {
  setNext(handler: Handler): Handler;
  handle(order: Order): string | null
}

abstract class AbstractHandle implements Handler {
  private nextHandler: Handler | null = null

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }

  public handle(order: Order): string | null {
    if(this.nextHandler) {
      return this.nextHandler.handle(order)
    }
    return null
  }
}


class ValidationHandler extends AbstractHandle {
  public handle(order: Order): string | null {
    if(order.isValid()) {
      return super.handle(order)
    }
    return "Validation Failed"
  }
}


class DiscountHandler extends AbstractHandle {

  public handle(order: Order): string | null {
    order.applyDiscount()
    return super.handle(order)
  }
}


class PaymentHandler extends AbstractHandle {

  public handle(order: Order): string | null {
    if (order.processPayment()) {
      return super.handle(order)
    }
    return "Payment Failed"
  }
}


class ShipingHandler extends AbstractHandle {

  public handle(order: Order): string | null {
    order.ship();
    return "order processed and shipped"
  }
}


// client side code 

const order = new Order()
const orderHandler = new ValidationHandler()

orderHandler.setNext(new DiscountHandler()).setNext(new PaymentHandler()).setNext(new ShipingHandler());

console.log(orderHandler.handle(order))


