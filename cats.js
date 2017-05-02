$(document).ready(function() {
  var rootURL = 'http://bitkittens.herokuapp.com/cats.json'
  $('.summon-cats').on('click', function() {
    $.ajax({
      url: rootURL,
      method: 'GET',
      dataType: 'json'
      // data: { limit: 2, stuff: 4 }
    }).done(function(data) {
      var cats = [];
      for (var i = 0; i < data.cats.length; i++) {
        cat = $('<img>');
        cat.attr('src', data.cats[i].photo);
        cat.attr('alt', data.cats[i].naem);
        cats.push(cat);
      }
      console.log(cats);
      var boxes = $('.cat-box');
      boxes.each(function(index) {
        cats[index].appendTo($(this));
      });
    }).fail(function() {
      console.log("Error: Cat Not found");
    }).always(function() {});
  });
});
