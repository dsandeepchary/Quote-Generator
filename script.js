var quotes=[["Our entire life - consists ultimately in accepting ourselves as we are.","Jean Anouilh"],
  ["Don't cry because it's over, smile because it happened.","Dr. Seuss"],
    ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Marilyn Monroe"],
    ["Be yourself; everyone else is already taken.","Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
    ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."," Bernard M. Baruch"],
    ["You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.","William W. Purkey"],
    ["So many books, so little time.","Frank Zappa"],
    ["A room without books is like a body without a soul.","Marcus Tullius Cicero"],
    ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.","Dr. Seuss"],
    ["You only live once, but if you do it right, once is enough.","Mae West"],
    ["Be the change that you wish to see in the world.","Mahatma Gandhi"],
    ["In three words I can sum up everything I've learned about life: it goes on","Robert Frost"],
    ["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","J.K. Rowling"],
    ["Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .\" ","C.S. Lewis"],
    ["No one can make you feel inferior without your consent.","Eleanor Roosevelt"],
    ["If you tell the truth, you don't have to remember anything.","Mark Twain"],
    ["A friend is someone who knows all about you and still loves you.","Elbert Hubbard"],
    ["I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","Maya Angelou"] ,
    ["Always forgive your enemies; nothing annoys them so much.","Oscar Wilde"],
    ["Live as if you were to die tomorrow. Learn as if you were to live forever.","Mahatma Gandhi"],
    [ "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","Martin Luther King Jr"],
    ["Without music, life would be a mistake.","Friedrich Nietzsche"],
    ["We accept the love we think we deserve.","Stephen Chbosky"],
    ["It is better to be hated for what you are than to be loved for what you are not.","Andrie Gide"],
     ["The fool doth think he is wise, but the wise man knows himself to be a fool.","William Shakespeare"],
    ["Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present","Bil Keane"],
   ["We are all in the gutter, but some of us are looking at the stars.","Oscar Wilde"],
    ["Good friends, good books, and a sleepy conscience: this is the ideal life.","Mark Twain"],
    ["Life is what happens to us while we are making other plans.","Allen Saunders"],
    ["The man who does not read has no advantage over the man who cannot read.","Mark Twain"],
    ["It is not a lack of love, but a lack of friendship that makes unhappy marriages.","Friedrich Nietzsche"],
    ["Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.","Groucho Marx"],
    ["I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living."," Dr. Seuss"],
    ["A day without sunshine is like, you know, night.","Steve Martin"],
    ["Never put off till tomorrow what may be done day after tomorrow just as well.","Mark Twain"],
    ["Love all, trust a few, do wrong to none.","William Shakespeare"],
    ["If you judge people, you have no time to love them.","Mother Teresa"],
    ["There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.","Sarah Dessen"],
    ["For every minute you are angry you lose sixty seconds of happiness.","Ralph Waldo Emerson"],
    ["Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.","Lao Tzu"]
];
var colors=["#1abc9c","#2ecc71","#3498db","#9b59b6","#e74c3c","#f1c40f"];
var quote="";
$(document).ready(function() {
  $(".quote-back").addClass("animated shake")
$("#getQuote").on("click",function(){   
  var random=Math.floor(Math.random() * quotes.length);
var randomColor=Math.floor(Math.random()*colors.length);
 $("body").css("background-color",colors[randomColor]);
$("strong").css("color",colors[randomColor]); $("cite").css("color",colors[randomColor]);       
  $("strong").html(function(){
return quotes[random][0];
});  
$("cite").html(function(){
return quotes[random][1]; 
});
quote=quotes[random][0]+" by "+quotes[random][1]+".:) for more: https://codepen.io/dsandeepchary/full/ENqBBo";
 // console.log(quote);

$("#tweet").on("click",function(){
$("#tweet").attr("href","https://twitter.com/intent/tweet?text="+quote);    
});
});
});


