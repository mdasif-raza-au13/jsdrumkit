window.addEventListener('keydown', playSound);

function playSound(e) {
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing')
}

const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}