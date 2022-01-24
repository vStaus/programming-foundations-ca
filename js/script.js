//oppgave 1
var outOfStock = true;
console.log (outOfStock)
if (outOfStock === true) {
 console.log("Out of Stock") 
}
 else {
 console.log ("In Stock") 
}
//oppgave 2

for(var i = 15; i <= 25; i++) {
    console.log(i);
}

// oppgave 3
var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
    ];
for(var i = 0; i < games.length; i++) {
    if(games[i].rating < 3.6) {
        document.write(games[i].title + ':' + '&nbsp' + games[i].rating)
    }
    console.log(games.length);
}

// oppgave 4
function whatIDontLike (heights){
    console.log("I dont like " + heights)
}

whatIDontLike ("heights")

// oppgave 5
function twoNumbers(number69, number420) {
    var sum = number69 - number420;
    console.log(sum);
    }

twoNumbers (69,420);
document.getElementById("subtraction").innerHTML = twoNumbers;

// oppgave 6
var heading = document.querySelector("h1")
var button = document.querySelector("button")
var h1 = document.querySelector("h1")
var body = document.querySelector("body");
console.dir(button);

function changeStyle () {
    h1.style.color = "green";
    body.style.background = "yellow";
    heading.innerHTML = "Updated title";
    heading.style.fontFamily = "impact";
}
button.onclick = changeStyle;

// oppgave 7
const out = document.querySelector ("ul#toysList");
let toysList = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    }
];
console.dir(toysList);

function list (){
    listArray(toysList, out);
}

function listArray(array, element) {
    element.innerHTML = "";
    for (let toysList of array) {
        element.innerHTML +="<li>" + toysList + "</li>"
    }
}