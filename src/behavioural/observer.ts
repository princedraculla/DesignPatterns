// basic implementation of observer pattern

interface Observer {
  update(subject: Subject): void;
}

interface Subject {

  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observer: Observer): void {

    const isExists = this.observers.includes(observer)

    if (isExists) {
      return console.log("Observer Already Exists")
    }
    this.observers.push(observer);
    console.log("New Observer Added Successfully");

  }

  public removeObserver(observer: Observer): void {

    const indexOfObserver = this.observers.indexOf(observer)
    if (indexOfObserver === -1) {
      return console.log("the Observer Does Not Exists")
    }
    this.observers.splice(indexOfObserver)
    console.log("Observer Successfully Deleted")
  }

  public notifyObservers(): void {
    this.observers.forEach(observer => observer.update(this))
  }

  public getState(): number {
    return this.state;
  }

  public setState(state: number): void {
    this.state = state
    this.notifyObservers()
  }
}

class ConcereteObserver implements Observer {
  constructor(private id: number) {}

  public update(subject: Subject): void {
    console.log(`the observer ${this.id}, has been with subject ${subject.getState()} updated`)
  }
}


// client side code 

let observer1 = new ConcereteObserver(1) 
let subject = new ConcreteSubject()
subject.addObserver(observer1)
let observer2 = new ConcereteObserver(2)
subject.addObserver(observer2)

subject.setState(123)




// real world implementation...


// a wether station that cast the details of wether

interface IObserver {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface ISubject {
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObserver(): void;
}

class WeatherData implements ISubject {
  private observers: IObserver[] = [];
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  public registerObserver(observer: IObserver): void {
    const isExists = this.observers.includes(observer);

    if (isExists) {
      return console.log("the Observer Already Exists");
    }
    this.observers.push(observer);
    console.log("Observer successfully registered");
  }

  public removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);

    if (index === -1) {
      return console.log("the Observer Does Not Exists");
    }
    this.observers.splice(index,1);
    console.log("the Observer Successfully Deleted");
  }

  public notifyObserver(): void {

    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      for (let observer of this.observers) {
        observer.update(
          this.pressure, this.humidity, this.pressure
        )
      }
    }
  }

  public setMeasurement(temperature: number, humidity: number, pressure: number): void {
    if (
      temperature !== undefined &&
      humidity !== undefined &&
      pressure !== undefined
    ) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      this.notifyObserver()
    }
  }
}


class CurrentConditionDisplay implements IObserver {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  constructor(private weatherData: ISubject) {
    this.weatherData.registerObserver(this)
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display()
  }

  public display(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      console.log(`Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressure: ${this.pressure}`)
    } else {
      console.log("Weather Data Is not Available")
    }
  }
}


// client side code 

const weatherDataClass = new WeatherData()
const currentCondition = new CurrentConditionDisplay(weatherDataClass)
const secondCondition = new CurrentConditionDisplay(weatherDataClass)

weatherDataClass.setMeasurement(80,65,34.5)
weatherDataClass.setMeasurement(50,329,43.23)