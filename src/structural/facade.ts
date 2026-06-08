// example

class Grinder {
  public grindBeans(): void {
    console.log("grinding beans ...")
  }
}

class Boiler {
  public boilWater(): void {
    console.log("boiling water ...");
  }
}

class Brewer {
  public brweCoffee(): void {
    console.log("brewing coffee ...");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee(): void {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brweCoffee();
    console.log("Coffee is Ready");
  }
}


// client code 
const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

let coffeeMaker = new CoffeeMakerFacade(grinder,boiler,brewer)
coffeeMaker.makeCoffee()

// real world example

class Amplifire {
  public turnON(): void {
    console.log("the amplifire turned on");
  };

  public setVolume(level: number): void {
    console.log(`the volume of Amplifire is set to ${level}`)
  }
}

class DvdPlayer {
  
  public turnOn(): void {
    console.log(" the dvd palayer is turned on ...")
  }

  public Play(movie: string): void {
    console.log(`${movie}`)
  }
}

class Projector {

  public turnOn(): void {
    console.log(" the projector is turned on ...")
  }

  public setInput(dvdPlayer: DvdPlayer): void {
    console.log(`the prjector is playing movie - ${dvdPlayer.turnOn} - `)
  }
}


class Lights {
  public dim(level: number): void {
    console.log(`the lever of the lights are in ${level}`)
  }
}


class HomeTheaterFacade {
  constructor(
    private amplifire: Amplifire,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}

  public watchMovie(movie: string, level: number, volume: number): void {
    this.lights.dim(volume)
    this.amplifire.turnON();
    this.amplifire.setVolume(level);
    this.dvdPlayer.turnOn();
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer)
    this.dvdPlayer.Play(movie);
    
  }
}


// client code side

const amplifire = new Amplifire()
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();

const homeTheaterFacade = new HomeTheaterFacade(amplifire,dvdPlayer,projector,lights)

homeTheaterFacade.watchMovie("good,bad,ugly", 80, 100)