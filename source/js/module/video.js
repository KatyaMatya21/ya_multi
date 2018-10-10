var videoList = document.querySelectorAll('.video__player');

for (var i = 0; i < videoList.length; i++) {
  videoList[i].addEventListener('click', show);
}

function show(event) {
  var video = event.target.parentNode;
  video.classList.add('video--show');
  video.querySelector('.video__close').addEventListener('click', hide);
}

function hide(event) {
  var video = event.target.parentNode.parentNode;
  video.classList.remove('video--show');
  video.style = 'z-index: 666;';

  setTimeout(function() {
    video.style = '';
  }, 500);
}

