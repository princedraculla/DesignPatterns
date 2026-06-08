// minimul implementation builder pattern
interface IBuilder {
  setPartA():void;
  setPartB():void;
  setPartC():void;
}

class Product {
  private parts: string[] = [];

  public addPart(part: string): void {
    this.parts.push(part)
  }

  public listParts(): void {
    console.log(`product parts are : ${this.parts.join(", ")}`)
  }
}


class ConcreteBuilder implements IBuilder {
  private product!: Product;


  constructor() {
    this.reset();
  }

  public reset():void {
    this.product = new Product()
  }

  public setPartA(): void {
    this.product.addPart("PartA")
  }

  public setPartB(): void {
    this.product.addPart("PartB")
    
  }
  public setPartC(): void {
    this.product.addPart("PartC")
  }

  public getProduct(): Product {
    const result: Product = this.product;
    this.reset();
    return result
  }

}



class Director {
  private builder!: IBuilder;

  public setBuilder(builder: IBuilder):void {
    this.builder = builder
  }

  public buildMinimumProduct(): void{
    this.builder.setPartA();
  }

  public buildFullProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}


const conceretebuilder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(conceretebuilder);
director.buildFullProduct();
const fullProduct = conceretebuilder.getProduct();
console.log(fullProduct)


// real world builder pattern

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

class Customer implements ICustomer {
 
 constructor(
  public firstName: string,
  public lastName: string,
  public email: string,
  public phoneNumber:string) {}
}


interface ICustomerBuilder {
  build():ICustomer
  setFirstName(firstName: string): ICustomerBuilder
  setLastName(lastName: string): ICustomerBuilder
  setEmail(email: string): ICustomerBuilder
  setPhoneNumber(phoneNumber: string): ICustomerBuilder
}

class CustomerBuilder implements ICustomerBuilder {
  private firstName: string = "";
  private lastName:string = "";
  private email: string = "";
  private phoneNumber: string = "";
  public build(): ICustomer {
    return new Customer(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber
    )
  }
  
  public setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this
  }

  public setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this
  }

  public setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this
  }

  public setPhoneNumber(phonenumber: string): ICustomerBuilder {
    this.phoneNumber = phonenumber;
    return this
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder ) {}
  public buildFullCustomer(firstname: string, lastname: string, email: string) {
    return this.builder
    .setFirstName(firstname)
    .setLastName(lastname)
    .setEmail(email)
    .build();
  }
  public buildMinimumCustomer(lastName: string, email: string) {
    return this.builder.setLastName(lastName).setEmail(email).build()
  }
}

const builder: ICustomerBuilder = new CustomerBuilder()
const customerDirector: CustomerDirector = new CustomerDirector(builder)
const fullcustomer: ICustomer = customerDirector.buildFullCustomer("amir", "torkashvand", "amirtorkashvand56@gmail.com")
const minimumCustomer: ICustomer = customerDirector.buildMinimumCustomer("torkashvand", "amirtorkashvand56@gmail.com")
console.log(fullcustomer)
console.log(minimumCustomer)