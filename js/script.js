let objectsDiv = document.querySelector(".btns");
// console.dir(objectsDiv);

let eggHid = objectsDiv.hasAttribute("eggs-hidden");

let objectsBtns = objectsDiv.querySelectorAll("button");

let messageBox = document.querySelector(".message");

objectsBtns.forEach((objBtn) => {
  objBtn.addEventListener("click", () => {
    console.log(
      (messageBox.textContent = `You found the ${objBtn.textContent}!`)
    );
  });
});
