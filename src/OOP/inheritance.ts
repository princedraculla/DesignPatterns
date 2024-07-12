abstract class Service {
  constructor(public id: number, public description: string) {}
  public display(): void {
    console.log(`id: ${this.id}, description: ${this.description}`);
  }
}

class Product extends Service {
  constructor(
    public id: number,
    public description: string,
    public name: string,
    public operationType: string,
    private quantity: number = 1,
    private allowed: boolean
  ) {
    super(id, description);
  }
  public display() {}
  public operation(amount: number, quantity: number): void {
    if (!amount && amount < 0) {
      return;
    } else if (this.allowed && this.operationType === "buy") {
      console.log(`product: ${this.name} buyed from customer ${quantity} number`);
      this.quantity -= 1;
    }else {
      console.log(`product: ${this.name} saled for customers ${quantity}numbers`)
    }
  }
}

class Finance extends Service {
  constructor(
    public id: number,
    public description: string,
    public operationType: string,
    private balance: number = 0
  ) {
    super(id, description);
    this.display();
  }
  public operation(amount: number): number | undefined {
    if (!this.operationType && this.balance - amount > 0 && amount > 0) {
      return;
    }
    if (this.operationType === "withdraw") {
      console.log(`id: ${this.id}, description: ${this.description} `);
      return (this.balance -= amount);
    } else if (this.operationType === "deposit") {
      console.log(`id: ${this.id}, ${this.description}`);
      return (this.balance += amount);
    }
  }
}

export { Product, Finance };
