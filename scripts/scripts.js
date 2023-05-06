(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'darkgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = '#8b0000';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Upbeat music can boost your:",
        answers: {
          a: "IQ",
          b: "Seratonin levels",
          c: "Blood pressure"
        },
        correctAnswer: "b"
      },
      {
        question: "Listening to music is proven to lower stress by reducing your:",
        answers: {
          a: "Cortisol levels (stress hormone)",
          b: "Cholesterol",
          c: "Social anxiety"
        },
        correctAnswer: "a"
      },
      {
        question: "True or false: Background music enhances performance on cognitive tasks:",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      },
      {
        question: "Listening to sad music is proven to increase:",
        answers: {
          a: "Depression",
          b: "Empathy",
          c: "Intelligence"
        },
        correctAnswer: "b"
      },
      {
        question: "The benefits of listening to lo-fi music include:",
        answers: {
          a: "Reduced stress",
          b: "Healthier sleep",
          c: "Improved focus",
          d: "All of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "Among older adults, music has been proven to improve symptoms of:",
        answers: {
          a: "Cancer",
          b: "Alzheimers",
          c: "Diabetes"
        },
        correctAnswer: "b"
      },
      {
        question: "Live concerts have been proven to:",
        answers: {
          a: "Increase stress levels",
          b: "Reduce brain development",
          c: "Provide pain relief",
          c: "Decrease social anxiety"
        },
        correctAnswer: "c"
      },
      {
        question: "True or false: Music is a proven form of effective therapy for mental illnesses",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      }
      
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();
  

