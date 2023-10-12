var myQuestions = [
  {
    question: "1. Who is Yellow?",
    answers: {
      A: 'Rudeus',
      B: 'Homer',
      C: 'Goblin from CoC'
    },
    correctAnswer: 'B'
  },
  {
    question: "2. What Color is Jerma985?",
    answers: {
      A: 'Red',
      B: 'Blue',
      C: 'Brown'
    },
    correctAnswer: 'C'
  },
  {
    question: "3. What's 9+10?",
    answers: {
      A: '3',
      B: '21',
      C: '19'
    },
    correctAnswer: 'B'
  },
  {
    question: "4. How many Cards are there?",
    answers: {
      A: '6',
      B: '5',
      C: '4'
    },
    correctAnswer: 'A'
  },
  {
    question: "5. Do you support the LGTV?",
    answers: {
      A: 'Yes',
      B: 'No',
      C: 'Samsung TV'
    },
    correctAnswer: 'C'

  },
  {
    question: "6. Rudeus has the Red Card.",
    answers: {
      A: 'True',
      B: 'False'
    },
    correctAnswer: 'A'

  },
  {
    question: "7. I always come BACK likes Ghosts.",
    answers: {
      A: 'True',
      B: 'False'
    },
    correctAnswer: 'B'

  },
  {
    question: "8. The Goblin from CoC likes Money.",
    answers: {
      A: 'True',
      B: 'False'
    },
    correctAnswer: 'B'

  },
  {
    question: "9. Hatsune Miku got a collab with Domino's Pizza.",
    answers: {
      A: 'True',
      B: 'False'
    },
    correctAnswer: 'A'

  },
  {
    question: "10. The Cat Gif is cool",
    answers: {
      A: 'True',
      B: 'False'
    },
    correctAnswer: 'A'

  },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }


  function displayText() {
    var text = document.getElementById("Hidden");
    var t = document.getElementById("time");
    var t1 = document.getElementById("time1");
    document.getElementById("submit").disabled = true;
    text.style.display = "block";
    t.style.display = "none";
    t1.style.display = "none";
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults();
    displayText();
  }

  setTimeout(showResults,91000);
  setTimeout(displayText,91000);

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
            timer = 0;
        }

    }, 1000);
  }
  
  window.onload = function () {
    var minutes = 30 * 3,
        display = document.querySelector('#time');
    startTimer(minutes, display);
  };
}
