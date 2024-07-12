//peyment processor
abstract class PaymentProcessor {
  abstract paymentMethod(amount:number): void;
}


class CreditPayment extends PaymentProcessor {
   paymentMethod(amount:number): void{
    console.log(`payment using Credit Card Processor - amount $${amount}`)
  }
}

class DebitCardProcessor extends PaymentProcessor {
  paymentMethod(amount:number ): void {
    console.log(`payment using debit card processor - amount $${amount}`)
  }
}

class PayPalProcessor extends PaymentProcessor {
  paymentMethod(amount:number): void {
    console.log(`payment using PayPal processor - amount $${amount}`)
  }
}


function executePayment(paymentProcessor: PaymentProcessor, amount: number): void {
  paymentProcessor.paymentMethod(amount)
}


const creditPayment: CreditPayment = new CreditPayment()

executePayment(creditPayment, 2000)