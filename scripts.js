document.addEventListener("DOMContentLoaded", () => {
    const sounds = [
        { name: "1st Phone", file: "Audio/Audio for mimin1 (enhanced-mastered).mp3" },
        { name: "2nd Phone", file: "Audio/Audio for mimin2 (enhanced-mastered).mp3" },
        { name: "3rd Phone", file: "Audio/Persephone1.wav" },
        { name: "4th Phone", file: "Audio/Persephone2.mp3" },
    ];

    const soundboard = document.querySelector(".soundboard");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const audioPlayer = document.getElementById("audio-player");
    const customText = document.getElementById("custom-text");
    const customImage = document.getElementById("custom-image");
    const closeModal = document.querySelector(".close");

    sounds.forEach((sound) => {
        const button = document.createElement("button");
        button.textContent = sound.name;
        button.style.fontFamily = 'Glacial Indifference, monospace'; // Add this line
        button.onclick = () => openModal(sound);
        soundboard.appendChild(button);
    });

    closeModal.onclick = () => {
        modal.style.display = "none";
        audioPlayer.pause();
        customText.innerHTML = ""; // Clear the custom text
        customImage.innerHTML = ""; // Clear the custom image
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            audioPlayer.pause();
            customText.innerHTML = ""; // Clear the custom text
            customImage.innerHTML = ""; // Clear the custom image
        }
    };

    function openModal(sound) {
        modalTitle.textContent = sound.name;
        audioPlayer.src = sound.file;
        modal.style.display = "block";
        audioPlayer.play();

        if (sound.name === "3rd Phone") {
            customText.innerHTML = `
                <p>My Dearest [Her Name],</p>
                <p>In the tapestry of my life, thou art the most radiant thread, filling my heart with boundless joy and love. Thy presence soothes my soul, like a gentle summer breeze, and thy laughter is the sweetest melody that echoes within me.</p>
                <p>In thine eyes, I see the stars guiding me through the darkest nights, and in thy embrace, I find my true home. My love for thee transcends time and space, for thou art my everything, my light, and my eternal beacon.</p>
                <p>Forever thine,</p>
                <p>[Your Name]</p>
            `;
        } else {
            customText.innerHTML = ""; // Clear the custom text for other sounds
        }

        if (sound.name === "4th Phone") {
            customImage.innerHTML = `
                <img src="Audio/Pic/fotomuka.jpg" alt="Your Face" style="max-width: 100%; height: auto;">
            `;
        } else {
            customImage.innerHTML = ""; // Clear the custom image for other sounds
        }
    }

    const bgMusic = document.getElementById("bg-music");
    const audioToggle = document.getElementById("audio-toggle");

    // Set background music volume to 50%
    bgMusic.volume = 0.3;

    audioToggle.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            audioToggle.src = "Audio/Pic/speaker-filled-audio-tool.png";
        } else {
            bgMusic.pause();
            audioToggle.src = "Audio/Pic/no-sound.png";
        }
    });
});
