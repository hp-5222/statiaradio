let mostRecentInput = document.getElementById("firstInput");

async function getLength(videoIds) {
  videoIds = videoIds.map(id => {const match = id.match(/(?:youtube\.com\/(?:watch\?.*?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})|^([a-zA-Z0-9_-]{11})$/) 
  return match?.[1] || match?.[2] || id;});
  const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoIds.join("")}&key=${"AIzaSyCOC9QiOneczitWPxOzSbZIRcefi6hfGjY"}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  if (!response.ok) { throw new Error(data.error?.message || "YouTube API error"); }
  if (!data.items || data.items.length === 0) { throw new Error("No videos found"); }

  return data.items.map(video => ({
    title: video.snippet.title,
    artist: video.snippet.channelTitle,
    length: Temporal.Duration.from(video.contentDetails.duration).total({ unit: "millisecond" }),
    link: video.id
  }));
}

function cleanTitle(title, artist) {
  return title.replace(/\([^)]*\)/g, "").replace(/[-–—]/g, "").replace(new RegExp(artist.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "").replace(/\s+/g, " ").trim();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.target.tagName === 'INPUT') {
    const newInput = document.createElement("input");
    mostRecentInput.after(newInput);
    newInput.focus()
    mostRecentInput = newInput;
  }
});

const done = document.getElementById("done");
done.addEventListener('click', async () => {
  const inputs = [...document.querySelectorAll("input")];
  const videoIds = inputs.map(input => input.value.trim()).filter(Boolean);
  const batches = [];
  for (let i = 0; i < videoIds.length; i += 50) { batches.push(videoIds.slice(i, i + 50)); }
  try {
    const videos = [];
    for (const batch of batches) { const results = await getLength(batch); videos.push(...results); }
    const formatted = videos.map(video => {
      const title = (video.title, video.artist);
      return `  { title: ${JSON.stringify(title)}, artist: ${JSON.stringify(video.artist)}, length: ${video.length}, link: ${JSON.stringify(video.link)}, weight: 1 },`;}).join("\n");
    console.log("----- GENERATED -----");
    console.log(formatted);
    console.log("----- REVIEW ORIGINALS -----");
    console.table(videos);
    let output = document.getElementById("output");
    if (!output) {
      output = document.createElement("textarea");
      output.id = "output";
      output.style.width = "100%";
      output.style.height = "300px";
      document.body.appendChild(output);
    }
    output.value = formatted;
  } catch (error) {
    console.error(error);
  }
});
