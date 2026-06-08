interface Customer {
  giveDiscount():number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30
  }
}


class Discount {
  constructor(private customerType: Customer){}
  discount(): number{
    return this.customerType.giveDiscount()
  }
}

const permiumCustomer: PremiumCustomer = new PremiumCustomer()
const discount: Discount = new Discount(permiumCustomer)
const value: number = discount.discount()
console.log(value)

