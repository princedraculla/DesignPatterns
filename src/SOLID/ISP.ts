// creating post
// commenting post
// sharing post
// Admin - 3
// Regular - 2

interface Post {
  title: string,
  content: string
}

interface Comment {
  title: string,
  content: string
}



interface CreatingPost {
  createPost(post: Post): void;
}

interface CommentPost {
  comment(comment: Comment): void;
}

interface SharingPost {
  sharingPosts(post: Post): void;
}

class RegularUser implements CommentPost, SharingPost {
  comment(comment: Comment): void {
    console.log(comment.title + " user commented" + comment.content);
  }
  sharingPosts(post: Post): void {
    console.log(`user share this post ${post.title}`);
  }
}

class Admin implements CreatingPost, CommentPost, SharingPost {
  createPost(post: Post): void {
    console.log(`this post for admin has been created ${post.title}`);
  }
  comment(comment: Comment): void {
    console.log(`user comented for this post ${comment.title} with content: ${comment.content}`);
  }
  sharingPosts(post: Post): void {
    console.log(`this document: ${post.title} shared`);
  }
}
