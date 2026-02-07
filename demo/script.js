// defer in very simple words
// “Download JS now, run it later.”

var h1 = document.querySelector('h1')

h1.addEventListener('click', function () {
    h1.innerHTML = 'bye world';
    h1.style.color = 'red';
    h1.style.backgroundColor = 'yellow';
})

//--> Math.random() : default value get between 0 to 1
// --> we can increase it range by Multiplying it . if we Math.random()*10 : value we get between o to 10 ,
//Math.floor(): using this we get only integer value , we Get nearest Round Value 


var a = Math.floor(Math.random() * 100);
console.log(a);

// var box = document.querySelector('#box');
// box.addEventListener('click',function(){
//     box.style.backgroundColor='lightblue';

// });


//--> ❌ rgb(100,20,100) ← JS thinks this is a function
//-->Every color is made by mixing 3 colors : Red , Green , Blue (RGB) .255 is the maximum value of each color . mix this color to make a color that we want 
//(225, 225,225) -> White, (0,0,0)-->black

var btn = document.querySelector('#btn');
var box = document.querySelector('#box');

btn.addEventListener('click', function () {
    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);
    console.log(c1,c2,c3);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})
