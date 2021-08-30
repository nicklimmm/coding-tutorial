/* 
jQuery -> a fast and concise JS library
       -> simplifies HTML document traversing, event handling, animating, AJAX interactions

How to use jQuery -> install locally, or
                  -> CDN (using script tag in HTML) -> preferred choice
*/

// Selector -> $("selector")
$("#title").css("background-color", "yellow");

// Accessing attributes (.attr(name))
console.log(
  '$("#changing-img").attr("src") :>> ',
  $("#changing-img").attr("src")
);

// Modify attributes (.attr(name, value))
$("#changing-img").attr("src", "images/dog.jpeg");
$("#changing-img").attr("alt", "dog");

// Remove attributes (.removeAttr(name))
$("#changing-img").removeAttr("alt");

// Add classes to elements (.addClass(classname))
$("#O").addClass("blink");

// Check if class is present in the element (.hasClass(classname))
console.log('$("#O").hasClass("blink") :>> ', $("#O").hasClass("blink"));

// Toggle class (.toggleClass(classname))
// -> adds the specified class if it is not present, removes it if present

/* 
Mappings (jQuery -> Vanilla JS)
.html() -> .innerHTML (get)
.html(val) -> .innerHTML (set)
.text() -> .innerText (get)
.text(val) -> .innerText (set)
.val() -> .value (get)
.val(val) -> .value (set)
*/

// Find elements by index (.eq(index))
$("li").eq(2).css("color", "red");

// Filter elements (.filter(selector))
console.log('$("li").filter(".reg") :>> ', $("li").filter(".reg"));

// Locating descendant elements (.find(selector))
$("div").find("p").addClass("selected");

/* 
Other filter methods
.filter(fn) -> removes all elements that do not match the specified function
.is(selector) -> returns true if at least one element fits the given selector
.map(fn) -> translates a set of elements into another set of values
.not(selector) -> removes elements matching the selector
.slice(start, [end]) -> selects a subset of the matched elements
*/

/* 
Other traversing methods (https://api.jquery.com/category/traversing/tree-traversal/)
.parent([selector]) -> get all unique direct parent of each element
.children([selector]) -> get all unique immediate children of each element
.siblings([selector]) -> get all unique siblings of each element
*/

// Apply CSS Properties (.css(property, value))
$("#mini-title").css("background-color", "#ee4201");

// Add multiple CSS Properties (.css({prop1: value1, prop2: value2, ...}))
$("#mini-title").css({ color: "white", "font-size": "40px" });

// Set element width (.width(val)) and height (.height(val))
$("#mini-title").width(200).height(400);

// Get element width (.width()) and height (.height())

// Replace elements (.replaceWith(content))
$(".card > .address").replaceWith("<p>Hacked</p>");

// Remove elements (.remove([expr]) -> remove all matched elements or .empty() -> remove all child nodes)
$(".card > .intro").remove();

// Insert elements after (.after(content)) or before (.before(content))
$(".card > .mobile").before("<p>vvvv This is my number</p>");

/* 
Other DOM Manipulation Methods (https://api.jquery.com/category/manipulation/)
.append(content) -> append content to the inside of every matched element
.prepend(content)
.appendTo(selector) -> append all of the matched elements to another set of elements
.prependTo(selector)
.clone(bool) -> clone elements with all their event handlers, and select the clones
.clone() -> similar with .clone(bool), but without their event handlers
*/
