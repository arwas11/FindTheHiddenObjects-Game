let hiddenDiv = document.querySelector(".btns-hidden");
// console.dir(hiddenDiv);

// let eggHid = hiddenDiv.hasAttribute("eggs-hidden");

let hiddenBtns = hiddenDiv.querySelectorAll("button");

let foundDiv = document.querySelector(".divs-found")

let foundDivs = foundDiv.querySelectorAll('div')
// console.dir(foundDivs)


// let crossEggs = foundDiv.querySelector(".cross-eggs")

// foundDivs.style.display = "none";


let messageBtn = document.querySelector(".message-btn");





hiddenBtns.forEach((objBtn) => {
  objBtn.addEventListener(
    "click",
    () => {
      if (objBtn.textContent === "eggs"){
        document.querySelector("#eggs-found.cross-eggs").style.color = "black";
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "hedgehog") {
        document.querySelector("#hedgehog-found.cross-hedgehog").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "cricket") {
        document.querySelector("#cricket-found.cross-cricket").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "flower") {
        document.querySelector("#flower-found.cross-flower").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "dragonfly") {
        document.querySelector("#dragonfly-found.cross-dragonfly").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "fish") {
        document.querySelector("#fish-found.cross-fish").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "spider") {
        document.querySelector("#spider-found.cross-spider").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "worm") {
        document.querySelector("#worm-found.cross-worm").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "bird") {
        document.querySelector("#bird-found.cross-bird").style.color = "black"
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        return
      } else if (objBtn.textContent === "grasshopper") {
        console.log(
          (messageBtn.textContent = `You found the hidden ${objBtn.textContent}!`)
        );
        document.querySelector("#grasshopper-found.cross-grasshopper").style.color = "black"
        return
      }

      // setTimeout(() =>{
      //   objBtn.removeEventListener('click', ())
      // } )
      messageBtn.addEventListener("click", (e) => {
        messageBtn.style.color = "black";
      });

      
      //   return
    },
    { once: true }
  );


});

let currentObjBtnIndex = 0;

// whilt hiddenBtns.length < currentObjBtnIndex){
//     console.log(currentObjBtnIndex);
//     // currentObjBtnIndex.addEventListener("click", () => {
//     //     console.log(
//     //       (messageBtn.textContent = `You found the ${objBtn.textContent}!`)
//     //     );
//     //      messageBtn.addEventListener('click', e =>{
//     //         messageBtn.style.display = "none";
//     //         foundObj t hiddenBtns.pop()
//     //         console.log(foundObj);
//     //       })

//     //       return
//     //   });
// }
