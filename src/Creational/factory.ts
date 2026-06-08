abstract class Car {
  constructor(
    public model: string,
    public productionYear: number
  ) {}

  abstract displayInfo(): void
}

class Sedan extends Car {
  public displayInfo():void {
    console.log(
      `sedan car with model: ${this.model}
      and Production Year: ${this.productionYear}`
    )
  }
}

class SUV extends Car {
  public displayInfo():void {
    console.log(
      `SUV car with model: ${this.model}
      and Production Year: ${this.productionYear}`
    )
  }
}

class Hachback extends Car {
  public displayInfo():void {
    console.log(
      `hachback car with model: ${this.model}
      and Production Year: ${this.productionYear}`
    )
  }
}


class CarFactory {
  public createCar(
    type: 'sedan' | 'suv' | 'hachback',
    model: string,
    productionYear: number
  ): Car {
    switch(type) {
      case "sedan":
        return new Sedan(model,productionYear)
      case "hachback": 
        return new Hachback(model,productionYear)
      case "suv":
        return new SUV(model,productionYear)
      default:
        throw new Error("invalid car type")
    }
  }
}


const carFactory = new CarFactory()
const sedan = carFactory.createCar("sedan", "camary", 2023)
const suv = carFactory.createCar("suv", "RAV4", 2023)
const hachback = carFactory.createCar("hachback", "corolla", 2023)

console.log(sedan)
console.log(suv)
console.log(hachback)

// real world implementation


abstract class PaymentsProcessor {
  constructor(public amount:number) {}

  abstract processPayment():void
}



class PaypalProcess extends PaymentsProcessor {
  public processPayment(): void {
    console.log(`paypal used for payment with this amount: ${this.amount}`)
  }
}

class StripeProcess extends PaymentsProcessor {
  public processPayment(): void {
    console.log(`stripe used for payment with amount: ${this.amount}`)
  }
}

class BankTransferProcess extends PaymentsProcessor {
  public processPayment(): void {
    console.log(`bank transfer used with amount: ${this.amount}`)
  }
}


class FactoryPayment {
  public createPayment(
    type: 'stripe' | 'paypal' | 'bank',
    amount: number): PaymentsProcessor {
      switch (type) {
        case 'bank':
          return new BankTransferProcess(amount)
        case 'paypal':
          return new PaypalProcess(amount)
        case 'stripe':
          return new StripeProcess(amount)
        default:
          throw new Error("payment method invalid")
        }
    }
}


const paymentFactory = new FactoryPayment()
const paypalMethod = paymentFactory.createPayment("paypal", 2000)
paypalMethod.processPayment()

const stripeMethod = paymentFactory.createPayment("stripe", 1000)
stripeMethod.processPayment()
