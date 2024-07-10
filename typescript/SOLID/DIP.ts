interface IDatabase {
  save(data: string):void;
}


class MySQLDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} has been saved in MySQL Database`)
  }
}


class MongoDB implements IDatabase {
  save(data: string): void {
    console.log(`${data} has been saved in Mongo Database`)
  }
}


class HighLevelModule {
  constructor (private database: IDatabase){}
  execute(data: string): void {
    this.database.save(data)
  }
}


const mySQL: MySQLDatabase = new MySQLDatabase();
const mongo: MongoDB = new MongoDB()

const userName: HighLevelModule = new HighLevelModule(mySQL)
userName.execute("amir.torkashvand")

const post: HighLevelModule = new HighLevelModule(mongo)
post.execute("the first post")