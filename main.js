const stations = {
  S1OT: {
    frequency: 104.5,
    songs: [
      { title: "Stateside", artist: "PinkPantheress, Zara Larsson", length: 193000, link: "lIxQe1R5hs0", weight: 60 },
      { title: "hate that i made you love me", artist: "Ariana Grande", length: 197000, link: "v1t4MTqdfyI", weight: 50 }
    ]
  }
};

const mb32=s=>{let a=0;for(let c of s)a=Math.imul(31,a)+c.charCodeAt(0)|0;return t=>(a=a+1831565813|0,t=Math.imul(a^a>>>15,1|a),t=t+Math.imul(t^t>>>7,61|t)^t,(t^t>>>14)>>>0)/2**32};

function getBlockStart(timestamp) {
    return Math.floor(timestamp / 21600000) * 21600000;
}

function selectWeightedSong(songs, random) {
    let totalWeight = 0;
    for (const song of songs) {
        totalWeight += song.weight;
    }
    const randomNum = random() * totalWeight;
    let currentWeight = 0;

    for (const song of songs) {
        currentWeight += song.weight;

        if (randomNum < currentWeight) {
            return song;
        }
    }
}

function getListFromBlock(station, block) {
  // Block: The beginning of the 6 hour block in Unix milliseconds seconds
  const seed = `${station.frequency}-${block}`
  const applicableWindow = 21480000; // 5:58 hours
  const blockPlaylist = [];
  const random = mb32(seed)
  let simulatedTime = block; // The time elapsed as we reconstruct the sequence beginning at block in Unix milliseconds

  while (simulatedTime < (block+applicableWindow)) {
    const remaining = block+applicableWindow-simulatedTime; // How much more time playtime is left in the block
    const eligibleSongs = station.songs.filter(song => song.length <= remaining);
    if (eligibleSongs.length === 0) break;
    const song = selectWeightedSong(eligibleSongs, random);
    blockPlaylist.push({...song, startTime: simulatedTime, endTime: simulatedTime+song.length});
    simulatedTime += song.length;
  }
  return blockPlaylist;
}

function getCurrentState(station, time = Date.now()) {
  const block = getBlockStart(time);
  const playlist = getListFromBlock(station, block)
  const currentSong = playlist.find(song => time >= song.startTime && time < song.endTime);
  if (!currentSong) {
    return {
      song: null,
      timestamp: null
    };
  }
  return {
    song: currentSong,
    timestamp: time - currentSong.startTime
  };
}

export { getCurrentState, stations };
