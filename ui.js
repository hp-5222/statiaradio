import { getCurrentState, stations } from './main.js';

const songNameLabel = document.getElementById('songName');
const artistNameLabel = document.getElementById('artistName');
const logo = document.getElementById('logo').content.cloneNode(true).querySelector('img');
const stationsConfig = {
  S1OT: { logo: "S1OT_holiday_logo.png" },
  S1FW: { logo: "S1FW_logo.png" },
  S1CF: { logo: "S1FW_logo.png" }
};
document.getElementById('nowPlaying').after(logo);

function getStationFromURL() {
  const params = new URLSearchParams(window.location.search);
  const redirectedStation = params.get("station");
  const stationId = redirectedStation || window.location.pathname.replace("/statiaradio/", "").replace(/\/$/, "");
  return stations[stationId] && stationsConfig[stationId] ? stationId : "S1OT";
}

const stationFromURL = getStationFromURL();
if (new URLSearchParams(window.location.search).has("station")) { history.replaceState(null, "", `${"/statiaradio/"}${stationFromURL}`); }

let currentSelectedRadio = getStationFromURL();
let state = getCurrentState(stations[currentSelectedRadio]); // All the information about the song, including how far into it
let lastSyncedAt = Date.now(); // The last time (Unix) it was synced
let initialTimestamp = state.timestamp; // How far we are into the song the last time we checked
let playerReady = false;
songNameLabel.textContent = state.song.title
artistNameLabel.textContent = state.song.artist
logo.src = `${"/statiaradio/"}media/${stationsConfig[currentSelectedRadio].logo}`;

function switchStation(stationId, updateURL = true) {
  if (!stations[stationId] || !stationsConfig[stationId]) {return;}

  currentSelectedRadio = stationId;
  state = getCurrentState(stations[stationId]);
  lastSyncedAt = Date.now();
  initialTimestamp = state.timestamp;

  songNameLabel.textContent = state.song.title;
  artistNameLabel.textContent = state.song.artist;
  logo.src = `${"/statiaradio/"}media/${stationsConfig[stationId].logo}`;

  if (playerReady) {
    player.loadVideoById(state.song.link);
  }

  if (updateURL && window.location.pathname !== `/${stationId}`) {
    history.pushState(null, "", `${"/statiaradio/"}${stationId}`);
  }
}

Object.keys(stationsConfig).forEach(stationId => {
  const button = document.getElementById(stationId);
  if (!button) return;
  button.addEventListener('click', () => {switchStation(stationId);});
});

window.addEventListener('popstate', () => {switchStation(getStationFromURL(), false);});

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
        playerReady = true;
        event.target.loadVideoById(state.song.link);
      },

      onStateChange: (event) => {
        console.log("Player state:", event.data);
      }
    }
  });
};

setInterval(() => {
  if (!playerReady) return
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
