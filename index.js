console.log("welcome to spotify");
let index = 0;
let mastersong = document.getElementById("mastersong");
let audioElement = new Audio('cover/song1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let songs = [
    { songName: "Heaven", filePath: "cover/song1.mp3", coverPath: "images/song1.jpg", time: "4:50" },
    { songName: "Harry and Hermione", filePath: "cover/song2.mp3", coverPath: "images/song2.jpg", time: "4:34" },
    { songName: "Harry Potter theme song", filePath: "cover/song3.mp3", coverPath: "images/song3.jpg", time: "5:23" },
    { songName: "Alan Walker - On My Way", filePath: "cover/song4.mp3", coverPath: "images/song4.jpg", time: "5:23" },
    { songName: "Bilionera", filePath: "cover/song5.mp3", coverPath: "images/song5.jpg", time: "5:23" },
    { songName: "Love Me Like You Do", filePath: "cover/song6.mp3", coverPath: "images/song6.jpg", time: "5:23" },
    { songName: "Perfect - Ed Sheeran", filePath: "cover/song7.mp3", coverPath: "images/song7.jpg", time: "4:23" },
    { songName: "A Thousand Years ", filePath: "cover/song8.mp3", coverPath: "images/song8.jpg", time: "5:23" },
    { songName: "Señorita ", filePath: "cover/song9.mp3", coverPath: "images/song9.jpg", time: "5:23" },
    { songName: "I Dont Care", filePath: "cover/song10.mp3", coverPath: "images/song10.jpg", time: "5:23" },

]
let songItems = Array.from(document.getElementsByClassName('song1'));

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("time")[0].innerText = songs[i].time;
})

    /
    //play music 
    masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif1.style.opacity = 1;
        }
        else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle'); gif1.style.opacity = 0;
        }
    })
//progress bar running
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;

})

//make all play

const makeallplay = () => {
    Array.from(document.getElementsByClassName("mysong")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("mysong")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        index = parseInt(e.target.id);
        audioElement.src = `cover/song${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); mastersong.innerText = songs[index - 1].songName;
    })
})

document.getElementById('next').addEventListener('click', () => {

    if (index > 6) {
        index = 0;
    }
    else
        index = index + 1; mastersong.innerText = songs[index - 1].songName;
    audioElement.src = `cover/song${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {

    if (index <= 0) {
        index = 0;
    }
    else
        index = index + 1; mastersong.innerText = songs[index - 1].songName;
    audioElement.src = `cover/song${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})


id = document.querySelector('.id');
items = document.querySelector('.items');
header = document.querySelector('header')
id.addEventListener('click', () => {
    items.classList.toggle('active');
    header.classList.toggle('h-nav');
})