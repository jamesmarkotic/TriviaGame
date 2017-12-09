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
var correct = 0;
var incorrect = 0;
var unanswered = 0;
// var questions = ['q1' , 'q2', 'q3', 'q4']
//

// Timer
var timer = setInterval(function() {

  var count = parseInt($('.count').html());
  if (count !== 0) {
    $('.count').html(count - 1);
  } else {
    clearInterval(timer);
  }
  // return count;
}, 1000);
//

// Win/Loss Conditions
// if (count == 0) {
//   if ($('input[.q1]:checked').val(0)) {
//     correct ++;
//     console.log(correct);
//   }
//   else {
//     incorrect ++;
//   }
//
//   if ($('input[.q2]:checked').val(0)) {
//     correct ++;
//     console.log(correct);
//   }
//   else {
//     incorrect ++;
//   }
//
//   if ($('input[.q3]:checked').val(0)) {
//     correct ++;
//     console.log(correct);
//   }
//   else {
//     incorrect ++;
//   }
// };
//


// $('#start').on('click', setInterval(function () {
//   for (var i = 1; i > 0; i = i - 1) {
//     timer --;
//     console.log(timer);
//     $('.timer').html( ' ' + timer)
//
//   }
// }, 1000));
//
// if (timer == 0) {
//   return;
// }

// function timerFunc () {
//   timer --;
//   console.log(timer);
//   $('.timer').html( ' ' + timer)
//   if (timer == 0) {
//     return;
//   }
// }
