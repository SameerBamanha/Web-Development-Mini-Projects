// For checking purposes
//alert("Hi!");

//Variable to store length of drum
var len = document.querySelectorAll(".drum").length;



// Detecting which button is pressed by mouse
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var sound = new Audio('sounds/crash.mp3');
    // sound.play();
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    //To Animate
    FlashKey(buttonInnerHtml);
  });
}



// To check which key is pressed
document.addEventListener("keypress", function(event) {
  // Event will return all info about key pressed and we will choose key from it.
  makeSound(event.key);
  //To Animate
  FlashKey(event.key);
});



// Common function that can be passed
function makeSound(key) {

  switch (key) {
    case "w":
      var sound = new Audio('sounds/crash.mp3');
      sound.play();
      break;

    case "a":
      var sound = new Audio('sounds/kick-bass.mp3');
      sound.play();
      break;

    case "s":
      var sound = new Audio('sounds/snare.mp3');
      sound.play();
      break;

    case "j":
      var sound = new Audio('sounds/tom-1.mp3');
      sound.play();
      break;

    case "d":
      var sound = new Audio('sounds/tom-2.mp3');
      sound.play();
      break;

    case "j":
      var sound = new Audio('sounds/tom-3.mp3');
      sound.play();
      break;

    case "k":
      var sound = new Audio('sounds/tom-4.mp3');
      sound.play();
      break;

    default:
  }
}


//Animation
function FlashKey(CurrentKey){
  //Choosing current key
  var active = document.querySelector("."+CurrentKey);

  //Activating
  active.classList.add("pressed");

  //Deactivating after 100ms
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
