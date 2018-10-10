var videoList = document.querySelectorAll('.video__player');

for (var i = 0; i < videoList.length; i++) {
  videoList[i].addEventListener('click', show);
}

function show(event) {
  var video = event.target.parentNode.parentNode;
  video.classList.add('video--show');
  video.classList.remove('video--hide');
  event.target.currentTime = 0;
  video.querySelector('.video__close').addEventListener('click', hide);
}

function hide(event) {
  var video = event.target.parentNode.parentNode;
  video.classList.remove('video--show');
  video.classList.add('video--hide');
}
