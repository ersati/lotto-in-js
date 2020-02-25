const resultOne = [];
const resultTwo = [];
const section = document.querySelector(".numbers");
const drawOne = function() {
  if (resultOne.length === 7) return;

  //create element div
  const div = document.createElement("div");
  div.setAttribute("class", "div");
  const scoreDraw = Math.floor(Math.random() * 49 + 1);

  for (let i = 0; i < resultOne.length; i++) {
    if (scoreDraw === resultOne[i]) {
      console.log("same number");
      return drawOne();
    }
  }
  div.textContent = scoreDraw;

  section.appendChild(div);

  //add score to a array
  resultOne.push(scoreDraw);
};

const drawTwo = function() {
  if (resultTwo.length === 2) return;

  //create element div
  const div = document.createElement("div");
  div.setAttribute("class", "circle");
  const scoreDraw = Math.floor(Math.random() * 11 + 1);

  for (let i = 0; i < resultTwo.length; i++) {
    if (scoreDraw === resultTwo[i]) {
      console.log("same number");
      return drawTwo();
    }
  }
  div.textContent = scoreDraw;

  section.appendChild(div);

  //add to array
  resultTwo.push(scoreDraw);
};

//download buttons
const buttonone = document.querySelector(".buttonone");
const buttontwo = document.querySelector(".buttontwo");
//nasluchiwanie na zdarzenie w tym wypadku klika
buttonone.addEventListener("click", drawOne);
buttontwo.addEventListener("click", drawTwo);
