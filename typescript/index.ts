import { BanckAccount } from "./OOP/encapsulation.ts";
import {
  Rectangle,
  Circle,
  calculationArea,
  calculationPerimeter,
} from "./OOP/abstraction.ts";

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
