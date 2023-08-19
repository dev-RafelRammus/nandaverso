const audioPlayer = document.querySelector(".audio-player audio");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let currentSourceIndex = 0;

    audioPlayer.addEventListener("ended", function() {
        playNextSong();
    });

    function playNextSong() {
        currentSourceIndex++;
        if (currentSourceIndex >= audioPlayer.children.length) {
            currentSourceIndex = 0;
        }
        audioPlayer.src = audioPlayer.children[currentSourceIndex].src;
        audioPlayer.play();
    }

    prevButton.addEventListener("click", function() {
        currentSourceIndex--;
        if (currentSourceIndex < 0) {
            currentSourceIndex = audioPlayer.children.length - 1;
        }
        audioPlayer.src = audioPlayer.children[currentSourceIndex].src;
        audioPlayer.play();
    });

    nextButton.addEventListener("click", function() {
        playNextSong();
    });