var video = document.querySelector('video').play();

if (video !== undefined) {
  promise.then(() => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
        video.muted = false;
        video.play();
  });
}