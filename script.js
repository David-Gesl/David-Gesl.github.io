function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('form-response').classList.remove('hidden');
}

// Load the Lottie animation
lottie.loadAnimation({
  container: document.getElementById('lottie-animation'), // ID of the container
  renderer: 'svg', // or canvas or html
  loop: true,
  autoplay: true,
  path: 'BoyStudyingScience.json'
});

// Toggle play/pause
let isPlaying = true;
document.getElementById('lottie-animation').addEventListener('click', () => {
  if (isPlaying) {
    lottie.pause();
    isPlaying = false;
  } else {
    lottie.play();
    isPlaying = true;
  }
});