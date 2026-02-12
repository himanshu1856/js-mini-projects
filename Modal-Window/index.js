let btnModal1 = document.querySelectorAll(".open-btn");
let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".modal button")

function hideIt(){
    modal.classList.add("hidden");
}

closeBtn.addEventListener("click", hideIt);

document.addEventListener("keydown", function (event) {
  if (event.key === 'Escape') hideIt();
});


for (const btn of btnModal1) {
  btn.addEventListener("click", function () {
    if (modal.classList.length > 1) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  });
}
