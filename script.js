const questions = [
    "I know which emotions I am experiencing",
    "I am aware of my emotions",
    "I allow myself to feel emotional",
    "I take notice of my emotions",
    "I can name the emotions I am feeling",
    "I tell other people what I’m feeling",
    "I take responsibility for my own feelings",
    "I know what triggers different kinds of emotion in me",
    "I can respond without being overwhelmed by emotion",
    "I can express the right amount of feeling for the circumstances",
    "I can be assertive when emotional rather than aggressive or passive",
    "I know when my feelings are not being expressed",
    "I make opportunities to express my feelings after an event, if needed",
    "I know the ways that my feelings affect my performance",
    "I regularly talk about my feelings to someone I trust",
    "I reflect upon my feelings",
    "I allow myself to feel vulnerable from time to time",
    "I cry if I need to",
    "I allow myself to withdraw from a situation in order to experience my feelings",
    "I am aware of how my feelings are affected by people around me",
    "I know which emotions other people are experiencing ",
    "I am aware of other people’s feelings",
    "I allow other people to feel their emotions",
    "I take notice of other people’s feelings",
    "I can name the emotions other people are feeling",
    "I speak to other people about their feelings",
    "I take responsibility for my own feelings when other people are feeling emotional",
    "I know what triggers emotional responses is people I see regularly",
    "I am aware of my own responses to other people’s emotions",
    "I allow other people to express what they feel is right for the circumstances",
    "I can be assertive when other people are being aggressive, passive or emotional",
    "I am aware when other people are not expressing their feelings",
    "I make opportunities for other people to express their feelings",
    "I am aware of how I let other people’s feelings affect my performance",
    "I regularly listen to someone I know well talking about their feelings",
    "I reflect upon the way feelings are experienced and expressed in groups",
    "I allow other people to feel vulnerable if they if they need to",
    "I am comfortable when others cry if they need",
    "I understand when others withdraw in order to experience their feelings",
    "I am aware of how my feelings affect others around me",
    "I feel comfortable even when people disagree with me",
    "I can allow other people their own opinion",
    "I can feel angry without taking it out on others",
    "I can accept criticism without getting angry",
    "I can voice my own opinions",
    "I am able to remain positive even  when the situation looks gloomy",
    "I can allow myself to be sad and to experience the sadness without pushing it away",
    "I can make decisions and act upon them",
    "I can stop and assess a situation before I act or speak",
    "I feel comfortable working with people from very different backgrounds to mine",
    "I can enjoy diversity in the people around me",
    "I will speak out for what I believe is right",
    "I ask for help when I need it",
    "I can let myself feel emotions without taking alcohol, a cigarette, drug or comfort eating",
    "I am calm in a crisis",
    "I can identify when my behaviour is unreasonable and stop it",
    "I can manage uncertainty without having to have an answer straightaway",
    "I can manage my emotions under pressure",
    "I can take responsibility for my own part in events",
    "I can admit a mistake and apologise"
  ];
  
  let currentQuestion = 0;
  let totalScore = 0;
  
  const app = document.getElementById("app");
  const startButton = document.getElementById("start-button");
  const questionnaire = document.querySelector(".questionnaire");
  const form = document.getElementById("quiz-form");
  const nextButton = document.getElementById("next-button");
  const resultPage = document.querySelector(".result-page");
  const resultText = document.getElementById("result-text");
  const restartButton = document.getElementById("restart-button");
  
  function renderQuestion(index) {
    form.innerHTML = `
      <div class="question">
        <h2>${questions[index]}</h2>
        <div class="options">
          ${[1, 2, 3, 4, 5]
            .map(
              (score) => `
            <input type="radio" id="option${score}" name="answer" value="${score}">
            <label for="option${score}">${score}</label>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  
  startButton.addEventListener("click", () => {
    document.querySelector(".start-page").style.display = "none";
    questionnaire.style.display = "block";
    renderQuestion(currentQuestion);
    nextButton.style.display = "inline-block";
  });
  
  nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );
  
    if (!selectedOption) {
      alert("Please select a score!");
      return;
    }
  
    totalScore += parseInt(selectedOption.value, 10);
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      renderQuestion(currentQuestion);
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionnaire.style.display = "none";
    resultPage.style.display = "block";
    resultText.textContent = `Your total score is ${totalScore}.`;
  }
  
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    totalScore = 0;
    resultPage.style.display = "none";
    document.querySelector(".start-page").style.display = "block";
  });
  