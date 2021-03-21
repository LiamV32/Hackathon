

let files = [
    {
        name: 'BTS- Dynamite',
        source: 'resources/s/BTS-Dynamite.mp3'
    },
    {
        name: 'Younha ft.RM - Winter Flower',
        source: '\resources\s\muzlome_Younha_-_WINTER_FLOWERfeat_RM_67891683.mp3'
    },
    {
        name: 'Jorge Blanco - Conmigo',
        source: 'resources\s\muzlome_Jorge_Blanco_-_Conmigo_62681596.mp3'
    },
    {
        name: 'Jonas Blue Chelcee Grimes TINI - Wild',
        source: 'resources\s\muzlome_Jonas_Blue_Chelcee_Grimes_tINI_Jhay_Cortez_-_Wild_60241151.mp3'
    }
];
let btn = 1;
let numOfSongs = 4;
let list = document.querySelector('.playlist');
/*
function play(btn){

    let random = Math.floor(Math.random() * 4);
    let audio = document.querySelector('audio');
    let name = document.querySelector('#song-name');
   

    if (btn === 1){
        audio.src = files[random].source;
        name.innerHTML = files[random].name;
    }
    else if(btn === 2){
        audio.src = files[random].source;
        name.innerHTML = files[random].name;
    }
    else if(btn === 3){
        audio.src = files[random].source;
        name.innerHTML = files[random].name;
    }
    else {
        audio.src = files[random].source;
        name.innerHTML = files[random].name;
    }
};*/
function listAll(e){

    let div = document.createElement('div');
    let p = document.createElement('p');
    div.appendChild(p);
    for (let i in files){
        p.innerText = i.name;
        list.append(div);
    }
}

listAll;

let map = document.querySelector('.map');
let size = false;

map.onclick = function(e) {
    map.style.transition = '0.5s ease-in-out';
    if(size){
        e.style.transform = 'translateX(-150px) scale(0.5)';
        size = false;
    }
    else {
        e.style.transform = 'translateX(150px) scale(1.5)';
        size = true;
    }
}