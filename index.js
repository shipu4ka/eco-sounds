const audio = document.querySelector("audio");
const playBtn = document.querySelector(".btnAudio");
const btn = document.querySelector("button");
let isPlay = false;

function playAudio() {
  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    btn.classList.remove("play");
    btn.classList.add("pause");
    isPlay = true;
  } else {
    audio.pause();
    btn.classList.remove("pause");
    btn.classList.add("play");
    isPlay = false;
  }
}

playBtn.addEventListener("click", playAudio);

const birdsBtn = document.querySelector("ul");
const picture = document.querySelector(".picture");
const music = document.querySelector(".music");
const option = document.querySelectorAll("li");
const bird = document.querySelector(".bird");

function vkl(event) {
  if (event.target.classList.contains("option")) {
    option.forEach((l) => l.classList.remove("active"));
    bird.classList.remove('active');
    event.target.classList.add("active");
    let h = event.target.getAttribute("data-name");
    picture.src = `./assets/img/${h}.jpg`;
    music.src = `./assets/audio/${h}.mp3`;
    audio.play();
    btn.classList.remove("play");
    btn.classList.add("pause");
    isPlay = true;
  }
}

birdsBtn.addEventListener("click", vkl);


function forest(event) {
  bird.classList.add("active");
  option.forEach((l) => l.classList.remove("active"));
  picture.src = `./assets/img/forest.jpg`;
  music.src = `./assets/audio/forest.mp3`;
  audio.play();
  btn.classList.remove("play");
  btn.classList.add("pause");
  isPlay = true;
}

bird.addEventListener("click", forest);
