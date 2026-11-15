import { getCurrentState, stations } from './main.js';

const songNameLabel = document.getElementById('songName');
const artistNameLabel = document.getElementById('artistName');
const logo = document.getElementById('logo').content.cloneNode(true);
logo.src = "media/S1OT_holiday_logo.png";
document.body.appendChild(logo);

let currentSelectedRadio = "S1OT"
let state = getCurrentState(stations[currentSelectedRadio]); // All the information about the song, including how far into it
let lastSyncedAt = Date.now(); // The last time (Unix) it was synced
let initialTimestamp = state.timestamp; // How far we are into the song the last time we checked
songNameLabel.textContent = state.song.title
artistNameLabel.textContent = state.song.artist

const S1OTbutton = document.getElementById('S1OT');
S1OTbutton.addEventListener('click', function(event) {
  currentSelectedRadio = "S1OT";
  state = getCurrentState(stations[currentSelectedRadio]);
  lastSyncedAt = Date.now();
  initialTimestamp = state.timestamp;
  songNameLabel.textContent = state.song.title
  artistNameLabel.textContent = state.song.artist
  logo.src = "media/S1OT_holiday_logo.png";
  player.loadVideoById(state.song.link);
});

const S1FWbutton = document.getElementById('S1FW');
S1FWbutton.addEventListener('click', function(event) {
  currentSelectedRadio = "S1FW";
  state = getCurrentState(stations[currentSelectedRadio]);
  lastSyncedAt = Date.now();
  initialTimestamp = state.timestamp;
  songNameLabel.textContent = state.song.title
  artistNameLabel.textContent = state.song.artist
  logo.src = "media/S1FW_logo.png";
  player.loadVideoById(state.song.link);
});

const S1CFbutton = document.getElementById('S1CF');
S1CFbutton.addEventListener('click', function(event) {
  currentSelectedRadio = "S1CF";
  state = getCurrentState(stations[currentSelectedRadio]);
  lastSyncedAt = Date.now();
  initialTimestamp = state.timestamp;
  songNameLabel.textContent = state.song.title
  artistNameLabel.textContent = state.song.artist
  logo.src = "media/S1FW_logo.png";
  player.loadVideoById(state.song.link);
});


function getExpectedTimestamp() {
  return initialTimestamp + (Date.now() - lastSyncedAt);
}

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

const container = document.createElement("div");
container.id = "youtube-player";
document.body.appendChild(container);

let player;

window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player("youtube-player", {
    width: "600",
    height: "320",
    videoId: state.song.link,

    playerVars: {
      autoplay: 1,
      controls: 1
    },

    events: {
      onReady: (event) => {
        console.log("Player ready!");
      },

      onStateChange: (event) => {
        console.log("Player state:", event.data);
      }
    }
  });
};

setInterval(() => {
  const currentExpectedTimestamp = getExpectedTimestamp();
  if (currentExpectedTimestamp >= state.song.length) {
    state = getCurrentState(stations[currentSelectedRadio]);
    lastSyncedAt = Date.now();
    initialTimestamp = state.timestamp;
    songNameLabel.textContent = state.song.title
    artistNameLabel.textContent = state.song.artist
    player.loadVideoById(state.song.link);
  }
  if (player.getPlayerState() === YT.PlayerState.PAUSED) {
    player.playVideo();
  }
  const currentTime = player.getCurrentTime()*1000;
  if (Math.abs(currentTime-currentExpectedTimestamp) > 2000) {
    player.seekTo(currentExpectedTimestamp/1000, true);
  }
  if (player.getPlaybackRate() !== 1) {
    player.setPlaybackRate(1);
  }
}, 500);
