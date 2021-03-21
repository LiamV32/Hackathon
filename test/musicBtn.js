let btn1 = document.querySelector('#card1');
let btn2 = document.querySelector('#card2');
let btn3 = document.querySelector('#card3');
let btn4 = document.querySelector('#card4');

let url = 'MusicDisplay?button';
btn1.onclick = (e) => localStorage["button"] = 1;
btn2.onclick = (e) => localStorage["button"] = 2;
btn3.onclick = (e) => localStorage["button"] = 3;
btn4.onclick = (e) => localStorage["button"] = 4;

