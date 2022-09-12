//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");

h1.onmouseover = function () {
  h1.style.color = "red";
};

h1.onmouseout = () => {
  h1.style.color = "black";
};

h1.addEventListener(`click`, () => {
  alert("h1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener(`click`, function () {
  const input = document.querySelector("#input");
  if (!input.value) {
    alert("please enter item ulan");
  } else {
    alert(`${input.value} entered`);
  }
  input.value = "";
});

//* EXAMPLE-3
//* -------------------------------------------------

const list = document.querySelectorAll(".list");

list.forEach((li) => {
  li.style.transition = "all 0.5s";

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(20px)";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translateX(-20px)";
  };
});
