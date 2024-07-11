class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance){
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

   set value(value: number) {
    Singleton._value = value
  }

  public get value(): number {
    return Singleton._value;
  }
}


let instance1 = Singleton.getInstance()
instance1.value = 10

let instance2 = Singleton.getInstance()

console.log(instance2.value)