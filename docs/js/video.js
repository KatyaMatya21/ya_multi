var buttonMenu = document.querySelector('.js-menu-button');
var menu = document.querySelector('.header-menu');

/**
 * EventListener on click menu button
 */
buttonMenu.addEventListener('click', function () {
  menu.classList.toggle('header-menu--opened');
});

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
  var video = event.target.parentNode;
  video.classList.remove('video--show');
}


