const post = new Post('a', 'b', 'c');

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.isLive = false;
  this.comments = [];
}

console.log(post);