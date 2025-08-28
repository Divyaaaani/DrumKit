document.querySelector("button").addEventListener("click", handleClick); //no () to function to avoid calling the function before clicking on it.
function handleClick() {
  alert("I got clicked!");
}

//or by anonymous functions
var numOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clickeddd! ");
  });
}
