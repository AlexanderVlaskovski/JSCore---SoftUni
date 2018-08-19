function f() {


    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += `\nComments:`;
                for (let comment of this.comments) {

                    result += `\n * ${comment}`;

                }
            }
            return result;
        }

    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    return {Post, SocialMediaPost, BlogPost}
}

let post = new Post("Post", "content");
console.log(post.toString());
let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
let bl = new BlogPost("bla", "blabla", 3);
bl.view();bl.view();bl.view();bl.view();
console.log(bl.toString());