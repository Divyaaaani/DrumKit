
// code for detecting button pressed
var numOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfBtn; i++) {
  // adds a click event listner to each drum btn
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML.toLowerCase();
    // to convert all texts itno lowercase
    // this.innerHTML → gets the text written inside the button (like D, I, V, etc.)

    //make sound
    makeSound(btnInnerHTML); // → plays the correct sound.
    buttonAnimation(btnInnerHTML); //→ adds animation effect.
  });
}

// code for detecting keyboard press
document.addEventListener("keydown", function (event) {
  //keydown = funxtion any key pressed
  makeSound(event.key); // → plays sound.
  buttonAnimation(event.key); // → adds animation.

  //event.key → returns the actual key pressed (d, i, v, etc.).
});

// palying th sound
function makeSound(key) {
  // using switch case
  switch (key) {
    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "i":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "v":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "y":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "n":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "e":
      var tom4 = new Audio("sounds/crash.mp3");
      tom4.play();
      break;

    default:
      // console.log(btnInnerHTML); change this to
      console.log(key);
  }
}



// button animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
