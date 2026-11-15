const stations = {
  S1OT: {
    frequency: 104.5,
    songs: [
      { title: "Stateside", artist: "PinkPantheress, Zara Larsson", length: 193000, link: "lIxQe1R5hs0", weight: 60 },
      { title: "hate that i made you love me", artist: "Ariana Grande", length: 197000, link: "v1t4MTqdfyI", weight: 50 },
      { title: "Babydoll", artist: "Dominic Fike", length: 99000, link: "nb8CnIo_-_A", weight: 65 },
      { title: "Choosin' Texas", artist: "Ella Langley", length: 201000, link: "hLOheGDwD_0", weight: 20 },
      { title: "Dracula", artist: "Tame Impala, JENNIE", length: 200000, link: "0UPDBODtxzw", weight: 40 },
      { title: "Patient Zero", artist: "Taylor Swift", length: 228000, link: "BpR280fXISA", weight: 35 },
      { title: "Lush Life", artist: "Zara Larsson", length: 201000, link: "tD4HCZe-tew", weight: 45 },
      { title: "petal", artist: "Ariana Grande", length: 184000, link: "Tc-gXkHAri8", weight: 30 },
      { title: "deja vu", artist: "Olivia Rodrigo", length: 216000, link: "fWgboQNNfB8", weight: 10 },
      { title: "stupid song", artist: "Olivia Rodrigo", length: 216000, link: "Rt9tW3cMLhI", weight: 40 },
      { title: "Stop The Wedding!", artist: "Ashe", length: 208000, link: "DLV8FpyxZPQ", weight: 25 },
      { title: "Thriller", artist: "Michael Jackson", length: 201000, link: "4V90AmXnguw", weight: 20 },
      { title: "expectations", artist: "Olivia Rodrigo, Chappell Roan", length: 224000, link: "SmzLX_weRMc", weight: 30 },
      { title: "Housewife", artist: "Tate McRae", length: 209000, link: "DPEodkHzH-s", weight: 40 },
      { title: "The Fate of Ophelia", artist: "Taylor Swift", length: 229000, link: "rbmdfEQODOw", weight: 15 },
      { title: "Flowers", artist: "MILEY", length: 201000, link: "G7KNmW9a75Y", weight: 10 },
      { title: "Bass Persuades", artist: "MILEY", length: 238000, link: "aWpw-Ynl0Yc", weight: 15 },
      { title: "Man I Need", artist: "Olivia Dean", length: 201000, link: "oIv_Y2RPQ_A", weight: 60 },
      { title: "So Easy (To Fall In Love)", artist: "Olivia Dean", length: 196000, link: "3sur4BmjQt8", weight: 55 },
      { title: "ANIMAL", artist: "KATSEYE", length: 191000, link: "m7k9UMcHbr0", weight: 35 },
      { title: "Nicole Kidman", artist: "Adéla", length: 181000, link: "IXA6bQsVNjs", weight: 30 },
      { title: "oh yeah?", artist: "Steve Lacy", length: 169000, link: "yGHEis32s2Y", weight: 30 },
      { title: "Cruel Summer", artist: "Taylor Swift", length: 179000, link: "ic8j13piAhQ", weight: 10 },
      { title: "positions", artist: "Ariana Grande", length: 178000, link: "tcYodQoapMg", weight: 5 },
      { title: "we can't be friends (wait for your love)", artist: "Ariana Grande", length: 177000, link: "UdRAXWNvjzE", weight: 7 },
      { title: "drivers license", artist: "Olivia Rodrigo", length: 242000, link: "2PRvp-mP_q0", weight: 10 },
      { title: "august", artist: "Taylor Swift", length: 264000, link: "nn_0zPAfyo8", weight: 10 },
      { title: "we fell in love in october", artist: "girl in red", length: 187000, link: "iggmiF7DNoM", weight: 7 },
      { title: "Midnight Sun", artist: "Zara Larsson", length: 187000, link: "uvY8fdgezLQ", weight: 25 },
      
      { title: "All I Want For Christmas Is You", artist: "Mariah Carey", length: 242000, link: "aAkMkVFwAoo", weight: 20, special:"holiday"},
      { title: "Christmas Tree Farm", artist: "Taylor Swift", length: 347000, link: "Ozk8xq0Lp1g", weight: 7, special:"holiday"},
      { title: "Snowman", artist: "Sia", length: 172000, link: "gset79KMmt0", weight: 10, special:"holiday"},
      { title: "Santa Tell Me", artist: "Ariana Grande", length: 339000, link: "nlR0MkrRklg", weight: 15, special:"holiday"},
      { title: "Last Christmas", artist: "Wham!", length: 278000, link: "E8gmARGvPlI", weight: 10, special:"holiday"},
      { title: "Underneath the Tree", artist: "Kelly Clarkson", length: 230000, link: "YfF10ow4YEo", weight: 10, special:"holiday"},
      { title: "Rockin' Around The Christmas Tree", artist: "Brenda Lee", length: 128000, link: "TFsZy9t-qDc", weight: 7, special:"holiday"},
      { title: "take me home (4 christmas)", artist: "Olivia Rodrigo", length: 177000, link: "nE_znSndRuQ", weight: 4, special:"holiday"},
    ]  
  },
  S1FW: {
    frequency: 96.3,
    songs: [
      { title: "Choosin’ Texas", artist: "Ella Langley", length: 233000, link: "3s1sZbW7Rt8", weight: 8 }, // AC 
      { title: "Girls Like You", artist: "Maroon 5", length: 216000, link: "ULFXeCsiXUQ", weight: 7 }, // AC
      { title: "Thnks fr th Mmrs", artist: "Fall Out Boy", length: 204000, link: "j7aQDJLjiD4", weight: 7 }, // AC
      { title: "Iris", artist: "Goo Goo Dolls", length: 290000, link: "Dy_eP-mqWow", weight: 6 }, // AC
      { title: "Head Over Feet", artist: "Alanis Morissette", length: 266000, link: "IqVnCj8kuyA", weight: 6 }, // AC
      { title: "Self Esteem", artist: "The Offspring", length: 258000, link: "7ifeDVAE_Zg", weight: 6 }, // AC
      { title: "Breakaway", artist: "Kelly Clarkson", length: 238000, link: "r2QyLA5w3ps", weight: 7 }, // AC
      { title: "Cruel Summer", artist: "Taylor Swift", length: 179000, link: "aC9HkZW2hZk", weight: 6 }, // AC
      { title: "Breathe", artist: "Faith Hill", length: 251000, link: "Mkdo45Y3Hg0", weight: 5 }, // AC
      { title: "Breaking the Habit", artist: "Linkin Park", length: 197000, link: "RwTwd5tAq1U", weight: 6 }, // AC
      { title: "Blinding Lights", artist: "The Weeknd", length: 202000, link: "J7p4bzqLvCw", weight: 8 }, // NW
      { title: "Rio (US Remix)", artist: "Duran Duran", length: 326000, link: "fhJ3PftkIDw", weight: 6 }, // NW
      { title: "Shut Up And Drive", artist: "Rihanna", length: 213000, link: "W-dVPdwVetU", weight: 4 }, // NW
      { title: "Time After Time", artist: "Cyndi Lauper", length: 242000, link: "7wBgcalM4c4", weight: 7 }, // NW
      { title: "Shout", artist: "Tears For Fears", length: 393000, link: "ldAp-mZqAro", weight: 4 }, // NW
      { title: "Don’t You (Forget About Me)", artist: "Simple Minds", length: 261000, link: "Ly61QG9yWOc", weight: 6 }, // NW
      { title: "I Ran (So Far Away)", artist: "A Flock of Seagulls", length: 222000, link: "eIAfNNfaKQ0", weight: 7 }, // NW
      { title: "Tainted Love", artist: "Soft Cell", length: 241000, link: "HnLeHfNiEn0", weight: 6 }, // NW
      { title: "Rebel Yell", artist: "Billy Idol", length: 289000, link: "seHlHzYpWBU", weight: 7 }, // NW
      { title: "White Wedding", artist: "Billy Idol", length: 253000, link: "o5oTrvdNoP4", weight: 6 }, // NW
    ]  
  },
    S1CF: {
    frequency: 101.2,
    songs: [
      { title: "Sensational ", artist: "Chris Brown ft Davido & Lojay", length: 231000, link: "3nqJOc24xjM", weight: 1 },
      { title: "Ojuelegba", artist: "Wizkid ft Drake & Skepta", length: 271000, link: "0xMKf5BiodM", weight: 1},
      { title: "Van Cleef Pt 3", artist: "Manlie Donn", length: 226000, link: "T0hN9NqgIWk", weight: 1},
    ]  
  },
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


function calculateWeight(song, simulatedTime, blockPlaylist) {
    const baseWeight = song.weight;
    const repeatCooldown = 3600000; // 1 hour
    const previousPlays = blockPlaylist.filter(played => played.title === song.title);
    const lastPlayed = previousPlays.length > 0 ? previousPlays[previousPlays.length - 1] : null;

    let recencyMultiplier = 1;

    if (lastPlayed) {
        const timeSinceLastPlay = simulatedTime - lastPlayed.startTime;

        if (timeSinceLastPlay < repeatCooldown) {
            recencyMultiplier = Math.max(0.05,timeSinceLastPlay / repeatCooldown);
        }
    }
  
    let holidayCoefficient = song?.special === "holiday" ? 0 : 1;
    const now = new Date(simulatedTime);
    let christmas = new Date(now.getFullYear(), 11, 25);
    if (now > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const seasonStart = new Date(christmas.getFullYear(), 10, 10);
    const days = Math.ceil((christmas - now) / (1000 * 60 * 60 * 24));
    
    holidayCoefficient = Math.max(0,Math.min(1, (now - seasonStart) / (christmas - seasonStart))) * 10;
  
    return song?.special === "holiday" ? baseWeight * recencyMultiplier * holidayCoefficient : baseWeight * recencyMultiplier
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
    const weightedSongs = eligibleSongs.map(song => ({...song, weight: calculateWeight(song, simulatedTime, blockPlaylist)}));
    const song = selectWeightedSong(weightedSongs, random);
    blockPlaylist.push({...song, startTime: simulatedTime, endTime: simulatedTime+song.length});
    simulatedTime += song.length;
  }
  const tally = Object.values(blockPlaylist.reduce((acc, song) => {
    const key = `${song.title}-${song.artist}`;
    if (!acc[key]) {
      acc[key] = { ...song, plays: 0 };
    }
    acc[key].plays++;
    return acc;
    }, {})
  ).sort((a, b) => b.plays - a.plays);
  
  console.log(tally);
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
