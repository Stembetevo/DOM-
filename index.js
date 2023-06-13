//VARIABLES

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote : "I'd rather have loyalty than love!",
    person : "21 Savage"
},{
    quote : "If you want to live a happy life, tie it to a goal, not to people or things.",
    person : "Albert Einstein"
},{
    quote: "No fly zone please stay out of my airspace!",
    person: "J.Cole"
},{
    quote: "What we did not imagine was a Web of people, but a Web of Documents",
    person: "Dale Dougherty"
},{
    quote: "Your time is limited so don't waste it living someone else's life",
    person: "Aristotle"
},{
    quote:"The best way to find yourself is to lose yourself in the service of others.",
    person:"Mahatma Gandhi"
},];

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


})