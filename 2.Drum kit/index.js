
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

function handleClick(){
var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);  //this also gives you the inner HTML of the button which is pressed i.e; say you click on w and it will give w
addAnimation(buttonInnerHTML);
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);   //event.key will give the key which is pressed and hence it is the same thing as click on the desired button
  addAnimation(event.key);
});

function makeSound(key){
  switch(key){
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "l":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    default:
    console.log(buttonInnerHTML);
  }

}

function addAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
