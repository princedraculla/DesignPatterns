// generic example of decorator pattern 
// practicing the decorator pattern syntax


interface Coffee {
  cost(): number;
  description(): string;
}


class SimpleCoffee implements Coffee {

  public cost(): number {
    return 10
  }

  public description(): string {
    return "simple coffee"
  }
}


abstract class MilkCoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}
  abstract cost(): number;
  abstract description(): string;
}

class CoffeeWithMilk extends MilkCoffeeDecorator {

  constructor(coffee: Coffee) {
    super(coffee)
  }

  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()},  with milk`
  }
}

// client code
const simpleCoffee = new SimpleCoffee()
console.log(simpleCoffee.cost())
console.log(simpleCoffee.description())

const coffeeWithMilk = new CoffeeWithMilk(simpleCoffee)
console.log(coffeeWithMilk.cost())
console.log(coffeeWithMilk.description())




// real world example


interface ServerRequest {
  handler(request: any): void;
}



class HttpServer implements ServerRequest {
  public handler(request: any): void {
    console.log("handling request : ", request);
  }
}


abstract class RequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handler(request: any): void;
}


class AuthMiddleWare extends RequestDecorator {

  public handler(request: any): void {
    if (request.isAuthenticated) {
      console.log("request logged...")
      this.serverRequest.handler(request)
    } else {
      console.log("Access Denied...!")
    }
  }
}


class LoggingMiddleWare extends RequestDecorator {
  
  public handler(request: any): void {
    console.log("Logging Middleware: ", request)
    this.serverRequest.handler(request)
  }
}



// client side code

const request = {
  isAuthenticated: true,
  content: "just request"
}


let httpServer: ServerRequest = new HttpServer()

httpServer = new AuthMiddleWare(httpServer)
httpServer = new LoggingMiddleWare(httpServer)



httpServer.handler(request)