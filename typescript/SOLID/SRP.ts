interface Storage {
  title: string;
  content: string;
}

class BlogPost {
  constructor(
    public title: string,
    public content: string,
    public storage: Storage
  ) {}
  public logging(): void {
    console.log(this.title + this.content);
  }
  public createpost(title: string, content: string): void {
    this.storage = { title: title, content: content } as Storage;
  }
  public updatePost(title: string, content: string): void {
    console.log(this.storage);
    this.storage = { title: title, content: content } as Storage;
  }
  public deletePost(title: string): void {
    console.log(this.storage);
    console.log("deleting post using this title:" + title);

    this.storage.clear();
  }
}

class DisplayPost {
  constructor(public blogPost: BlogPost){}
  public display(){
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`
  }
}
