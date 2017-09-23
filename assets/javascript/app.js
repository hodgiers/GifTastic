

// Create an array of strings, each one related to a topic that interests me
// Save the array to a variable called 'topics'

var topics = ["hack", "raspberrypi", "wifi", "3dprinting"];


//Take the topics in the array and create buttons in the HTML
	//Consider using a loop that appends a button for each string in the array
//Taking 'topics array' looping through it and creating individual buttons from each item
function createButtons() {
for (var i = 0; i < topics.length; i++) {

  var btnLabel = topics[i];
  //console.log(btnLabel);
  var button = document.createElement("BUTTON");
  button.id = 'btn' + btnLabel;
  //console.log(button.id);
  var buttonItems = $("#button.id").addClass("btn btn-default").addClass("button");
  console.log(button.id);
  //$("#buttons").prepend("<br><hr>" + button.id);

}}

createButtons()


//When user clicks a button, page should grab 10 static, non-animated gif images from the 
//Giphy api and place them on the page.

//$("button").click

//When user clicks one of the still GIPHY images, the GIF should animate.
//If user clicks again, the animation should stop.

//Display rating under every GIF (rating provided by API)

//Include form on page that takes user input box and adds it to the topics array.
//Then make a function call that adds each topic as a button option.
//.push array method used here

