// generic example 

interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}

class OnState implements LightState {

  public switchState(lightSwitch: LightSwitch): void {
    console.log("State is On, Turning Off...")
    lightSwitch.setState(new OffState())
  }
}


class OffState implements LightState {

  public switchState(lightSwitch: LightSwitch): void {
    console.log("state is Off, Turning On...")
    lightSwitch.setState(new OnState())
  }
}




class LightSwitch {
  constructor(private state: LightState) {}

  public setState(state: LightState): void {
    this.state = state
  }

  public press(): void {
    this.state.switchState(this)
  }
}

// client code ...


const lightSwitch = new LightSwitch(new OffState())

lightSwitch.press()
lightSwitch.press()



// real world example ...


interface Tool {
  onMouseDown(): void;
  onMouseUP(): void;
}

class SelectionTool implements Tool {

  public onMouseDown(): void {
    console.log("Selection Started...");
  }

  public onMouseUP(): void {
    console.log("Selection Drawn...")
  }
}


class BrushTool implements Tool {

  public onMouseDown(): void {
    console.log("Brush Stroke Started...")
  }

  public onMouseUP(): void {
    console.log("Brush Stroke Drawn...")
  }
}


class EraserTool implements Tool {

  public onMouseDown(): void {
    console.log("Earaser Started...")
  }

  public onMouseUP(): void {
    console.log("Erased...")
  }
}


class Canvas {

  constructor(private tool: Tool) {}

  public setTool(tool: Tool): void {
    this.tool = tool
  }

  public onMouseDown(): void {
    this.tool.onMouseDown()
  }

  public onMouseUp(): void {
    this.tool.onMouseUP()
  }
}


const canva = new Canvas(new SelectionTool())
canva.onMouseDown()
canva.onMouseUp()

canva.setTool(new BrushTool())
canva.onMouseDown()
canva.onMouseUp()

canva.setTool(new EraserTool())
canva.onMouseDown()
canva.onMouseUp()