// Events -> click, mouse up, etc.
$("#title").on("dblclick", () => {
  alert("Hello");
  $("#title").html("Hello!");
});

/* 
Event Methods 
- preventDefault()
- off() -> removes a bound live event
- ready() -> binds a function to be executed whenever the DOM is ready
*/
$("#submit").on("click", (e) => {
  // Stops submission and refreshing
  e.preventDefault();
  console.log("e :>> ", e);
});

// AJAX (Asynchronous JavaScript and XML) -> loads data from a server without a page refresh

// .getJSON( url [, data ] [, success ] )
$.getJSON("https://baconipsum.com/api/?type=meat-and-filler", (data) => {
  data.forEach((element) => {
    $("#api").append(`<p>${element}</p>`);
  });
});

// Effects

/* 
.show( duration [, callback])
.hide( duration [, callback])
.fadeIn( duration [, callback])
.fadeOut( duration [, callback])
.slideDown( duration [, callback])
.slideUp( duration [, callback])
.toggle( [duration] [, callback])
*/
$("#hidden").hide(2000);
$("#slidedown").slideDown(2000);

// (https://jqueryui.com/)
// JQuery UI Interactions -> drag, drop, resize, etc.

$("#box").draggable();
$("#droppable").droppable({
  drop: (e, ui) => {
    $("#droppable").html("Dropped!");
  },
});

// JQuery Widgets -> accordions, autocomplete, menu, etc.
