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

    if (`../../logFiles/[${timestamp.getFullYear()}].txt`) {
      fs.writeFile(
        `../../logFiles/[${timestamp.getFullYear()}].txt`,
        message,
        { encoding: "utf-8", flag: "a+" },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}

let logger: Logger = Logger.getInstace();
let logger2: Logger = Logger.getInstace();

logger2.writeTofile("do it when you disponted");
logger.writeTofile("what ever it takes...!");
