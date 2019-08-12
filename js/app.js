/*
 * JavaScript quiz app
 * version: 1.0.0
 * By: Elias Abdurrahman
 * date: june 18, 2019
 */
var correctAnswer = 0;
var quizHolder = document.getElementById("quizHolder");

function render(n) {
  quizHolder.innerHTML = `
        <span class="question-counter">Question ${data[n].id} of ${
    data.length
  }</span>
        <h4 class="question">${data[n].question}</h4>
        <ul class="m-chooses">
          <li onclick="checkAnswer(1, this, ${n})"><span>A)</span> ${
    data[n].a
  } <i></i></li>
          <li onclick="checkAnswer(2, this, ${n})"><span>B)</span> ${
    data[n].b
  } <i></i></li>
          <li onclick="checkAnswer(3, this, ${n})"><span>C)</span> ${
    data[n].c
  } <i></i></li>
          <li onclick="checkAnswer(4, this, ${n})"><span>D)</span> ${
    data[n].d
  }  <i></i></li>
        </ul>
        <div class="btn-ctrl">
          <button type="button" onclick="nextQuestion(${n})" id="nextBtn">Next &nbsp;&rsaquo;</button>
        </div>
         `;
}

var cA = 0;
var userAnswered = false;

function checkAnswer(userAnswer, tag, n) {
  var nextBtn = document.getElementById("nextBtn");
  var corectTag;
  if (cA == 0) {
    if (userAnswer == data[n].answer) {
      correctAnswer++;
      tag.style.background = "#75DDA1";
      tag.style.color = "#fff";
      tag.getElementsByTagName("i")[0].innerHTML += "<i>Correct</i>";
      cA++;
      nextBtn.style.background = "#4CAF50";
      userAnswered = true;

      console.log(correctAnswer);
    } else {
      tag.style.background = "#F09289";
      tag.style.color = "#fff";
      tag.getElementsByTagName("i")[0].innerHTML += "<i>Wrong</i>";

      corectTag = tag.parentElement.getElementsByTagName("li")[
        data[n].answer - 1
      ];
      corectTag.getElementsByTagName("i")[0].innerHTML += "<i>Correct</i>";

      corectTag.style.background = "#75DDA1";
      corectTag.style.color = "#fff";
      nextBtn.style.background = "#4CAF50";
      userAnswered = true;
      cA++;
    }
  }
}

function nextQuestion(n) {
  var num = n + 1;
  var nextBtn = document.getElementById("nextBtn");
  nextBtn.style.background = "#ccc";

  if (userAnswered == false) return 0;
  if (num < data.length) {
    cA = 0;
    userAnswered = false;
    render(num);
  } else {
    // result
    resultFunc();
  }
}

function resultFunc() {
  if (correctAnswer / data.length >= 3 / 4) {
    quizHolder.innerHTML = `
                <div class="g-result">
                    <h4>Your Result</h4>
                    <h4 class="g-text">Very Good!!</h4>
                    <div class="g-circle">
                    ${correctAnswer} / ${data.length}
                    </div>
                </div>
            `;
  } else if (correctAnswer / data.length >= 1 / 2) {
    quizHolder.innerHTML = `
            <div class="m-result">
                <h4>Your Result</h4>
                <h4 class="m-text">Good</h4>
                <div class="m-circle">
                ${correctAnswer} / ${data.length}                
                </div>
            </div>
            `;
  } else {
    quizHolder.innerHTML = `
            <div class="b-result">
                <h4>Your Result</h4>
                <h4 class="b-text">Not Good</h4>
                <div class="b-circle">
                ${correctAnswer} / ${data.length}                
            </div>
           `;
  }
}
