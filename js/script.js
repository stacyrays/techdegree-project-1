// FSJS - Random Quote Generator

//Declare variables
var randNum;
var randQuote;
var randSource;
var randCitation;
var randYear;
var randBg;

// Create the array of quote objects
var quotes = [
  {
    quote: "You know you are in love when you cannot fall asleep because reality is finally better than your dreams.",
    source: "Dr. Suess",
    citation:"Time Magazine",
    year:"1963",
    background: "#a8d1f7",
 },
 {
   quote: "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell do not deserve me at my best.",
   source: "Marilyn Monroe",
   citation:"New York Times",
   year:"1957",
   background: "#cdb6fb",
 },
 {
   quote: "Get busy living or get busy dying.",
   source: "Stephen King",
   citation:"Bookworm",
   year:"1998",
   background: "#a6fcd1",
 },
 {
   quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
   source: "Helen Keller",
   citation:"Washington Post",
   year:"1960",
   background: "#53B6E6",
 },
 {
   quote: "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
   source: "Lucille Ball",
   citation:"The Ed Sullivan Show",
   year:"1955",
   background: "#f8f0b0",
 }
];

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(){
  randNum = Math.floor(Math.random() * 5);
  randQuote = quotes[randNum].quote;
  randSource = quotes[randNum].source;
  randCitation = quotes[randNum].citation;
  randYear = quotes[randNum].year;
  randBg = quotes[randNum].background;
  console.log(randQuote + " " + randSource + " " + randCitation + " " + randYear + " " + randBg);
}

// Create the printQuote function and name it printQuote
function printQuote(){
  getRandomQuote();
  document.getElementsByClassName("quote")[0].innerHTML = randQuote;
  document.getElementsByClassName("source")[0].innerHTML = randSource + "<span class='citation'>" + randCitation + "</span><span class='year'>" + randYear + "</span>";
  document.body.style.backgroundColor = randBg;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//I couldn't figure out how exactly to make the quotes change just in a setTimeOut function. So I found a for loop that counts up until 100, and each time it executes the setTimeOut code block. This link helped me understand how to get this to work; had an example: https://wsvincent.com/javascript-closure-settimeout-for-loop/
for (var i = 1; i <= 100; i++) {
  (function(i) {
    setTimeout(function() {
      printQuote();
    }, i*5000);
  })(i);
}
