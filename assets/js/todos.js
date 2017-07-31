// (FEATURE #1) CHECK OFF specific todos by clicking

// (1) SELECT all the lis
// (2) into a click
// (3) then run callback function, use .css to turn color gray w/ text decoration property (*use the keyword "this" bc only change when clicked)
// (4) now ability to click and change back to black

// $("li").click(function() {
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// });

// VERSION 2, is by using an object ================

// $("li").click(function() {
// 	// if li is gray then,
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		// turn it black and remove line-through
// 				// turn to gray
// 		$(this).css({
// 			color: "black",
// 			// notice the camel-case for property names
// 			textDecoration: "none"
// 		});
// 	}
// 	// else
// 	else {
// 		// turn to gray
// 		$(this).css({
// 			color: "gray",
// 			// notice the camel-case for property names
// 			textDecoration: "line-through"
// 		});
// 	}

// });

// an easier way than just coding it all in JS, is by doing it in CSS with a class called .completed

// VERSION 3, using class .completed ==============

// (1) so when we click on the li, we're gonna toggle the class on the line that we clicked on ".completed"
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// ===================================================

// (FEATURE #2) THE X BUTTON to remove entire todo (fade out and delete)

// listen for any clicks on the "X"s to delete todo
// (1) SELECT all spans
// (2) listen for click
// (3) callback function
// (4) add "event" object & "event.stopPropagation" to prevent event bubbling up to parent elements
// (5) when span is clicked, remove that entire li
// (6) fadeOut, use callback function to run remove after fadeOut finishes with 500 milsec to start
$("ul").on("click", "span", function(event) {
	// use "this" and "parent", in order to remove li
	$(this).parent().fadeOut(500, function() {
		// when it's done
		$(this).remove();
	});
	event.stopPropagation();
});

// ===================================================

// (FEATURE #3) CREATION OF NEW TODOS

// (1) Add listener to text inputtype in todo and hit enter to submit (can use ".keypress()" or ".on()")
// (2) after submit, add new todo to list
// (3) Us ".append()" metthod to remove todo on list, checked off or delete
// (*) .append() takes a string of HTML and appends to whatever we selected
// (*) .on() is used rather than .click()

// SELECT all "input text" and callback function run only when only any keypress
$("input[type='text']").keypress(function(event){ 
	// check for "enter" ky, which is 13
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = ($(this).val());
		// this acts as a "setter"
		$(this).val("");
		// create new li and add to ul (to do this, we need to use a new method called ".append()"
		// then clear the input, so the text goes away
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	};
});

// ===================================================

// (FEATURE #4) TOGGLE the Plus sign to fade form section of input

// (1) SELECT the icon
// (2) listen for "click"
// (3) pass in callback function to execute the selected "input" to fadeOut/In

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});











