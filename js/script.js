


var quoteContent = [
    {
        'quotes' : "Be yourself; everyone else is already taken.",
        'auther' :  " Oscar Wilde   "
    },
    {
        'quotes' : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        'auther' :  " Marilyn Monroe   "
    },
    {
        'quotes' : "So many books, so little time.",
        'auther' :  " Frank Zappa    "
    },
    {
        'quotes' : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        'auther' :  "  Albert Einstein  "
    },
    {
        'quotes' : "A room without books is like a body without a soul.",
        'auther' :  " Marcus Tullius Cicero   "
    },
    {
        'quotes' : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        'auther' :  " Bernard M. Baruch    "
    }

];

function getQuote() {
    var quotesNumber = Math.floor(Math.random() * quoteContent.length);

    document.getElementById("quote").innerHTML= quoteContent[quotesNumber].quotes;
    document.getElementById("auther").innerHTML= quoteContent[quotesNumber].auther;
}