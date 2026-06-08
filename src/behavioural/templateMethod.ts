// generic example

import { json } from "node:stream/consumers";

abstract class CakeRecipe {
  public bakeCake(): void {
    this.preheatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }

  protected preheatOven(): void {
    console.log("preheating oven 175 degree C")
  }

  protected bake(): void {
    console.log("baking the ckae...");
  }

  protected coolingDown(): void {
    console.log("cooling down the cake...");
  }

  protected decorate(): void {
    console.log("decorating the cake...");
  }

  protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, eggs")
  }

  protected decorate(): void {
    console.log("decorating with Chocolate")
  }
}

class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla ,sugar, eggs")
  }
}


function bakecake(cake: CakeRecipe): void {
  console.log(cake.bakeCake())
}


const chocolateCake: CakeRecipe = new ChocolateCake();
bakecake(chocolateCake)

const vanillaCake: CakeRecipe = new VanillaCake();
bakecake(vanillaCake)


// real world example

abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = "sample.data"
    const paresedData = this.parse(data);
    this.validateData(paresedData);
    this.useData(paresedData);
  }

  protected loadData(): void {
    console.log("loading data...")
  }

  protected validateData(data: any): void  {
    console.log("validating data...")
  }

  protected useData(data: any): void {
    console.log("using data...")
  }

  protected abstract parse(data: string): any;
}


class JSONParse extends DataParser {
  protected parse(data: string): any {
    console.log("parsing data as JSON...")
    return data
  }
}

class XMLParser extends DataParser {
  protected parse(data: string): any {
    console.log("parsing data as XML...")
    return data
  }
}

// client side code

function dataParser(parserType: DataParser): void {
  parserType.parseData()
}
console.log("parsing data with JSON parser")
const jsonParser = new JSONParse()
dataParser(jsonParser)

console.log("parsing data with XML parser")
const xmlParser = new XMLParser()
dataParser(xmlParser)