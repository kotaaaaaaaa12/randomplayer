const mp3Files = [];
for (let i = 1; i <= 100; i++) {
    mp3Files.push(`./mp3/${i}.mp3`);
}

let playedFiles = [];
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('play');
const speedSelect = document.getElementById('speed');
const speedValue = document.getElementById('speedValue');
const trackNumber = document.getElementById('trackNumber');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(mp3Files);

function playNext() {
    if (playedFiles.length === mp3Files.length) {
        audioPlayer.src = ''; 
        return;
    }
    
    const nextFile = mp3Files[playedFiles.length];
    playedFiles.push(nextFile);
    audioPlayer.src = nextFile;
    audioPlayer.play();
    audioPlayer.playbackRate = parseFloat(speedSelect.value);
    trackNumber.textContent = `${playedFiles.length}首目`; // ここを変更
}

playButton.addEventListener('click', () => {
    audioPlayer.playbackRate = parseFloat(speedSelect.value);
    playNext();
});

audioPlayer.addEventListener('ended', playNext);

speedSelect.addEventListener('input', () => {
    audioPlayer.playbackRate = parseFloat(speedSelect.value);
    speedValue.textContent = speedSelect.value;
});
