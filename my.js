/*
 $.get( "search.php?search=Daddy", function( response ) {
  console.log( response );
});
*/
function basicSearch(searchTerms) {
  $.ajax({
    url: "search.php",
    data: {
      search: searchTerms,
    },
    type: "GET",
    dataType: "json",
  })
  .done(function( json ) {
    // Handle returned results.
    // Clear the existing search list
    $(".list").empty();
    if (json.length === 0) {
      $("#notification-area").addClass('error').text("No Results Found");
    }
    else {
      $("#notification-area").removeClass('error').text("");
      $.each(json, function ( key, song) {
        $(".list").append( "<li class=song><span class=artist>" + song.artist + "</span><span class=name>" + song.name + "</span></li>" );
      });
    }
  });
}

// Poll the search box.
var thread = null;
$('#search').keyup(function() {
  clearTimeout(thread);
  var $this = $(this); 
  thread = setTimeout(function(){basicSearch($this.val());}, 1000);
});
