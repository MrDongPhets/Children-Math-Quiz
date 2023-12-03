document.getElementById("backButton").addEventListener("click", function () {
  // Navigate to another page when the "BACK" button is clicked
  window.location.href = "age.html";
});

document.getElementById("addition").addEventListener("click", function () {
  addtionPopup();
  closePopup();
  closeLabel();
  openLabel();
});

document.getElementById("subtraction").addEventListener("click", function () {
  subtractionPopup();
  closePopup();
  closeLabel();
  openLabel();
});

document
  .getElementById("multiplication")
  .addEventListener("click", function () {
    multiplicationPopup();
    closePopup();
    closeLabel();
    openLabel();
  });

document.getElementById("division").addEventListener("click", function () {
  divisionPopup();
  closePopup();
  closeLabel();
  openLabel();
});

function addtionPopup() {
  document.getElementById("container1").style.display = "block";
}

function subtractionPopup() {
  document.getElementById("container2").style.display = "block";
}

function multiplicationPopup() {
  document.getElementById("container3").style.display = "block";
}

function divisionPopup() {
  document.getElementById("container4").style.display = "block";
}

function openLabel() {
  document.getElementById("backDdesign1").style.display = "block";
}

function closeLabel() {
  document.getElementById("backDdesign").style.display = "none";
}

function closePopup() {
  document.getElementById("container").style.display = "none";
}

//quiz function in addition
document.getElementById("easy").addEventListener("click", function () {
  openPopup1();
});

document.getElementById("medium").addEventListener("click", function () {
  openPopup2();
});

document.getElementById("difficult").addEventListener("click", function () {
  openPopup3();
});

function openPopup1() {
  document.getElementById("quiz").style.display = "block";
}

function openPopup2() {
  document.getElementById("quiz1").style.display = "block";
}

function openPopup3() {
  document.getElementById("quiz2").style.display = "block";
}

//quiz function in subtraction
document.getElementById("easy2").addEventListener("click", function () {
  openPopup4();
});

document.getElementById("medium2").addEventListener("click", function () {
  openPopup5();
});

document.getElementById("difficult2").addEventListener("click", function () {
  openPopup6();
});

function openPopup4() {
  document.getElementById("quiz3").style.display = "block";
}

function openPopup5() {
  document.getElementById("quiz4").style.display = "block";
}

function openPopup6() {
  document.getElementById("quiz5").style.display = "block";
}

//quiz function in multiplication
document.getElementById("easy3").addEventListener("click", function () {
  openPopup7();
});

document.getElementById("medium3").addEventListener("click", function () {
  openPopup8();
});

document.getElementById("difficult3").addEventListener("click", function () {
  openPopup9();
});

function openPopup7() {
  document.getElementById("quiz6").style.display = "block";
}

function openPopup8() {
  document.getElementById("quiz7").style.display = "block";
}

function openPopup9() {
  document.getElementById("quiz8").style.display = "block";
}

//quiz function in division
document.getElementById("easy4").addEventListener("click", function () {
  openPopup10();
});

document.getElementById("medium4").addEventListener("click", function () {
  openPopup11();
});

document.getElementById("difficult4").addEventListener("click", function () {
  openPopup12();
});

function openPopup10() {
  document.getElementById("quiz9").style.display = "block";
}

function openPopup11() {
  document.getElementById("quiz10").style.display = "block";
}

function openPopup12() {
  document.getElementById("quiz11").style.display = "block";
}

//EASY QUIZ ADDITION
const quizData = [
  {
    question:
      "Emily has 2 apples. She picks 3 more apples from the tree. How many apples does Emily have now?",
    a: "A. 3",
    b: "B. 4",
    c: "C. 5",
    d: "D. 6",
    correct: "c",
  },
  {
    question:
      "There are 4 toy cars in the box. If you add 2 more toy cars, how many toy cars are there in total?",
    a: "A. 4",
    b: "B. 5",
    c: "C. 6",
    d: "D. 7",
    correct: "c",
  },
  {
    question:
      "Tom has 1 red ball and 4 blue balls. How many balls does Tom have altogether?",
    a: "A. 2",
    b: "B. 3",
    c: "C. 4",
    d: "D. 5",
    correct: "d",
  },
  {
    question:
      "If you have 3 cookies and your friend gives you 2 more cookies, how many cookies do you have?",
    a: "A. 3",
    b: "B. 4",
    c: "C. 5",
    d: "D. 6",
    correct: "c",
  },
  {
    question:
      "There are 2 birds on a branch. 3 more birds join them. How many birds are on the branch now?",
    a: "A. 3",
    b: "B. 4",
    c: "C. 5",
    d: "D. 6",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const backBtn = document.getElementById("back");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answerd = getSelected();
  if (answerd) {
    if (answerd === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showQuizResultPopup();
    }
  }
});

