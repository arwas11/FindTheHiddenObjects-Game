let hiddenDiv = document.querySelector(".btns-hidden");

let hiddenBtns = hiddenDiv.querySelectorAll("button");

let foundDiv = document.querySelector(".divs-found");

let foundDivs = foundDiv.querySelectorAll("div");

let messageBtn = document.querySelector(".message-btn");

let endMessage = document.querySelector(".end-content")

let currentObj = 11

hiddenBtns.forEach((objBtn) => { 
countdown(5);
objBtn.addEventListener(
    "click",
    () => {
      //make a switch statement
      if (objBtn.textContent === "Eggs") {
        document.querySelector("#eggs-found.cross-eggs").style.color = "black";
        timedMessage(objBtn.textContent);
        currentObj ++
      }
      if (objBtn.textContent === "Hedgehog") {
        document.querySelector("#hedgehog-found.cross-hedgehog").style.color =
          "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Cricket") {
        document.querySelector("#cricket-found.cross-cricket").style.color =
          "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Flower") {
        document.querySelector("#flower-found.cross-flower").style.color =
          "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Dragonfly") {
        document.querySelector("#dragonfly-found.cross-dragonfly").style.color =
          "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Fish") {
        document.querySelector("#fish-found.cross-fish").style.color = "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Spider") {
        document.querySelector("#spider-found.cross-spider").style.color =
          "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Worm") {
        document.querySelector("#worm-found.cross-worm").style.color = "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Bird") {
        document.querySelector("#bird-found.cross-bird").style.color = "black";
        timedMessage(objBtn.textContent);
        return;
      }
      if (objBtn.textContent === "Grasshopper") {
        document.querySelector(
          "#grasshopper-found.cross-grasshopper"
        ).style.color = "black";
        timedMessage(objBtn.textContent);
        return;

      }
      winLose()
    },
    { once: true }
    
  );
   
 

});


function timedMessage(textContent) {
  messageBtn.style.display = "block"
  let foundMsg =
    (messageBtn.textContent = `
       You 
      Found 
       The 
      Hidden 
    ${textContent}!`);
  console.log(foundMsg);
  setTimeout(() => {
    //   objBtn.removeEventListener('click', ())
    messageBtn.style.display = "none";
    return;
  }, 5000);

}


function countdown(minutes) {
  var seconds = 60;
  var mins = minutes
  function tick() {
      var time = document.querySelector("#time");
      var current_minutes = mins-1
      seconds--;
      time.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      } else {
          if(mins > 1){
              countdown(mins-1);           
          }
      }
  }
  tick();
}

countdown(5); 
if (countdown === "0:00"){
  endMessage.style.display = "block"
} else {

}
// currentTotal <= hiddenBtns.length + 1
// function winLose(){
//   if (currentTotal <= hiddenBtns.length){
//     document.getElementById("win-lose").innerText = "Nice Job!"
//     document.getElementById("#if-found-all").innerText = "You found all of the 10 hidden objects."
//     endMessage.style.display = "block"
//   } 
  
//   if (document.getElementById("#time").textContent === "0:00"){
//     document.getElementById("win-lose").innerText = "Time's Up!"
//     document.getElementById("#if-found-all").innerText = "______"
//     endMessage.style.display = "block"
//   }
// }