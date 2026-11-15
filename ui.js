import { getCurrentState, stations } from './main.js';

let state = getCurrentState(stations.S1OT); // All the information about the song, including how far into it
let lastSyncedAt = Date.now(); // The last time (Unix) it was synced
let initialTimestamp = state.timestamp; // How far we are into the song the last time we checked

function getExpectedTimestamp() {
  return initialTimestamp + (Date.now() - syncedAt);
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
    width: "640",
    height: "360",
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
    state = getCurrentState(stations.S1OT);
    lastSyncedAt = Date.now();
    initialTimestamp = state.timestamp;
  }
}, 1000);