function showQuizResultPopup() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score === quizData.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score == 3) {
    resultMessage.textContent = `Very good! You answered ${score}/${quizData.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time! ${score}/${quizData.length}  You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//MEDIUM QUIZ ADDITION
const quizData1 = [
  {
    question: "What is the sum of 34 and 27?",
    a: "A. 51",
    b: "B. 60",
    c: "C. 61",
    d: "D. 71",
    correct: "a1",
  },
  {
    question:
      "If you have 56 marbles and your friend gives you 23 more, how many marbles do you have in total?",
    a: "A. 67",
    b: "B. 78",
    c: "C. 79",
    d: "D. 89",
    correct: "c1",
  },
  {
    question: "Add 45 + 18.",
    a: "A. 53",
    b: "B. 58",
    c: "C. 63",
    d: "D. 72",
    correct: "b1",
  },
  {
    question:
      "You have 72 stickers, and then you get 28 more from a friend. How many stickers do you have now?",
    a: "A. 90",
    b: "B. 94",
    c: "C. 100",
    d: "D. 110",
    correct: "b1",
  },
  {
    question: "Calculate 63 + 29.",
    a: "A. 82",
    b: "B. 92",
    c: "C. 102",
    d: "D. 112",
    correct: "b1",
  },
];
const quiz1 = document.getElementById("quiz1");
const answerEls1 = document.querySelectorAll(".answer1");
const questionEl1 = document.getElementById("question1");
const a_text1 = document.getElementById("a_text1");
const b_text1 = document.getElementById("b_text1");
const c_text1 = document.getElementById("c_text1");
const d_text1 = document.getElementById("d_text1");
const submitBtn1 = document.getElementById("submit1");
const backBtn1 = document.getElementById("back1");
let currentQuiz1 = 0;
let score1 = 0;
loadQuiz1();
function loadQuiz1() {
  deselectAnswers1();
  const currentQuizData1 = quizData1[currentQuiz1];
  questionEl1.innerText = currentQuizData1.question;
  a_text1.innerText = currentQuizData1.a;
  b_text1.innerText = currentQuizData1.b;
  c_text1.innerText = currentQuizData1.c;
  d_text1.innerText = currentQuizData1.d;
}
function deselectAnswers1() {
  answerEls1.forEach((answerEl1) => (answerEl1.checked = false));
}
function getSelected1() {
  let answer1;
  answerEls1.forEach((answerEl1) => {
    if (answerEl1.checked) {
      answer1 = answerEl1.id;
    }
  });
  return answer1;
}
submitBtn1.addEventListener("click", () => {
  const answerd1 = getSelected1();
  if (answerd1) {
    if (answerd1 === quizData1[currentQuiz1].correct) {
      score1++;
    }
    currentQuiz1++;
    if (currentQuiz1 < quizData1.length) {
      loadQuiz1();
    } else {
      showQuizResultPopup1();
    }
  }
});

function showQuizResultPopup1() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score1 === quizData1.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score1 == 3) {
    resultMessage.textContent = `Very good! You answered ${score1}/${quizData1.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time! ${score1}/${quizData1.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn1.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//DIFFICULT QUIZ ADDITION

const quizData2 = [
  {
    question: "Calculate 45 + 68.",
    a: "A. 93",
    b: "B. 113",
    c: "C. 123",
    d: "D. 158",
    correct: "b2",
  },
  {
    question:
      "If you have 127 books and you buy 34 more, how many books do you have now?",
    a: "A. 141",
    b: "B. 161",
    c: "C. 172",
    d: "D. 194",
    correct: "c2",
  },
  {
    question: "Add 156 + 89.",
    a: "A. 215",
    b: "B. 245",
    c: "C. 265",
    d: "D. 312",
    correct: "a2",
  },
  {
    question:
      "You have 238 marbles, and your friend gives you 47 more. How many marbles do you have in total?",
    a: "A. 275",
    b: "B. 285",
    c: "C. 305",
    d: "D. 332",
    correct: "a2",
  },
  {
    question: "Calculate 312 + 147.",
    a: "A. 429",
    b: "B. 459",
    c: "C. 512",
    d: "D. 649",
    correct: "a2",
  },
];
const quiz2 = document.getElementById("quiz2");
const answerEls2 = document.querySelectorAll(".answer2");
const questionEl2 = document.getElementById("question2");
const a_text2 = document.getElementById("a_text2");
const b_text2 = document.getElementById("b_text2");
const c_text2 = document.getElementById("c_text2");
const d_text2 = document.getElementById("d_text2");
const submitBtn2 = document.getElementById("submit2");
const backBtn2 = document.getElementById("back2");
let currentQuiz2 = 0;
let score2 = 0;
loadQuiz2();
function loadQuiz2() {
  deselectAnswers2();
  const currentQuizData2 = quizData2[currentQuiz2];
  questionEl2.innerText = currentQuizData2.question;
  a_text2.innerText = currentQuizData2.a;
  b_text2.innerText = currentQuizData2.b;
  c_text2.innerText = currentQuizData2.c;
  d_text2.innerText = currentQuizData2.d;
}
function deselectAnswers2() {
  answerEls2.forEach((answerEl2) => (answerEl2.checked = false));
}
function getSelected2() {
  let answer2;
  answerEls2.forEach((answerEl2) => {
    if (answerEl2.checked) {
      answer2 = answerEl2.id;
    }
  });
  return answer2;
}
submitBtn2.addEventListener("click", () => {
  const answerd2 = getSelected2();
  if (answerd2) {
    if (answerd2 === quizData2[currentQuiz2].correct) {
      score2++;
    }
    currentQuiz2++;
    if (currentQuiz2 < quizData2.length) {
      loadQuiz2();
    } else {
      showQuizResultPopup2();
    }
  }
});

function showQuizResultPopup2() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score2 === quizData2.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score2 == 3) {
    resultMessage.textContent = `Very good! You answered ${score2}/${quizData2.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time! ${score2}/${quizData2.length}  You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn2.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//EASY QUIZ SUBTRACTION

const quizData3 = [
  {
    question:
      "Sarah has 5 candies. She eats 2 candies. How many candies does Sarah have now?",
    a: "A. 2",
    b: "B. 3",
    c: "C. 4",
    d: "D. 5",
    correct: "c3",
  },
  {
    question:
      "You have 4 cookies. If you eat 1 cookie, how many cookies do you have left?",
    a: "A. 1",
    b: "B. 2",
    c: "C. 3",
    d: "D. 4",
    correct: "b3",
  },
  {
    question:
      "Emily has 6 marbles. She gives 2 marbles to her friend. How many marbles does Emily have now?",
    a: "A. 2",
    b: "B. 3",
    c: "C. 4",
    d: "D. 5",
    correct: "c3",
  },
  {
    question:
      "There are 7 balloons. If 3 balloons float away, how many balloons are left?",
    a: "A. 3",
    b: "B. 4",
    c: "C. 5",
    d: "D. 6",
    correct: "b3",
  },
  {
    question:
      "Tom has 8 toy cars. He loses 2 toy cars. How many toy cars does Tom have now?",
    a: "A. 4",
    b: "B. 5",
    c: "C. 6",
    d: "D. 7",
    correct: "c3",
  },
];
const quiz3 = document.getElementById("quiz3");
const answerEls3 = document.querySelectorAll(".answer3");
const questionEl3 = document.getElementById("question3");
const a_text3 = document.getElementById("a_text3");
const b_text3 = document.getElementById("b_text3");
const c_text3 = document.getElementById("c_text3");
const d_text3 = document.getElementById("d_text3");
const submitBtn3 = document.getElementById("submit3");
const backBtn3 = document.getElementById("back3");
let currentQuiz3 = 0;
let score3 = 0;
loadQuiz3();
function loadQuiz3() {
  deselectAnswers3();
  const currentQuizData3 = quizData3[currentQuiz3];
  questionEl3.innerText = currentQuizData3.question;
  a_text3.innerText = currentQuizData3.a;
  b_text3.innerText = currentQuizData3.b;
  c_text3.innerText = currentQuizData3.c;
  d_text3.innerText = currentQuizData3.d;
}
function deselectAnswers3() {
  answerEls3.forEach((answerEl3) => (answerEl3.checked = false));
}
function getSelected3() {
  let answer3;
  answerEls3.forEach((answerEl3) => {
    if (answerEl3.checked) {
      answer3 = answerEl3.id;
    }
  });
  return answer3;
}
submitBtn3.addEventListener("click", () => {
  const answerd3 = getSelected3();
  if (answerd3) {
    if (answerd3 === quizData3[currentQuiz3].correct) {
      score3++;
    }
    currentQuiz3++;
    if (currentQuiz3 < quizData3.length) {
      loadQuiz3();
    } else {
      showQuizResultPopup3();
    }
  }
});

function showQuizResultPopup3() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score3 === quizData3.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score3 == 3) {
    resultMessage.textContent = `Very good! You answered ${score3}/${quizData3.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time! ${score3}/${quizData3.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn3.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//MEDIUM QUIZ SUBTRACTION

const quizData4 = [
  {
    question:
      "If you have 78 cookies and you eat 29 of them, how many cookies do you have left?",
    a: "A. 39",
    b: "B. 49",
    c: "C. 59",
    d: "D. 69",
    correct: "a4",
  },
  {
    question: "Subtract 56 from 89.",
    a: "A. 23",
    b: "B. 33",
    c: "C. 43",
    d: "D. 53",
    correct: "b4",
  },
  {
    question:
      "You have 105 balloons, and you give away 42. How many balloons do you have now?",
    a: "A. 43",
    b: "B. 53",
    c: "C. 63",
    d: "D. 73",
    correct: "c4",
  },
  {
    question: "What is the result of 84 - 37?",
    a: "A. 37",
    b: "B. 47",
    c: "C. 57",
    d: "D. 67",
    correct: "c4",
  },
  {
    question:
      "If you have 63 stickers and your friend takes 18 from you, how many stickers do you have left?",
    a: "A. 45",
    b: "B. 48",
    c: "C. 55",
    d: "D. 61",
    correct: "a4",
  },
];
const quiz4 = document.getElementById("quiz4");
const answerEls4 = document.querySelectorAll(".answer4");
const questionEl4 = document.getElementById("question4");
const a_text4 = document.getElementById("a_text4");
const b_text4 = document.getElementById("b_text4");
const c_text4 = document.getElementById("c_text4");
const d_text4 = document.getElementById("d_text4");
const submitBtn4 = document.getElementById("submit4");
const backBtn4 = document.getElementById("back4");
let currentQuiz4 = 0;
let score4 = 0;
loadQuiz4();
function loadQuiz4() {
  deselectAnswers4();
  const currentQuizData4 = quizData4[currentQuiz4];
  questionEl4.innerText = currentQuizData4.question;
  a_text4.innerText = currentQuizData4.a;
  b_text4.innerText = currentQuizData4.b;
  c_text4.innerText = currentQuizData4.c;
  d_text4.innerText = currentQuizData4.d;
}
function deselectAnswers4() {
  answerEls4.forEach((answerEl4) => (answerEl4.checked = false));
}
function getSelected4() {
  let answer4;
  answerEls4.forEach((answerEl4) => {
    if (answerEl4.checked) {
      answer4 = answerEl4.id;
    }
  });
  return answer4;
}
submitBtn4.addEventListener("click", () => {
  const answerd4 = getSelected4();
  if (answerd4) {
    if (answerd4 === quizData4[currentQuiz4].correct) {
      score4++;
    }
    currentQuiz4++;
    if (currentQuiz4 < quizData4.length) {
      loadQuiz4();
    } else {
      showQuizResultPopup4();
    }
  }
});

function showQuizResultPopup4() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score4 === quizData4.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score4 == 3) {
    resultMessage.textContent = `Very good! You answered ${score4}/${quizData4.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time!  ${score4}/${quizData4.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn4.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//DIFFICULT QUIZ SUBTRACTION

const quizData5 = [
  {
    question: "Subtract 89 from 145.",
    a: "A. 45",
    b: "B. 56",
    c: "C. 67",
    d: "D. 78",
    correct: "b5",
  },
  {
    question:
      "If you have 236 candies and you eat 57 of them, how many candies do you have left?",
    a: "A. 100",
    b: "B. 136",
    c: "C. 179",
    d: "D. 180",
    correct: "c5",
  },
  {
    question: "Subtract 324 from 489.",
    a: "A. 125",
    b: "B. 165",
    c: "C. 185",
    d: "D. 215",
    correct: "b5",
  },
  {
    question:
      "You have 572 stickers, and your friend takes 138 of them. How many stickers do you have left?",
    a: "A. 324",
    b: "B. 434",
    c: "C. 484",
    d: "D. 610",
    correct: "b5",
  },
  {
    question: "Calculate 698 - 425.",
    a: "A. 273",
    b: "B. 322",
    c: "C. 363",
    d: "D. 473",
    correct: "c5",
  },
];
const quiz5 = document.getElementById("quiz5");
const answerEls5 = document.querySelectorAll(".answer5");
const questionEl5 = document.getElementById("question5");
const a_text5 = document.getElementById("a_text5");
const b_text5 = document.getElementById("b_text5");
const c_text5 = document.getElementById("c_text5");
const d_text5 = document.getElementById("d_text5");
const submitBtn5 = document.getElementById("submit5");
const backBtn5 = document.getElementById("back5");
let currentQuiz5 = 0;
let score5 = 0;
loadQuiz5();
function loadQuiz5() {
  deselectAnswers5();
  const currentQuizData5 = quizData5[currentQuiz5];
  questionEl5.innerText = currentQuizData5.question;
  a_text5.innerText = currentQuizData5.a;
  b_text5.innerText = currentQuizData5.b;
  c_text5.innerText = currentQuizData5.c;
  d_text5.innerText = currentQuizData5.d;
}
function deselectAnswers5() {
  answerEls5.forEach((answerEl5) => (answerEl5.checked = false));
}
function getSelected5() {
  let answer5;
  answerEls5.forEach((answerEl5) => {
    if (answerEl5.checked) {
      answer5 = answerEl5.id;
    }
  });
  return answer5;
}
submitBtn5.addEventListener("click", () => {
  const answerd5 = getSelected5();
  if (answerd5) {
    if (answerd5 === quizData5[currentQuiz5].correct) {
      score5++;
    }
    currentQuiz5++;
    if (currentQuiz5 < quizData5.length) {
      loadQuiz5();
    } else {
      showQuizResultPopup5();
    }
  }
});

function showQuizResultPopup5() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score5 === quizData5.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score5 == 3) {
    resultMessage.textContent = `Very good! You answered ${score5}/${quizData5.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time!${score5}/${quizData5.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn5.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//EASY QUIZ MULTIPLICATION

const quizData6 = [
  {
    question: "What is 2x6?",
    a: "A. 8",
    b: "B. 10",
    c: "C. 12",
    d: "D. 14",
    correct: "c6",
  },
  {
    question: "What is 2x2?",
    a: "A. 2",
    b: "B. 4",
    c: "C. 6",
    d: "D. 8",
    correct: "b6",
  },
  {
    question: "What is 2x3?",
    a: "A. 3",
    b: "B. 6",
    c: "C. 9",
    d: "D. 12",
    correct: "b6",
  },
  {
    question: "What is 2x4?",
    a: "A. 4",
    b: "B. 8",
    c: "C. 12",
    d: "D. 16",
    correct: "b6",
  },
  {
    question: "What is 2x5?",
    a: "A. 10",
    b: "B. 12",
    c: "C. 14",
    d: "D. 16",
    correct: "a6",
  },
];
const quiz6 = document.getElementById("quiz6");
const answerEls6 = document.querySelectorAll(".answer6");
const questionEl6 = document.getElementById("question6");
const a_text6 = document.getElementById("a_text6");
const b_text6 = document.getElementById("b_text6");
const c_text6 = document.getElementById("c_text6");
const d_text6 = document.getElementById("d_text6");
const submitBtn6 = document.getElementById("submit6");
const backBtn6 = document.getElementById("back6");
let currentQuiz6 = 0;
let score6 = 0;
loadQuiz6();
function loadQuiz6() {
  deselectAnswers6();
  const currentQuizData6 = quizData6[currentQuiz6];
  questionEl6.innerText = currentQuizData6.question;
  a_text6.innerText = currentQuizData6.a;
  b_text6.innerText = currentQuizData6.b;
  c_text6.innerText = currentQuizData6.c;
  d_text6.innerText = currentQuizData6.d;
}
function deselectAnswers6() {
  answerEls6.forEach((answerEl6) => (answerEl6.checked = false));
}
function getSelected6() {
  let answer6;
  answerEls6.forEach((answerEl6) => {
    if (answerEl6.checked) {
      answer6 = answerEl6.id;
    }
  });
  return answer6;
}
submitBtn6.addEventListener("click", () => {
  const answerd6 = getSelected6();
  if (answerd6) {
    if (answerd6 === quizData6[currentQuiz6].correct) {
      score6++;
    }
    currentQuiz6++;
    if (currentQuiz6 < quizData6.length) {
      loadQuiz6();
    } else {
      showQuizResultPopup6();
    }
  }
});

function showQuizResultPopup6() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score6 === quizData6.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score6 == 3) {
    resultMessage.textContent = `Very good! You answered ${score6}/${quizData6.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time!${score6}/${quizData6.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn6.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//MEDIUM QUIZ MULTIPLICATION

const quizData7 = [
  {
    question: "What is the product of 12 multiplied by 7?",
    a: "A. 74",
    b: "B. 84",
    c: "C. 94",
    d: "D. 104",
    correct: "b7",
  },
  {
    question:
      "If you have 8 boxes, and each box contains 5 toys, how many toys do you have in total?",
    a: "A. 30",
    b: "B. 35",
    c: "C. 40",
    d: "D. 45",
    correct: "c7",
  },
  {
    question: "Multiply 14 by 6.",
    a: "A. 78",
    b: "B. 84",
    c: "C. 90",
    d: "D. 96",
    correct: "b7",
  },
  {
    question:
      "You have 9 bags, and each bag has 8 candies. How many candies do you have in all?",
    a: "A. 65",
    b: "B. 70",
    c: "C. 72",
    d: "D. 81",
    correct: "d7",
  },
  {
    question: "Calculate 7 times 9.",
    a: "A. 54",
    b: "B. 63",
    c: "C. 72",
    d: "D. 81",
    correct: "b7",
  },
];
const quiz7 = document.getElementById("quiz7");
const answerEls7 = document.querySelectorAll(".answer7");
const questionEl7 = document.getElementById("question7");
const a_text7 = document.getElementById("a_text7");
const b_text7 = document.getElementById("b_text7");
const c_text7 = document.getElementById("c_text7");
const d_text7 = document.getElementById("d_text7");
const submitBtn7 = document.getElementById("submit7");
const backBtn7 = document.getElementById("back7");
let currentQuiz7 = 0;
let score7 = 0;
loadQuiz7();
function loadQuiz7() {
  deselectAnswers7();
  const currentQuizData7 = quizData7[currentQuiz7];
  questionEl7.innerText = currentQuizData7.question;
  a_text7.innerText = currentQuizData7.a;
  b_text7.innerText = currentQuizData7.b;
  c_text7.innerText = currentQuizData7.c;
  d_text7.innerText = currentQuizData7.d;
}
function deselectAnswers7() {
  answerEls7.forEach((answerEl7) => (answerEl7.checked = false));
}
function getSelected7() {
  let answer7;
  answerEls7.forEach((answerEl7) => {
    if (answerEl7.checked) {
      answer7 = answerEl7.id;
    }
  });
  return answer7;
}
submitBtn7.addEventListener("click", () => {
  const answerd7 = getSelected7();
  if (answerd7) {
    if (answerd7 === quizData7[currentQuiz7].correct) {
      score7++;
    }
    currentQuiz7++;
    if (currentQuiz7 < quizData7.length) {
      loadQuiz7();
    } else {
      showQuizResultPopup7();
    }
  }
});

function showQuizResultPopup7() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score7 === quizData7.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score7 == 3) {
    resultMessage.textContent = `Very good! You answered ${score7}/${quizData7.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time! ${score7}/${quizData7.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn7.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//DIFFICULT QUIZ MULTIPLICATION

const quizData8 = [
  {
    question: "What is the product of 14 multiplied by 6?",
    a: "A. 48",
    b: "B. 72",
    c: "C. 84",
    d: "D. 96",
    correct: "c8",
  },
  {
    question:
      "If you have 9 boxes, and each box contains 8 toys, how many toys do you have in total?",
    a: "A. 16",
    b: "B. 36",
    c: "C. 54",
    d: "D. 72",
    correct: "c8",
  },
  {
    question: "Multiply 27 by 5.",
    a: "A. 95",
    b: "B. 120",
    c: "C. 135",
    d: "D. 150",
    correct: "c8",
  },
  {
    question:
      "You have 6 bags, and each bag has 7 candies. How many candies do you have in all?",
    a: "A. 9",
    b: "B. 21",
    c: "C. 36",
    d: "D. 42",
    correct: "d8",
  },
  {
    question: "Calculate 13 times 9.",
    a: "A. 99",
    b: "B. 108",
    c: "C. 117",
    d: "D. 126",
    correct: "c8",
  },
];
const quiz8 = document.getElementById("quiz8");
const answerEls8 = document.querySelectorAll(".answer8");
const questionEl8 = document.getElementById("question8");
const a_text8 = document.getElementById("a_text8");
const b_text8 = document.getElementById("b_text8");
const c_text8 = document.getElementById("c_text8");
const d_text8 = document.getElementById("d_text8");
const submitBtn8 = document.getElementById("submit8");
const backBtn8 = document.getElementById("back8");
let currentQuiz8 = 0;
let score8 = 0;
loadQuiz8();
function loadQuiz8() {
  deselectAnswers8();
  const currentQuizData8 = quizData8[currentQuiz8];
  questionEl8.innerText = currentQuizData8.question;
  a_text8.innerText = currentQuizData8.a;
  b_text8.innerText = currentQuizData8.b;
  c_text8.innerText = currentQuizData8.c;
  d_text8.innerText = currentQuizData8.d;
}
function deselectAnswers8() {
  answerEls8.forEach((answerEl8) => (answerEl8.checked = false));
}
function getSelected8() {
  let answer8;
  answerEls8.forEach((answerEl8) => {
    if (answerEl8.checked) {
      answer8 = answerEl8.id;
    }
  });
  return answer8;
}
submitBtn8.addEventListener("click", () => {
  const answerd8 = getSelected8();
  if (answerd8) {
    if (answerd8 === quizData8[currentQuiz8].correct) {
      score8++;
    }
    currentQuiz8++;
    if (currentQuiz8 < quizData8.length) {
      loadQuiz8();
    } else {
      showQuizResultPopup8();
    }
  }
});

function showQuizResultPopup8() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score8 === quizData8.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score8 == 3) {
    resultMessage.textContent = `Very good! You answered ${score8}/${quizData8.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time! ${score8}/${quizData8.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn8.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//EASY QUIZ DIVISION

const quizData9 = [
  {
    question: "What is 10/2?",
    a: "A. 2",
    b: "B. 4",
    c: "C. 5",
    d: "D. 6",
    correct: "c9",
  },
  {
    question: "What is 4/2?",
    a: "A. 1",
    b: "B. 2",
    c: "C. 3",
    d: "D. 4",
    correct: "b9",
  },
  {
    question: "What is 8/2?",
    a: "A. 2",
    b: "B. 3",
    c: "C. 4",
    d: "D. 5",
    correct: "c9",
  },
  {
    question: "What is 6/2?",
    a: "A. 2",
    b: "B. 3",
    c: "C. 4",
    d: "D. 6",
    correct: "b9",
  },
  {
    question: "What is 2/2?",
    a: "A. 0",
    b: "B. 1",
    c: "C. 2",
    d: "D. 3",
    correct: "b9",
  },
];
const quiz9 = document.getElementById("quiz9");
const answerEls9 = document.querySelectorAll(".answer9");
const questionEl9 = document.getElementById("question9");
const a_text9 = document.getElementById("a_text9");
const b_text9 = document.getElementById("b_text9");
const c_text9 = document.getElementById("c_text9");
const d_text9 = document.getElementById("d_text9");
const submitBtn9 = document.getElementById("submit9");
const backBtn9 = document.getElementById("back9");
let currentQuiz9 = 0;
let score9 = 0;
loadQuiz9();
function loadQuiz9() {
  deselectAnswers9();
  const currentQuizData9 = quizData9[currentQuiz9];
  questionEl9.innerText = currentQuizData9.question;
  a_text9.innerText = currentQuizData9.a;
  b_text9.innerText = currentQuizData9.b;
  c_text9.innerText = currentQuizData9.c;
  d_text9.innerText = currentQuizData9.d;
}
function deselectAnswers9() {
  answerEls9.forEach((answerEl9) => (answerEl9.checked = false));
}
function getSelected9() {
  let answer9;
  answerEls9.forEach((answerEl9) => {
    if (answerEl9.checked) {
      answer9 = answerEl9.id;
    }
  });
  return answer9;
}
submitBtn9.addEventListener("click", () => {
  const answerd9 = getSelected9();
  if (answerd9) {
    if (answerd9 === quizData9[currentQuiz9].correct) {
      score9++;
    }
    currentQuiz9++;
    if (currentQuiz9 < quizData9.length) {
      loadQuiz9();
    } else {
      showQuizResultPopup9();
    }
  }
});

function showQuizResultPopup9() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score9 === quizData9.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score9 == 3) {
    resultMessage.textContent = `Very good! You answered ${score9}/${quizData9.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time!${score9}/${quizData9.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn9.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//MEDIUM QUIZ DIVISION

const quizData10 = [
  {
    question:
      "If you have 24 apples and want to share them equally among 4 friends, how many apples does each friend get?",
    a: "A. 4",
    b: "B. 6",
    c: "C. 8",
    d: "D. 10",
    correct: "c10",
  },
  {
    question: "Divide 54 by 6.",
    a: "A. 6",
    b: "B. 8",
    c: "C. 9",
    d: "D. 10",
    correct: "c10",
  },
  {
    question:
      "You have 63 candies, and you want to put them into bags with 9 candies each. How many bags do you need?",
    a: "A. 5",
    b: "B. 6",
    c: "C. 7",
    d: "D. 8",
    correct: "b10",
  },
  {
    question:
      "If you have 35 stickers and want to give them to 5 friends equally, how many stickers does each friend get?",
    a: "A. 5",
    b: "B. 6",
    c: "C. 7",
    d: "D. 8",
    correct: "b10",
  },
  {
    question: "Divide 49 by 7.",
    a: "A. 6",
    b: "B. 7",
    c: "C. 8",
    d: "D. 9",
    correct: "b10",
  },
];
const quiz10 = document.getElementById("quiz10");
const answerEls10 = document.querySelectorAll(".answer10");
const questionEl10 = document.getElementById("question10");
const a_text10 = document.getElementById("a_text10");
const b_text10 = document.getElementById("b_text10");
const c_text10 = document.getElementById("c_text10");
const d_text10 = document.getElementById("d_text10");
const submitBtn10 = document.getElementById("submit10");
const backBtn10 = document.getElementById("back10");
let currentQuiz10 = 0;
let score10 = 0;
loadQuiz10();
function loadQuiz10() {
  deselectAnswers10();
  const currentQuizData10 = quizData10[currentQuiz10];
  questionEl10.innerText = currentQuizData10.question;
  a_text10.innerText = currentQuizData10.a;
  b_text10.innerText = currentQuizData10.b;
  c_text10.innerText = currentQuizData10.c;
  d_text10.innerText = currentQuizData10.d;
}
function deselectAnswers10() {
  answerEls10.forEach((answerEl10) => (answerEl10.checked = false));
}
function getSelected10() {
  let answer10;
  answerEls10.forEach((answerEl10) => {
    if (answerEl10.checked) {
      answer10 = answerEl10.id;
    }
  });
  return answer10;
}
submitBtn10.addEventListener("click", () => {
  const answerd10 = getSelected10();
  if (answerd10) {
    if (answerd10 === quizData10[currentQuiz10].correct) {
      score10++;
    }
    currentQuiz10++;
    if (currentQuiz10 < quizData10.length) {
      loadQuiz10();
    } else {
      showQuizResultPopup10();
    }
  }
});

function showQuizResultPopup10() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score10 === quizData10.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score10 == 3) {
    resultMessage.textContent = `Very good! You answered ${score10}/${quizData10.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time! ${score10}/${quizData10.length} You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn10.addEventListener("click", () => {
  window.location.href = "age6.html";
});

//DIFFICULT QUIZ DIVISION

const quizData11 = [
  {
    question:
      "If you have 72 apples and want to share them equally among 8 friends, how many apples does each friend get?",
    a: "A. 7",
    b: "B. 8",
    c: "C. 9",
    d: "D. 10",
    correct: "b11",
  },
  {
    question: "Divide 216 by 9.",
    a: "A. 18",
    b: "B. 24",
    c: "C. 27",
    d: "D. 36",
    correct: "a11",
  },
  {
    question:
      "You have 315 candies, and you want to put them into bags with 15 candies each. How many bags do you need?",
    a: "A. 18",
    b: "B. 20",
    c: "C. 21",
    d: "D. 25",
    correct: "c11",
  },
  {
    question:
      "If you have 98 stickers and want to distribute them equally among 7 friends, how many stickers does each friend get?",
    a: "A. 10",
    b: "B. 12",
    c: "C. 14",
    d: "D. 16",
    correct: "c11",
  },
  {
    question: "Divide 364 by 7.",
    a: "A. 46",
    b: "B. 52",
    c: "C. 58",
    d: "D. 64",
    correct: "b11",
  },
];
const quiz11 = document.getElementById("quiz11");
const answerEls11 = document.querySelectorAll(".answer11");
const questionEl11 = document.getElementById("question11");
const a_text11 = document.getElementById("a_text11");
const b_text11 = document.getElementById("b_text11");
const c_text11 = document.getElementById("c_text11");
const d_text11 = document.getElementById("d_text11");
const submitBtn11 = document.getElementById("submit11");
const backBtn11 = document.getElementById("back11");
let currentQuiz11 = 0;
let score11 = 0;
loadQuiz11();
function loadQuiz11() {
  deselectAnswers11();
  const currentQuizData11 = quizData11[currentQuiz11];
  questionEl11.innerText = currentQuizData11.question;
  a_text11.innerText = currentQuizData11.a;
  b_text11.innerText = currentQuizData11.b;
  c_text11.innerText = currentQuizData11.c;
  d_text11.innerText = currentQuizData11.d;
}
function deselectAnswers11() {
  answerEls11.forEach((answerEl11) => (answerEl11.checked = false));
}
function getSelected11() {
  let answer11;
  answerEls11.forEach((answerEl11) => {
    if (answerEl11.checked) {
      answer11 = answerEl11.id;
    }
  });
  return answer11;
}
submitBtn11.addEventListener("click", () => {
  const answerd11 = getSelected11();
  if (answerd11) {
    if (answerd11 === quizData11[currentQuiz11].correct) {
      score11++;
    }
    currentQuiz11++;
    if (currentQuiz11 < quizData11.length) {
      loadQuiz11();
    } else {
      showQuizResultPopup11();
    }
  }
});

function showQuizResultPopup11() {
  const popupContainer = document.createElement("div");
  popupContainer.id = "result-popup";

  const resultMessage = document.createElement("h2");
  const rewardImage = document.createElement("img");
  if (score11 === quizData11.length) {
    resultMessage.textContent =
      "Perfect! You answered all questions correctly. You've got an Ice Cream";
    rewardImage.src = "images/ice.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else if (score11 == 3) {
    resultMessage.textContent = `Very good! You answered ${score11}/${quizData11.length} questions correctly. You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  } else {
    resultMessage.textContent = `Better luck next time!  ${score11}/${quizData11.length}  You've got a Candy`;
    rewardImage.src = "images/candy2.png"; // Replace with the actual path to your reward image
    rewardImage.alt = "Reward Image";
    rewardImage.style.width = "200px"; // Adjust the width as needed
  }

  const reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload";
  reloadButton.addEventListener("click", () => location.reload());

  popupContainer.appendChild(resultMessage);
  popupContainer.appendChild(rewardImage);
  popupContainer.appendChild(reloadButton);

  document.body.appendChild(popupContainer);
}

backBtn11.addEventListener("click", () => {
  window.location.href = "age6.html";
});
