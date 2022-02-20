const cards = document.querySelectorAll(".card");
console.log(cards);

var firstCard = null;
var secondCard = null;
var flipped = false;
var score = 0;

const start = () => {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });

  for (const card of cards) {
    card.classList.add("flip");
    setTimeout(() => {
      card.classList.remove("flip");
    }, 2000);
  }
};

const reset = function () {
  console.log("reseted");
  firstCard = null;
  secondCard = null;
  flipped = false;
};

const point = () => {
  if (score === 1) {
    const container = document.querySelector(".container");
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var text = document.createTextNode("congratulation");
    h1.appendChild(text);
    div.appendChild(h1);
    div.classList.add("success");
    container.appendChild(div);
    console.log(container);
  }
};

const checkSuccess = function () {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    firstCard.removeEvenListner;
    secondCard.removeEvenListner;
    score++;
    point();
    reset();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
    }, 800);
    setTimeout(() => {
      reset();
    }, 1000);
  }
};

const flip = function () {
  // console.log(this);
  this.classList.add("flip");

  if (!flipped) {
    flipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    // console.log(firstCard);
    // console.log(secondCard);
    checkSuccess();
  }
};

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

start();
