
class BlogPost {
  public storage: string[] = [];
  constructor(public title: string, public content: string) {}
  public logging(): void {
    console.log(this.title + this.content);
  }
  public createpost(title: string, content: string): void {
    this.storage.push(title,content)
    console.log(this.storage);
    

  }
  public updatePost(title: string, content: string): void {}
  public deletePost(title: string): void {}
}

class DisplayPost {
  constructor(public blogPost: BlogPost) {}
  public display() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}

const blogPost: BlogPost = new BlogPost("first", "for testing");
console.log(blogPost);
blogPost.createpost("title", "content");
