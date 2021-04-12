// UI элементы
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Запуск и остановка видео
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Обновление иконки на кнопке (запуск/пауза)
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Обновление прогресс-бара
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Получаем количество минут, которые прошли с начала видео
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = `0${mins}`;
  }

  // Получаем количество секунд, которые прошли с начала видео
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  timestamp.textContent = `${mins}:${seconds}`;
}

// Установка прогресса видео
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Остановка видео
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

// Обработчики событий
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
