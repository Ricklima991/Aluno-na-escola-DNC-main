/* ============================================================
   CONFIG: playlist de FOCO NO TRABALHO (lofi beats, Spotify).
   Para usar SUA playlist: app Spotify > sua playlist
   > Compartilhar > Copiar link > o ID é o trecho após
   "playlist/". Para tocar em aleatório, ative o shuffle
   dentro do player.
   ============================================================ */
const SPOTIFY_PLAYLIST_ID = "37i9dQZF1DWWQRwui0ExPn"; // lofi beats

/* ---------- Tela de carregamento: carinha + CD ---------- */
document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("loading-bar");
    const text = document.getElementById("loading-text");
    const screen = document.getElementById("loading-screen");
    const smiley = document.getElementById("smiley");
    const mouth = document.getElementById("smile-mouth");
    let width = 0;

    const interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            // Carinha sorri ao terminar :)
            mouth.setAttribute("d", "M30 58 Q50 78 70 58");
            smiley.classList.add("happy");
            text.innerText = "Pronto!";
            setTimeout(function () {
                screen.style.opacity = 0;
                setTimeout(function () {
                    screen.style.display = "none";
                }, 500);
            }, 600);
        } else {
            width++;
            bar.style.width = width + "%";
            text.innerText = width + "%";
        }
    }, 10);
});

/* ---------- Player Spotify: CD gira + play/pause ---------- */
(function () {
    const btn = document.getElementById("btnPlay");
    const cd = document.getElementById("cdMini");
    const frame = document.getElementById("spotifyFrame");
    const baseSrc = "https://open.spotify.com/embed/playlist/" +
        SPOTIFY_PLAYLIST_ID + "?utm_source=generator&theme=0";
    let playing = false;

    if (!btn || !frame) return;

    btn.addEventListener("click", function () {
        playing = !playing;
        if (playing) {
            // Autoplay só funciona após o clique (regra do navegador)
            frame.src = baseSrc + "&autoplay=1";
            cd.classList.add("spinning");
            btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            btn.setAttribute("aria-label", "Pausar música");
        } else {
            frame.src = baseSrc;
            cd.classList.remove("spinning");
            btn.innerHTML = '<i class="fa-solid fa-play"></i>';
            btn.setAttribute("aria-label", "Tocar música");
        }
    });
})();
