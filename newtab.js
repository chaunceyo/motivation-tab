const quotes = [
 "Life is 10% what happens to me and 90% of how I react to it.",
 "The most common way people give up their power is by thinking they don't have any. ",
 "The mind is everything. What you think you become.",
 "The best time to plant a tree was 20 years ago. The second best time is now.",
 "An unexamined life is not worth living.",
 "Eighty percent of success is showing up.",
 "Your time is limited, so don't waste it living someone else's life.",
 "Do the best you can.",
 "Do what you can, with what you have, where you are.",
 "It's never too late to be what you might've been.",
 "If you can dream it, you can do it.",
 "Trust yourself that you can do it and get it.",
 "Don't let what you can't do interfere with what you can do."
];

function displayQuote() {
    const quoteElement = document.getElementById("quote")
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex]
}

document.addEventListener("DOMContentLoaded", displayQuote);

document.getElementById("new-quote").addEventListener("click", displayQuote)