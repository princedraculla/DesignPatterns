import { BanckAccount } from "./OOP/encapsulation";
import {
  Rectangle,
  Circle,
  calculationArea,
  calculationPerimeter,
} from "./OOP/abstraction";
import {Finance, Product, Book, Electronic} from "./OOP/inheritance"

// encapsulation example
const banckAccount = new BanckAccount(1000);
banckAccount.deposit(500);
banckAccount.withdraw(200);
console.log(`current balance:  ${banckAccount.getBalanceOfAccount}`);

// Abstraction Example "polymorphism"
const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(4, 5);
console.log("Area of circle: " + calculationArea(circle));
console.log("perimeter of circle: " + calculationPerimeter(circle));
console.log("perimeter of rectangle: " + calculationPerimeter(rectangle));
console.log("Area of rectangle: " + calculationArea(rectangle));


// inheritance

const deposit: Finance = new Finance(1,"deposit Money", "deposit", 1000)
deposit.operation(200)

const dsa: Book = new Book(1,300,"data structure & algorithm", "AMT", "computer engineering")
dsa.display()

const dellxps: Electronic = new Electronic(2,5000,"my laptop", "Dell", "xps 15 7590")
dellxps.display();