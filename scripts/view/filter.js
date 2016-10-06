
var blogFilter = {};

blogFilter.filterByAuthor = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('entry').hide();
      $('entry[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('entry').fadeIn();
      $('blog-template').hide();
    }
    $('#author-filter').val('');
  });
};

blogFilter.filterBySubject = function() {
  $('#category-filter').on('change', function() {
    console.log('filter');
    if ($(this).val()) {
      $('entry').hide();
      $('entry[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('.entry').fadeIn();
      $('blog-template').hide();
    }
    $('#category-filter').val('');
  });
};

blogFilter.filterByAuthor();
blogFilter.filterBySubject();
