(function(module) {

  var information = [];

  function BlogPost(category) {
    this.title = category.title; //Title of info
    this.category = category.type;
    this.author = category.author;
    this.body = category.body; //Summery of info
    this.publishedOn = category.publishedOn;
  }

  BlogPost.prototype.toHtml = function() {
    var source = $('#blog-template').html();
    var template = Handlebars.compile(source);
    var html = template(this);
    return html;
  };

  developerBlog.forEach(function(element){
    information.push(new BlogPost(element));
  });

  information.forEach(function(bPost){
    $('#blog').append(bPost.toHtml());
    console.log('appending story: '+bPost.title);
    console.log(bPost.category);
    if ($('#author-filter option[value="' + bPost.author + '"]').length === 0) {
      $('#author-filter').append('<option value ="' + bPost.author+ '">' +bPost.author+ '</option>');
    }
    if ($('#category-filter option[value="' + bPost.category + '"]').length === 0) {
      $('#category-filter').append('<option value ="' + bPost.category+ '">' +bPost.category+ '</option>');
    }
  });
})(window);
