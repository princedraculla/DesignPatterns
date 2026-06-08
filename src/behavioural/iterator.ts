class ArrayIterator <T> {
  private position: number = 0;
  constructor(private collection: T[]) {}

  public next(): T {
    const result: T = this.collection[this.position]
    this.position += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

let numArray: number[] = [1,2,3,4,5,6]
const numArrayIterator = new ArrayIterator<number>(numArray)
console.log(numArrayIterator.hasNext())
console.log(numArrayIterator.next)

let strArray: string[] = ["Hello", "World"]
const strArrayIterator = new ArrayIterator<string>(strArray)

console.log(strArrayIterator.next())
console.log(strArrayIterator.next())
console.log(strArrayIterator.hasNext())


// real world example

class User {
  constructor(private name: string) {}
}

interface MyIteratorResult<T> {
  value: T | null;
  done: boolean;
}

interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hasNext(): boolean;
}

interface Collection<T> {
  createIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {
  constructor(private users: User[]) {}

  createIterator(): MyIterator<User> {
    return new UserIterator(this)
  }

  public getItems(): User[] {
    return this.users;
  }
}



class UserIterator implements MyIterator<User> {
  private collection: UserCollection;
  private position: number = 0;
  constructor(collection: UserCollection) {
    this.collection = collection;
  }

  public hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }

  public next(): MyIteratorResult<User> {
    if (this.hasNext()) {
      return {
        value: this.collection.getItems()[this.position++],
        done: false
      }
    } else {
      return {
        value: null,
        done: true
      }
    }
  }
}


// user code 


const users = [new User("Alice"), new User("John"),new User("Bob")]

const userCollection = new UserCollection(users)
const iterator = new UserIterator(userCollection)
console.log(iterator.hasNext())
console.log(iterator.next())