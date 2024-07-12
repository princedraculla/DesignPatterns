import * as fs from "node:fs";

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstace() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  // path = C:\GitHub\DesignPatterns\logFiles

  public writeTofile(message: string): void {
    const timestamp = new Date();
    fs.access(`../../logFiles`, (error) => {
      if (error?.code === "ENOENT"){
        fs.mkdir('../../logFiles',(err) => console.log(err)
        )
        if (`../../logFiles/[${timestamp.getFullYear()}].txt`) {
          fs.writeFile(
            `../../logFiles/[${timestamp.getFullYear()}].txt`,
            message+"\r\n",
            { encoding: "utf-8", flag: "a+" },
            (err) => {
              console.log(err);
            }
          );
        }
      }
    })
    
  }
}

let logger: Logger = Logger.getInstace();
let logger2: Logger = Logger.getInstace();
let logger3: Logger = Logger.getInstace()

logger2.writeTofile("do it when you disponted");
logger.writeTofile("what ever it takes...!");
logger3.writeTofile("just do it... make it better later")