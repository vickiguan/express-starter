alert('Welcome to my stuff page!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello World');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#disappear').hide();
});

$('#reappear').click(function() {
  $('#disappear').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#tickleMePink').click(function() {
  $('#tickled_text').css('color','pink');
});


// Problem 4 (Greet Me) -----------------------------------------------------
$('#greetMe').click(function() {
  alert('Hey '$('#my_name').val()''');
});

