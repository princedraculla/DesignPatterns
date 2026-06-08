// generic code example

class RectangleAdapted {
  constructor(
    private width: number,
    private height: number
  ) {}

  public getWidth(): number {
    return this.width;
  }

  public getHeghit(): number {
    return this.height;
  }

  public area(): number {
    return this.width * this.height ;
  }
}

class SquareAdaptee {
  constructor(private side: number) {}

  public getSide(): number {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter {
  constructor(protected square: SquareAdaptee) {}

  public getHeight(): number {
    return this.square.getSide();
  }

  public getWidth(): number {
    return this.square.getSide()
  }

  public area():number {
    return this.square.area();
  }
}


// real world example


class PostgreSQLDatabse {
  public connectToPostgresSql(uri: string): void {
    console.log(`connecting to POSTGRES: ${uri}`)
  }

  public queryToPostgres(query: string): void {
    console.log(query)
  }
}


class ToMySQLDatabase {
  public connectToMySQL(uri: string): void {
    console.log(`connecting to MySQL Database: ${uri}`)
  }

  public queryToMySQL(query: string): void {
    console.log(query)
  }
}


class DatabaseAdapter {
  constructor(private mySql: ToMySQLDatabase) {}

  public connectToPostgresSql(uri: string): void {
    this.mySql.connectToMySQL(uri)
  }

  public queryToPostgres(query: string): void {
    this.mySql.queryToMySQL(query)
  }
}


// client side code 
  // const database = new PostgreSQLDatabse()
  // database.connectToPostgresSql("postgres:localhost@user:5432")
  // database.queryToPostgres("SELECT * FROM tabale users")


// after refactoring 

const database = new DatabaseAdapter(new ToMySQLDatabase())
database.connectToPostgresSql("mysql:localhost@user:3033")
database.queryToPostgres(" SELECT * FROM tabale users")