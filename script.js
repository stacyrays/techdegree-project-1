//Get the HTML elements needed to perform the code
var quotePara = document.getElementsByTagName('p')[0];
var myButton = document.getElementsByTagName('button')[0];
var counter = 0;


//Create the array of objects for the generator:
var quotes = [
  {
    quote: "You know you are in love when you cannot fall asleep because reality is finally better than your dreams.",
    source: "<p class='name'>Dr. Suess</div>",
    background: "#a8d1f7",
    fullQuote: function() {
      return this.quote + " " + this.source;
    }
 },
 {
   quote: "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell do not deserve me at my best.",
   source: "<p class='name'>Marilyn Monroe</div>",
   background: "#cdb6fb",
   fullQuote: function() {
     return this.quote + " " + this.source;
   }
 },
 {
   quote: "Get busy living or get busy dying.",
   source: "<p class='name'>Stephen King</div>",
   background: "#a6fcd1",
   fullQuote: function() {
     return this.quote + " " + this.source;
   }
 },
 {
   quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
   source: "<p class='name'>Helen Keller</div>",
   background: "#f8f0b0",
   fullQuote: function() {
     return this.quote + " " + this.source;
   }
 },
 {
   quote: "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
   source: "<p class='name'>Lucille Ball</div>",
   background: "#f8f0b0",
   fullQuote: function() {
     return this.quote + " " + this.source;
   },
 }
];

//Set up the button event listener to run the gerRandomQuote function
myButton.addEventListener("click", getRandomQuote);

//Function definition for returning a random quote
function getRandomQuote() {
  //Random number method can be used to pick out from the array which quote to display
  var randNum = Math.floor(Math.random() * 5);

  //This function prints the html onto the screen
  function printQuote(){
    quotePara.innerHTML = quotes[randNum].fullQuote();

    //Changes body background color
    document.body.style.backgroundColor = quotes[randNum].background;
  }

  //Run the print quote function
  printQuote();
}

//I couldn't figure out how exactly to make the quotes change just in a setTimeOut function. So I found a for loop that counts up until 100, and each time it executes the setTimeOut code block. This link helped me understand how to get this to work; had an example: https://wsvincent.com/javascript-closure-settimeout-for-loop/
for (var i = 1; i <= 100; i++) {
  (function(i) {
    setTimeout(function() {
      //alert(i);
      var randNum = Math.floor(Math.random() * 5);

      function printQuote(){
        quotePara.innerHTML = quotes[randNum].fullQuote();

        //Changes body background color
        document.body.style.backgroundColor = quotes[randNum].background;
      }
      printQuote();
    }, i*5000);
  })(i);
}
