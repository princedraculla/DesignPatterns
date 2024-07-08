var BlogPost = /** @class */ (function () {
    function BlogPost(title, content) {
        this.title = title;
        this.content = content;
        this.storage = [];
    }
    BlogPost.prototype.logging = function () {
        console.log(this.title + this.content);
    };
    BlogPost.prototype.createpost = function (title, content) {
        this.storage.push(title, content);
        console.log(this.storage);
    };
    BlogPost.prototype.updatePost = function (title, content) { };
    BlogPost.prototype.deletePost = function (title) { };
    return BlogPost;
}());
var DisplayPost = /** @class */ (function () {
    function DisplayPost(blogPost) {
        this.blogPost = blogPost;
    }
    DisplayPost.prototype.display = function () {
        return "<h1>".concat(this.blogPost.title, "</h1><p>").concat(this.blogPost.content, "</p>");
    };
    return DisplayPost;
}());
var blogPost = new BlogPost("first", "for testing");
console.log(blogPost);
blogPost.createpost("title", "content");
