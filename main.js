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
      { title: "drop dead", artist: "Olivia Rodrigo", length: 224000, link: "t_OyQhiqXgA", weight: 35 },
      { title: "the cure", artist: "Olivia Rodrigo", length: 314000, link: "B402rKl4bUg", weight: 7 },
      { title: "maggots for brains", artist: "Olivia Rodrigo", length: 240000, link: "lwiQSOaI_XE", weight: 15 },
      { title: "u + me = <3", artist: "Olivia Rodrigo", length: 247000, link: "p-YnaSsGsPU", weight: 15 },
      { title: "Risk It All", artist: "Bruno Mars", length: 210000, link: "lY5V4hSLWY8", weight: 20 },
      { title: "Ain't In LA", artist: "Adéla", length: 185000, link: "K0CLc_zOWYc", weight: 35 },
      
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
      { title: "Choosin’ Texas", artist: "Ella Langley", length: 233000, link: "3s1sZbW7Rt8", weight: 8, special:"AC" }, // AC 
      { title: "Girls Like You", artist: "Maroon 5", length: 216000, link: "ULFXeCsiXUQ", weight: 7, special:"AC" }, // AC
      { title: "Thnks fr th Mmrs", artist: "Fall Out Boy", length: 204000, link: "j7aQDJLjiD4", weight: 7, special:"AC" }, // AC
      { title: "Iris", artist: "Goo Goo Dolls", length: 290000, link: "Dy_eP-mqWow", weight: 6, special:"AC" }, // AC
      { title: "Head Over Feet", artist: "Alanis Morissette", length: 266000, link: "IqVnCj8kuyA", weight: 6, special:"AC" }, // AC
      { title: "Self Esteem", artist: "The Offspring", length: 258000, link: "7ifeDVAE_Zg", weight: 6, special:"AC" }, // AC
      { title: "Breakaway", artist: "Kelly Clarkson", length: 238000, link: "r2QyLA5w3ps", weight: 7, special:"AC" }, // AC
      { title: "Cruel Summer", artist: "Taylor Swift", length: 179000, link: "aC9HkZW2hZk", weight: 6, special:"AC" }, // AC
      { title: "Breathe", artist: "Faith Hill", length: 251000, link: "Mkdo45Y3Hg0", weight: 5, special:"AC" }, // AC
      { title: "Breaking the Habit", artist: "Linkin Park", length: 197000, link: "RwTwd5tAq1U", weight: 6, special:"AC" }, // AC
      { title: "Blinding Lights", artist: "The Weeknd", length: 202000, link: "J7p4bzqLvCw", weight: 8 }, // NW
      { title: "Rio (US Remix)", artist: "Duran Duran", length: 326000, link: "fhJ3PftkIDw", weight: 6 }, // NW
      { title: "Shut Up And Drive", artist: "Rihanna", length: 213000, link: "W-dVPdwVetU", weight: 4 }, // NW
      { title: "Time After Time", artist: "Cyndi Lauper", length: 242000, link: "7wBgcalM4c4", weight: 7 }, // NW
      { title: "Shout", artist: "Tears For Fears", length: 393000, link: "ldAp-mZqAro", weight: 4 }, // NW
      { title: "Don’t You (Forget About Me)", artist: "Simple Minds", length: 261000, link: "Ly61QG9yWOc", weight: 6, special:"NW" }, // NW
      { title: "I Ran (So Far Away)", artist: "A Flock of Seagulls", length: 222000, link: "eIAfNNfaKQ0", weight: 7 }, // NW
      { title: "Tainted Love", artist: "Soft Cell", length: 241000, link: "HnLeHfNiEn0", weight: 6 }, // NW
      { title: "Rebel Yell", artist: "Billy Idol", length: 289000, link: "seHlHzYpWBU", weight: 7 }, // NW
      { title: "White Wedding", artist: "Billy Idol", length: 253000, link: "o5oTrvdNoP4", weight: 6 }, // NW

      
      { title: "All I Want for Christmas Is You", artist: "Mariah Carey", length: 242000, link: "fRyhqobl0sk", weight: 8, special:"holiday" }, // CM
      { title: "Underneath the Tree", artist: "Kelly Clarkson", length: 230000, link: "thqw3zeTMII", weight: 8, special:"holiday" }, // CM
      { title: "(There’s No Place Like) Home for the Holidays", artist: "Perry Como", length: 172000, link: "cYSczTW_jH4", weight: 6, special:"holiday" }, // CM
      { title: "It’s the Most Wonderful Time of the Year", artist: "Andy Williams", length: 152000, link: "9JQU_3Mx6xY", weight: 7, special:"holiday" }, // CM
      { title: "Sleigh Ride", artist: "Amy Grant", length: 215000, link: "Z_QBbCnOuf0", weight: 7, special:"holiday"}, // CM
      { title: "Happy Holiday / The Holiday Season", artist: "Andy Williams", length: 157000, link: "Bx2YoHZml8I", weight: 7, special:"holiday"}, // CM
      { title: "A Holly Jolly Christmas", artist: "Burl Ives", length: 136000, link: "P_dI6fVZwd0", weight: 7, special:"holiday"}, // CM
      { title: "Do You Hear What I Hear?", artist: "Bing Crosby", length: 166000, link: "FhTnDaEmA5k", weight: 6, special:"holiday"}, // CM
      { title: "Wonderful Christmastime", artist: "Paul McCartney", length: 228000, link: "2TfWo3GsIII", weight: 6, special:"holiday"}, // CM
      { title: "Happy Xmas (War Is Over)", artist: "John Lennon", length: 216000, link: "flA5ndOyZbI", weight: 7, special:"holiday"}, // CM
      { title: "Someday At Christmas", artist: "Stevie Wonder", length: 169000, link: "zvPb0DVveHU", weight: 6, special:"holiday"}, // CM
      { title: "Rockin’ Around The Christmas Tree", artist: "Brenda Lee", length: 127000, link: "O1x-hOOrl5E", weight: 7, special:"holiday"}, // CM
      { title: "The First Noel", artist: "Carrie Underwood", length: 269000, link: "iJfjZeiRi3g", weight: 6, special:"holiday"}, // CM
      { title: "O Holy Night", artist: "Josh Groban", length: 289000, link: "8Uh6X7WB5UE", weight: 6, special:"holiday"}, // CM
      { title: "Hark! The Herald Angels Sing", artist: "Amy Grant", length: 176000, link: "XwcrpDY5rXY", weight: 6, special:"holiday"}, // CM
      { title: "Here Comes Santa Claus (Down Santa Claus Lane)", artist: "Gene Autry", length: 150000, link: "iPi9PSU589k", weight: 7, special:"holiday"}, // CM
      { title: "I Want a Hippopotamus for Christmas (Hippo the Hero)", artist: "Gayla Peevey", length: 156000, link: "faZZ8GWxifw", weight: 6, special:"holiday"}, // CM
      { title: "Joy To The World", artist: "for KING & COUNTRY", length: 236000, link: "2PCC94HC_ag", weight: 7, special:"holiday"}, // CM
      { title: "God Rest Ye Merry Gentlemen", artist: "MercyMe", length: 212000, link: "Upk-WqDX-Fw", weight: 7, special:"holiday"}, // CM
      { title: "Silver Bells", artist: "Jeremy Rosado & Riley Clemmons", length: 195000, link: "hBcjYyJTWXY", weight: 7, special:"holiday"}, // CM
      { title: "O Come, O Come, Emmanuel", artist: "Sovereign Grace Music", length: 297000, link: "-5ULGRTG6A8", weight: 6, special:"holiday"}, // CM
      { title: "Do They Know It’s Christmas?", artist: "Band Aid", length: 223000, link: "XsCbFpn7fDo", weight: 7, special:"holiday"}, // CM
      { title: "Christmas Canon", artist: "Trans-Siberian Orchestra", length: 260000, link: "LgT7MEWMKOk", weight: 7, special:"holiday"}, // CM
      { title: "Little Saint Nick", artist: "The Beach Boys", length: 131000, link: "5dyXN74aZGQ", weight: 7, special:"holiday"}, // CM
      { title: "My Favorite Things", artist: "The Supremes", length: 173000, link: "zC54waT6ccQ", weight: 7, special:"holiday"}, // CM
      { title: "It’s Beginning To Look Like Christmas", artist: "Bing Crosby", length: 167000, link: "d82Xzey-4B4", weight: 7, special:"holiday"}, // CM
      { title: "Winter Wonderland", artist: "Bing Crosby", length: 145000, link: "ngJPlhrd_Iw", weight: 7, special:"holiday"}, // CM
      { title: "White Christmas", artist: "The Drifters", length: 159000, link: "bQ6LIS6m8qE", weight: 7, special:"holiday"}, // CM
      { title: "Have Yourself A Merry Little Christmas", artist: "Frank Sinatra", length: 207000, link: "pvA7-EjaSPI", weight: 6, special:"holiday"}, // CM
      { title: "Santa Tell Me", artist: "Ariana Grande", length: 205000, link: "2TEAh5SHZGs", weight: 7, special:"holiday"}, // CM
      { title: "Jingle Bell Rock", artist: "Bobby Helms", length: 131000, link: "Z0ajuTaHBtM", weight: 7, special:"holiday"}, // CM
      { title: "Last Christmas", artist: "Wham!", length: 263000, link: "GJvGf_ifiKw", weight: 8, special:"holiday"}, // CM
      { title: "Feliz Navidad", artist: "José Feliciano", length: 184000, link: "VAkhdcmbmEc", weight: 7, special:"holiday"}, // CM
      { title: "Christmas (Baby Please Come Home)", artist: "Darlene Love", length: 167000, link: "by-6gww-DHE", weight: 7, special:"holiday"}, // CM
      { title: "Believe", artist: "Josh Groban", length: 259000, link: "3Avycrez66o", weight: 7, special:"holiday"}, // CM
      { title: "Frosty The Snowman", artist: "Kimberly Locke", length: 148000, link: "4ydgcgI1FpI", weight: 7, special:"holiday"}, // CM
      { title: "Christmas Hits Different", artist: "TobyMac & Tasha Layton", length: 209000, link: "DubggyNmioQ", weight: 7, special:"holiday"}, // CM
      { title: "There Is No Christmas Like a Home Christmas", artist: "Perry Como", length: 168000, link: "ljE62n4Iug4", weight: 6, special:"holiday"}, // CM
    ]  
  },
    S1CF: {
    frequency: 101.2,
    songs: [
      { title: "Sensational ", artist: "Chris Brown ft Davido & Lojay", length: 231000, link: "3nqJOc24xjM", weight: 1 },
      { title: "Ojuelegba", artist: "Wizkid ft Drake & Skepta", length: 271000, link: "0xMKf5BiodM", weight: 1},
      { title: "Van Cleef Pt 3", artist: "Manlie Donn", length: 226000, link: "T0hN9NqgIWk", weight: 1},
      { title: "Money Walk", artist: "Skippa", length: 161000, link: "Ybknpf8hqpY", weight: 1},
      { title: "NOKIA", artist: "PARTYNEXTDOOR & DRAKE", length: 241000, link: "rQbyl-p4l_A", weight: 1 },
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
  
    let holidayCoefficient = 1;

    let christmasYear = new Date(simulatedTime).getUTCFullYear();
    let christmas = Date.UTC(christmasYear, 11, 25);
    
    if (simulatedTime > christmas) {
        christmasYear++;
        christmas = Date.UTC(christmasYear, 11, 25);
    }
    
    const seasonStart = Date.UTC(christmasYear, 10, 10);
    
    holidayCoefficient = Math.max(0,Math.min(1,(simulatedTime - seasonStart) / (christmas - seasonStart))) * 15;

    let hour = new Date(simulatedTime).getUTCHours();
    let isNight = hour >= 1 && hour < 11;
    let ACmultiplier = song?.special === "AC" && (isNight) ? 0 : 1;
  
    return song?.special === "holiday" ? baseWeight * recencyMultiplier * holidayCoefficient * ACmultiplier : baseWeight * recencyMultiplier * ACmultiplier
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

function getWeeklyAirplay(stations, weekStart, history = []) {
  const end = weekStart + 7*864e5, data = new Map(), key = s => s.id ?? [s.title,s.artist].map(v => v.normalize("NFKD").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"")).join("|");
  for (const [sid,st] of Object.entries(stations)) for (let b = Math.floor(weekStart/216e5)*216e5; b < end; b += 216e5) for (const s of getListFromBlock(st,b)) if (s.startTime >= weekStart && s.startTime < end) { const id = key(s), r = data.get(id) || {id,title:s.title.trim(),artist:s.artist,link:s.link,plays:0,stations:{}}; r.plays++; r.stations[sid] = (r.stations[sid]||0)+1; data.set(id,r); }
  const prev = history.at(-1)||[], chart = [...data.values()].sort((a,b) => b.plays-a.plays).map((s,i) => { const p = prev.findIndex(x => x.id===s.id), old = p<0?null:prev[p], rank = i+1, ranks = history.map(h => h.findIndex(x => x.id===s.id)+1).filter(n => n>0); return {...s,rank,previousPosition:old?(old.rank??p+1):null,positionChange:old?(old.rank??p+1)-rank:null,playChange:s.plays-(old?.plays||0),newEntry:!old,weeksOnChart:1+ranks.length,peakPosition:Math.min(rank,...ranks)}; });
  return {chart,newEntries:chart.filter(s => s.newEntry),gainers:chart.filter(s => s.positionChange>0).sort((a,b) => b.positionChange-a.positionChange),drops:chart.filter(s => s.positionChange<0).sort((a,b) => a.positionChange-b.positionChange)};
}

const history = []; // Load previous weekly charts here
const report = getWeeklyAirplay(stations, Date.UTC(2026,10,9), history);
console.table(report.chart);
console.log("NEW ENTRIES:",report.newEntries,"GAINERS:",report.gainers,"DROPS:",report.drops);
history.push(report.chart); // Save this for next week

export { getCurrentState, stations };
