(function(module) {

  function BlogPost(data) {
    Object.keys(data).forEach(function(ele){this[ele] = data[ele];}, this); //creates a object of the same type and keys as it is passed
  }

  BlogPost.allBlogs = [];

  BlogPost.prototype.toHtml = function(template) {
    var template = Handlebars.compile($(template).html()); //  Why .text()? for XSS security?
    return template(this);
  };

  BlogPost.createTable = function() {

    webDB.execute(
      'CREATE TABLE IF NOT EXISTS blogDB (' +
      'id INTEGER PRIMARY KEY,'+
      'title VARCHAR(160) NOT NULL,'+
      'author VARCHAR(48) NOT NULL,'+
      'subject VARCHAR(24) NOT NULL,'+
      'publishDate DATETIME,'+
      'body TEXT NOT NULL);',
    function(){
      console.log('Table set up');
    }
    );
  };



  // developerBlog.forEach(function(element){
  //   information.push(new BlogPost(element));
  // });

  // information.forEach(function(bPost){
  //   $('#blog').append(bPost.toHtml());
  //   console.log('appending story: '+bPost.title);
  //   console.log(bPost.category);
  //   if ($('#author-filter option[value="' + bPost.author + '"]').length === 0) {
  //     $('#author-filter').append('<option value ="' + bPost.author+ '">' +bPost.author+ '</option>');
  //   }
  //   if ($('#category-filter option[value="' + bPost.category + '"]').length === 0) {
  //     $('#category-filter').append('<option value ="' + bPost.category+ '">' +bPost.category+ '</option>');
  //   }
  // });
  BlogPost.createTable();
  module.BlogPost = BlogPost;
})(window);
