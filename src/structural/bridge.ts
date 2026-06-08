// generic example

interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}


class WindowsMediaPlayaer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("playing Audio on Windows")
  }

  public playVideo(): void {
    console.log("playing video on Windows")
  }
}

class MacOsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("playing Audio on MacOs")
  }

  public playVideo(): void {
    console.log("playing Video on MacOs")
  }
}


abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

class PlayAUdio extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}

class PlayVideo extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}

// client side code for generic example
const windowsAUdioPlayer = new PlayAUdio(new WindowsMediaPlayaer())
windowsAUdioPlayer.playFile();

const macOsVideoPlayer = new PlayVideo(new MacOsMediaPlayer())
macOsVideoPlayer.playFile()


// real wolrd example 

interface Database {
  connect(): void;
  query(query: string): any;
  close(): void;
}

class PostgresSqlDatabase implements Database {
  public connect(): void {
    console.log("Postgres Database connected ...")
  }
  
  public query(query: string) {
    console.log(query)
    return "successfully inserted to postgres..."
  }
  
  public close(): void {
    console.log("Postgres Database closed...")
  }
}


class MongoDBDatabase implements Database {
  public connect(): void {
    console.log("Mongo DB Database connected...")
  }

  public query(query: string) {
    console.log(query)
    return "successfully inserted to mongo db..."
  }

  public close(): void {
    console.log("MongoDB closed...")
  }
}


abstract class DatabaseService {

  constructor(protected database: Database) {}

  abstract databaseService(): void;

  abstract fetchData(query: string): void;
}

class ClientDatabaseService extends DatabaseService {
  public databaseService(): void {
    this.database.connect();
  }

  public fetchData(query: string): void {
    const result = this.database.query(query);
    console.log(result)
    this.database.close();
  }
}


// client side code

const mongoInsert = new ClientDatabaseService(new MongoDBDatabase())
mongoInsert.databaseService();
mongoInsert.fetchData("insert")

const postgresDelete = new ClientDatabaseService(new PostgresSqlDatabase())
postgresDelete.databaseService();
postgresDelete.fetchData("delete")