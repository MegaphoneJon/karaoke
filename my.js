/*
 $.get( "search.php?search=Daddy", function( response ) {
  console.log( response );
});
*/
$.ajax({
  url: "search.php",
  data: {
    search: "Gasolina"
  },
  type: "GET",
  dataType: "json",
})
.done(function( json ) {
  $(".list").after(json);
  temp = json;
  $.each(json, function ( key, song) {
    $(".list").append( "<li class=song>" );
    $(".list").append( "<span class=artist>" + song.artist + "</span>" );
    $(".list").append( "<span class=name>" + song.name + "</span>" );
    $(".list").append( "</li>" );

    console.log(song.artist);
    console.log(song.name);
  });
});
