// generic example of composite pattern

interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

class Developer implements Employee {
  
  constructor(private name: string, private salary: number, private role: string) {}

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return this.role; 
  }
}


class Designer implements Employee {

  constructor(private name: string, private salary: number, private role: string) {}

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return this.role; 
  }
}


interface CompositeEmployee extends Employee {
  addEmploee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[]
}


class Manager implements CompositeEmployee {
  private employees: Employee[] = [];

  constructor(private name: string, private salary: number,) {}

  public addEmploee(employee: Employee): void {
    this.employees.push(employee)
  }

  public removeEmployee(employee: Employee): void {
    
    const index = this.employees.indexOf(employee)

    if (index !== -1) {
      this.employees.splice(index, 1)
    }
    console.log(`this employee ${employee} its not for this manager or not exists`)

  }

  public getEmployees(): Employee[] {
    return this.employees
  }


  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return "Manager"
  }
}




const backendDev = new Developer("amir", 12000, "Backend Dev")
const frontendDev = new Developer("amir", 12000, "frontend Dev")

const designer = new Designer("noOne", 1000, "UI/UX");

const manager = new Manager("amir", 20000);

manager.addEmploee(backendDev)
manager.addEmploee(frontendDev)
manager.addEmploee(designer)

console.log(manager.getEmployees())

console.log(manager)


// real world example
// every folder may contains file 
// tree-like structure example


interface FileSystemComponent {
  getName(): string;
  getSize(): number;
}


class FileComponent implements FileSystemComponent {

  constructor(private name: string, private size: number) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }
}


interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponent(component: FileSystemComponent): void;
  removeComponent(component: FileSystemComponent): void;
  getComponents(): FileSystemComponent[];
}


class Folder implements CompositeFileSystemComponent {
  private components: FileSystemComponent[] = []

  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.components.reduce((total,component)=> total + component.getSize() ,0)
  }

  public addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }

  public removeComponent(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);

    if (index !== -1) {
      this.components.splice(index)
    }
    console.log("this component dose not exists");
  }

  public getComponents(): FileSystemComponent[] {
    return this.components;
  }
}



// client side code 

const file1: FileSystemComponent = new FileComponent("file1.txt", 1000)
const file2: FileComponent = new FileComponent("file2.txt", 15000)
const file3 = new FileComponent("file3.txt", 14000)

const folder = new Folder("this-folder")
const folder2 = new Folder("this-folder2")
folder.addComponent(file1)
folder.addComponent(file2)
folder.addComponent(file3)
folder.addComponent(folder2)

console.log(folder.getSize())
console.log(folder.getComponents())