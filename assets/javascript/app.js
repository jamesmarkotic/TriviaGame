/*Pseudo coding
1. Create start page with start button
  - button must start the Game
  - once button is clicked, change page to display:
    - countdown timer, questions, answer choices and finish button at end.
2. Create countdown timer and display to page
  - timer must be counting down in real time on the page
3. Display questions and answers
  - questions must be accompanied by answer choices.
  - user can only choose one answer
  - answers will most likely be stored in an array/object
4. Create condition for when timer expires
  - when timer expires, change screen to reflect how many correct, incorrect
  and unanswered questions there were.
*/

// Global Variables
var timer = 45;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questions = ['q1' , 'q2', 'q3', 'q4']
//

// Timer
function timerFunc () {
  timer --;
  console.log(timer);
  // return timer;
  $('.timer').html( ' ' + timer)
}

// var start =  $('#start').on('click', setInterval(timerFunc, 1000));


//
