const audio = document.querySelector("audio");
const playBtn = document.querySelector(".btnAudio");
const btn = document.querySelector('button');
let isPlay = false;

function playAudio() {
  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    btn.classList.remove('play');
    btn.classList.add('pause');
    isPlay = true;
  } else {
    audio.pause();
    btn.classList.remove('pause');
    btn.classList.add('play');
    isPlay = false;
  }
}

playBtn.addEventListener("click", playAudio);

