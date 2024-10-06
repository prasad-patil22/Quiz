
function calculateScore(event) {
    event.preventDefault(); // Prevent form submission
    
    let score = 0; // Initialize the score to 0
    
    // Correct answers
    const answers = {
      q1: 'a', // The correct answer for question 1 is 'a' (Universal Serial Bus)
      q2: 'a', // The correct answer for question 2 is 'a' (A bug that causes the program to stop working)
      q3: 'd', // The correct answer for question 3 is 'd'  (HTML)
      q4: 'b', //The correct answer for question 4 is 'b'   (presention layer)
      q5:  'b', //The correct answer for question 5 is 'b'   (SMTP)
      q6:  'c', //The correct answer for question 6 is 'c'   (30 is sum)
      q7:  'c', //The correct answer for question 7 is 'c'   (null)
      q8:  'b', //The correct answer for question 8 is 'b'   (Array)
      q9:  'b', //The correct answer for question 9 is 'b'   (#)
      q10:  'a', //The correct answer for question 10 is 'a'   (13)
      q11:  'c', //The correct answer for question 11 is 'c'   (onclick)
      q12:  'c', //The correct answer for question 12 is 'c'   (html,css,js)
    };
    
    // Get user input
    const userAnswers = {
      q1: document.querySelector('input[name="q1"]:checked')?.value, // Get the selected answer for question 1
      q2: document.querySelector('input[name="q2"]:checked')?.value, // Get the selected answer for question 2
      q3: document.querySelector('input[name="q3"]:checked')?.value, // Get the selected answer for question 3
      q4: document.querySelector('input[name="q4"]:checked')?.value, // Get the selected answer for question 4
      q5: document.querySelector('input[name="q5"]:checked')?.value, // Get the selected answer for question 5
      q6: document.querySelector('input[name="q6"]:checked')?.value, // Get the selected answer for question 6
      q7: document.querySelector('input[name="q7"]:checked')?.value, // Get the selected answer for question 7
      q8: document.querySelector('input[name="q8"]:checked')?.value, // Get the selected answer for question 8
      q9: document.querySelector('input[name="q9"]:checked')?.value, // Get the selected answer for question 9
      q10: document.querySelector('input[name="q10"]:checked')?.value, // Get the selected answer for question 10
      q11: document.querySelector('input[name="q11"]:checked')?.value, // Get the selected answer for question 11
      q12: document.querySelector('input[name="q12"]:checked')?.value, // Get the selected answer for question 12
    };
    
    // Check answers and calculate score
    for (let question in answers) {
      if (answers[question] === userAnswers[question]) {
        score++; // Increment score if the user's answer matches the correct answer
      }
    }
    
    // Show result
    const resultDiv = document.getElementById('result'); // Find the div to display the result
    resultDiv.innerHTML = `You scored ${score} out of 12!`; // Show the user's score
  }
  