const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on the key pressed
    audio.play(); // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    clickedKey.classList.add("active"); //adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    // calling the playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
    playTune(e.key);
}

document.addEventListener("keydown", pressedKey);