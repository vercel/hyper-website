document.getElementById('vid').playbackRate = 1.7;

document.getElementById('vid').onended = function () {
  document.getElementById('arrow').style.animationDelay = '100ms';
  document.getElementById('arrow').style.animationName = 'arrow-video-finish';
}
