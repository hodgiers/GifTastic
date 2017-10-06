

// Create an array of strings, each one related to a topic that interests me
// Save the array to a variable called 'topics'

var topics = ["hack", "raspberrypi", "wifi", "3dprinting"];
var secretKey = config.giphyKey;


//Take the topics in the array and create buttons in the HTML
	//Consider using a loop that appends a button for each string in the array
//Taking 'topics array' looping through it and creating individual buttons from each item

topics.forEach(function(item) {
    var gifButton = $("<button>").attr( {'class': 'carButton btn-large', 'data-input': item}).html(item);
    gifButton.appendTo("#buttons");
    console.log(item);

});


//Begin: Take new input
$('#moreTopics').click(function() {
  event.preventDefault();

  var topicAdd = $('#topicAdd').val();
  var inputGifButton = $('<button>').attr({'class' : 'techButton btn-large', 'data-input': topicAdd}).html(newCar);
  inputGifButton.appendTo(".button-field");
  console.log(topicAdd);
//End: Take new input

// clear input
  $("#topicAdd").val("");

});

$(document.body).on("click", ".techButton", function() {
    var a = $(this).attr('data-input');
    apiCall(a);
});

//When user clicks a button, page should grab 10 static, non-animated gif images from the
//Giphy api and place them on the page.

function apiCall(a) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + secretKey + "&q="+ a +"&limit=10&rating=G"  ;

    console.log(queryURL);

    $.ajax({
        url: queryURL ,
        method: 'GET'
    }).done(function(response) {
        console.log(response)
        var data = response.data;
        console.log(data);
        $(".gif-field").empty();











//function createButtons(techTop) {
//for (var i = 0; i < topics.length; i++) {
//	var gifButton = $("<button>").attr({'class': 'carButton btn-large', 'data-input': techTop}).html(techTop);
//	gifButton.appendTo("#buttons");
//	console.log(techTop[i]);
//}};

//createButtons();

  //var btnLabel = topics[i];
  //console.log(btnLabel);
  //var button = document.createElement("BUTTON");
  //button.id = 'btn' + btnLabel;
  //console.log(button.id);
  //var buttonItems = $("#button.id").addClass("btn btn-default").addClass("button");
  //console.log(button.id);
  //$("#buttons").prepend("<br><hr>" + button.id);



//createButtons()




//$("button").click

//When user clicks one of the still GIPHY images, the GIF should animate.
//If user clicks again, the animation should stop.

//Display rating under every GIF (rating provided by API)

//Include form on page that takes user input box and adds it to the topics array.
//Then make a function call that adds each topic as a button option.
//.push array method used here
