// generic example about light commands

interface ICommand {
  execute(): void;
  undo(): void;
}

class Light {
  public turnOn(): void {
    console.log("turning on the light...`")
  }

  public turnOff(): void {
    console.log("turning off the light...")
  }
}

class TurnOnCommand implements ICommand {

  constructor(private light: Light) {}
  
  public execute(): void {
    this.light.turnOn();
  }

  public undo(): void {
    this.light.turnOff();
  }
}



class TurnOffCommand implements ICommand {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOff()
  }

  public undo(): void {
    this.light.turnOn()
  }
}




class RemoteController {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQuee: ICommand[] = [];
  
  
  public setCommand(command: ICommand): void {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQuee.push(command)
  }

  public buttonWasPressed(): void {
    if(this.commandQuee.length) {
      const command = this.commandQuee.shift()
      command?.execute()
    }
  }

  public undoButtonWasPressed(): void {
    this.undoCommand.execute()
  }

  public hasCommand(): boolean {

    return this.commandQuee.length > 0;
  }
}


const remote: RemoteController = new RemoteController()
const light: Light = new Light()

// turn on command
remote.setCommand(new TurnOnCommand(light))
remote.buttonWasPressed()

// turn off command

remote.setCommand(new TurnOffCommand(light))
remote.buttonWasPressed()

// undo last operation
remote.undoButtonWasPressed()


// command quee

remote.setCommand(new TurnOnCommand(light))
remote.setCommand(new TurnOffCommand(light))

while(remote.hasCommand()) {
  remote.buttonWasPressed()
}




// real world example
// file system crud operation

interface FileCommands {
  execute(): void;
  undo(): void;
}


class MyFileSystem {
  private commandsQueue: FileCommands[] = [];

  public addCommand(command: FileCommands): void {
    this.commandsQueue.push(command)
  }

  public executeCommand(): void {
    if (this.commandsQueue.length > 0) {

      const command = this.commandsQueue.shift()
      command?.execute()
    }
  }

  public undoCommand(): void {
    const command = this.commandsQueue.pop()
    command?.undo
  }

  public hasCommand(): boolean {
    return this.commandsQueue.length > 0;
  }

}


class CreateFileCommand implements FileCommands {
  
  constructor(private path: string) {}
  public execute(): void { 
    console.log(`creating file at ${this.path}`)
  }

  public undo(): void {
    console.log(`deleting file at ${this.path}`)
  }
}


class ReadFileCommand implements FileCommands {

  constructor(private path: string) {}

  public execute(): void {
    console.log(`Reading file at ${this.path}`)
  }

  public undo(): void {
    console.log("the undo method is not available")
  }
}

class UpdateFileCommand implements FileCommands {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string,
  ) {}

  public execute(): void {
    console.log(`updating at ${this.path}, new content: ${this.newContent}`)
  }

  public undo(): void {
    console.log(`reverting old content ${this.oldContent}`)
  }
}


class DeleteFileCommand implements FileCommands {

  constructor(private path: string) {}

  public execute(): void {
    console.log(`Deleting file at ${this.path}`)
  }

  public undo(): void {
    console.log(`Restoring file at ${this.path}`)
  }
}


const myFileSystem: MyFileSystem = new MyFileSystem()

myFileSystem.addCommand(new CreateFileCommand("/path/file.txt"))
myFileSystem.addCommand(new UpdateFileCommand(
  "/path/file.txt",
  "new content",
  "old content"
))

while (myFileSystem.hasCommand()) {
  myFileSystem.executeCommand
}

myFileSystem.undoCommand()