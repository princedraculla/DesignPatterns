interface PaymentStrategy {
  pay(amont: number): void;
}

class PayPalPayment implements PaymentStrategy {
  public pay(amont: number): void {
    console.log(`paid ${amont} using PayPal`)
  }
}


class CreditCardPayment implements PaymentStrategy {
  public pay(amont: number): void {
    console.log(`paid ${amont} using credit card`)
  }
}



class BitcoinPayment implements PaymentStrategy {
  public pay(amont: number): void {
    console.log(`paid ${amont} using Bitcoin`)
  }
}


class ShoppingCard {
  private amount: number = 0;
  constructor(private strategy: PaymentStrategy) {}

  public setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public addToCard(amount: number): void {
    this.amount += amount
  }

  public checkout(): void {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

// user of code 

const card = new ShoppingCard(new CreditCardPayment());

card.addToCard(100);
card.addToCard(50);

// changing strategy at runtime

card.setPaymentStrategy(new PayPalPayment())
card.checkout()



// real world example


interface FilterStrategy {
  apply(image: string): void;
}



class GrayScaleStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`processing image:${image} using gray scale...`)
  }
}

class SepiaStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`processing image:${image} using sepia...`)
  }
}

class NegativeStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`processing image:${image} using negative...`)
  }
}


class ImageProcessor {
  constructor(private strategy: FilterStrategy) {}

  public setFilterStrategy(strategy: FilterStrategy): void {
    this.strategy = strategy;
  }

  public applyFilter(image: string): void {
    this.strategy.apply(image)
  }
}

// user of code 


const imageProcessor = new ImageProcessor(new GrayScaleStrategy())
imageProcessor.applyFilter("image.jpg")

imageProcessor.setFilterStrategy(new NegativeStrategy())
imageProcessor.applyFilter("image2.jpg")