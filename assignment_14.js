console.log("DOM manipulations");

//1. Write a div that has a functioning counter inside that increments and decrements 1  or 5 value buttons

const counter = document.getElementById("counter");
const buttons = document.getElementById("buttons");

let sum = 0;

buttons.addEventListener("click", (event) => {
  sum += event.target.innerText;
  counter.innerText = eval(sum);
});

//2. Write code that displays the event.keyCode and event.code every time a key is pressed

let press = document.getElementById("press");

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  console.log(event.keyCode);
  console.log(event.code);
  press.innerHTML = `
    <div class="key">
    ${event.key === " " ? "Space" : event.key}
   <small>event.key</small>
    </div>
    <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>
    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>
    `;
});

//3. Write a div that has a like button. When you click for the first time it will like , if you click again it will take the like back

// const likeBtn = document.getElementById("like");

// likeBtn.addEventListener("click", () => {
//   likeBtn.classList.toggle("liked");
//   if (likeBtn.classList.contains("liked")) {
//     likeBtn.classList.remove("liked");
//   } else {
//     likeBtn.classList.add("liked");
//   }
// });

///////////////////////////////////////////////////////////////////////////
const likeBtn = document.getElementById("like");
let count = 0;
likeBtn.addEventListener("click", () => {
  count++;
  if (count === 1) {
    likeBtn.classList.add("liked");
  } else {
    likeBtn.classList.remove("liked");
    count = 0;
  }
});

// ! 4. Write a div that appears when you scroll down to it's starting point.

const box = document.querySelector(".box");

function checkBox() {
  const pageBottom = window.innerHeight;
  const boxTop = box.getBoundingClientRect().top;
  console.log(pageBottom);
  console.log(boxTop);
  if (boxTop < pageBottom) {
    box.classList.add("show");
  } else {
    box.classList.remove("show");
  }
}

window.addEventListener("scroll", checkBox);
checkBox();
