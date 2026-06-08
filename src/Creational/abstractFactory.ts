interface IProductA {
   operationA(): string;
}


interface IProductB {
  operationB(): string
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}


class ProductA implements IProductA {
  public operationA(): string {
    return 'this is result of operation A'
  }
}


class ProductB implements IProductB {
  public operationB(): string {
    return 'this is result of operation B'
  }

  public combinedOperation(collaborator: IProductA): string {
    return `this is result of combined operations with (${collaborator.operationA})`
  }

}


class Factory implements IFactory {
  public createProductA(): IProductA {
    return new ProductA()
  }
  public createProductB(): IProductB {
    return new ProductB
  }
}


const factory = new Factory()

const productA = factory.createProductA();
console.log(productA.operationA())

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA))
console.log(productB.operationB())


// real world example

interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render():void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox
}

class WindowsButton implements Button {
  public render(): void {
    console.log("render Button in windows style");
  }

  public onClick(f: Function): void {
    console.log("windows button clicked");
    f();
  }
  
}

class WindowsCheckbox implements Checkbox {

  constructor(private button: Button) {}

  public render(): void {
    console.log("render checkbox in windows style")
  }

  public toggle(): void {
    this.button.onClick(() => 
      console.log("windows checkbox toggled"))
  }
}


class MacOSButton implements Button {
  public render(): void {
    console.log("render button in MacOs style")
  }

  public onClick(f: Function): void {
    console.log("MacOs button clicked")
    f();
  }
}


class MacOsCheckbox implements Checkbox {
  constructor(private button: Button) {}
  public render(): void {
    console.log("render checkbox in Mac Style")
  }

  public toggle(): void {
    this.button.onClick(() => console.log("Mac checkbox toggled"))
  }
}


class WindowsFactory implements GUIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }
  public createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button)
  }
}

class MacOSFactory implements GUIFactory {
  public createButton(): Button {
    return new MacOSButton()
  }

  public createCheckbox(button: Button): Checkbox {
    return new MacOsCheckbox(button)
  }

}

// client side code  

function renderUI(factory: GUIFactory):void {
  const button =  factory.createButton();
  const checkbox = factory.createCheckbox(button)

  button.render()
  button.onClick(() => 
  console.log("Button Clicked")
  );
  checkbox.render();
  checkbox.toggle();
}

renderUI(new WindowsFactory())
renderUI(new MacOSFactory())