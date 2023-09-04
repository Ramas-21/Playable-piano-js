const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("");

const playTune = (key) => {
    audio.play(); // playing audio
}

pianoKeys.forEach(key => {
    // calling the playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});