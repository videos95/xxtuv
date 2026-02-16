const feed = document.getElementById("feed");

const livePositions = [4,7,10,14,17];
const channelNames = ["Alexza xxmim","Mira Johans","Sophie L","Emma Stone","Olivia K","Liam M","Noah D","Ava H","Ethan P","Isla F"];

const videoTitles = [
  "Lost in Your Dangerous Eyes",
  "One Night of Endless Desire",
  "When Your Touch Sets Me on Fire",
  "Whisper My Name in the Dark",
  "Crazy Nights, Sweeter Mornings",
  "Your Lips, My Favorite Addiction",
  "Wrapped in Your Wild Embrace",
  "A Kiss That Burns Forever",
  "Temptation Under the Moonlight",
  "Between Love and Lust",
  "Your Body Close, My Heart Racing",
  "Heat Rising in Silent Nights",
  "The Way You Make Me Melt",
  "Forbidden Love, Unstoppable Passion",
  "Holding You Till Sunrise",
  "Sparks Fly When We Collide",
  "Drunk on Your Love and Touch",
  "In Your Arms, I Lose Control",
  "Passion Written on Our Skin",
  "One Touch, A Thousand Feelings 🔥"
];

// 🔥 ২০টা আলাদা thumbnail image links
const thumbs = [
  "https://i.postimg.cc/wjKtYdhT/xn-14-t.jpg",
  "https://i.postimg.cc/4y73j8yC/xn-21-t.jpg",
  "https://i.postimg.cc/kgd5hvm3/xn-22-t-(1).jpg",
  "https://i.postimg.cc/rwcrtkz5/xv-17-t.jpg",
  "https://i.postimg.cc/J4Cy9L3W/xn-4-t-(2).jpg",
  "https://i.postimg.cc/D0kZkrXq/xn-10-t.jpg",
  "https://i.postimg.cc/SN4sgGqK/xn-11-t-(1).jpg",
  "https://i.postimg.cc/VN2snq4g/xn-10-t-(3).jpg",
  "https://i.postimg.cc/3NF3sPhb/xn-7-t.jpg",
  "https://i.postimg.cc/BnVJf5WJ/xn-30-t.jpg",
  "https://i.postimg.cc/Y0MHzbFQ/xn-10-t-(1).jpg",
  "https://i.postimg.cc/GhMCvPmJ/xn-8-t.jpg",
  "https://i.postimg.cc/BQ7rjqmm/xn-1-t.jpg",
  "https://i.postimg.cc/DzLHp1nx/xn-4-t-(3).jpg",
  "https://i.postimg.cc/d19Xwv7d/xn-4-t.jpg",
  "https://i.postimg.cc/1RJTdm1Z/xn-10-t-(2).jpg",
  "https://i.postimg.cc/GhffcXpN/xn-15-t.jpg",
  "https://i.postimg.cc/W3sW9K9p/xn-22-t.jpg",
  "https://i.postimg.cc/d31WFCcC/xv-3-t.jpg",
  "https://i.postimg.cc/Pqj2x9n7/xv-13-t.jpg"
];

for(let i=1;i<=20;i++){
  const card = document.createElement("div");
  card.className = "video-card";

  const thumbWrapper = document.createElement("div");
  thumbWrapper.className = "thumb-wrapper";

  const img = document.createElement("img");
  img.className = "video-thumb";
  img.src = thumbs[i-1]; // ২০টা আলাদা thumbnail

  const play = document.createElement("div");
  play.className = "play-btn";

  thumbWrapper.appendChild(img);
  thumbWrapper.appendChild(play);

  if(livePositions.includes(i)){
    const live = document.createElement("div");
    live.className = "live-badge";
    live.innerText = "LIVE";
    thumbWrapper.appendChild(live);
  }

  card.appendChild(thumbWrapper);

  const title = document.createElement("div");
  title.className = "video-title";
  title.innerText = videoTitles[i-1]; // ২০টা title অনুযায়ী
  card.appendChild(title);

  const chInfo = document.createElement("div");
  chInfo.className = "channel-info";

  const chLeft = document.createElement("div");
  chLeft.className = "channel-left";

  const chLogo = document.createElement("img");
  chLogo.className = "channel-logo";
  chLogo.src = thumbs[i-1]; // logo জন্য same thumbnail

  const chName = document.createElement("div");
  chName.className = "channel-name";
  chName.innerText = channelNames[Math.floor(Math.random()*channelNames.length)];

  chLeft.appendChild(chLogo);
  chLeft.appendChild(chName);
  chInfo.appendChild(chLeft);

  const stats = document.createElement("div");
  stats.className = "video-stats";
  const randomViews = Math.floor(Math.random()*900)+100;
  const randomHours = Math.floor(Math.random()*24)+1;
  stats.innerText = `${randomViews}K views • ${randomHours} hours ago`;
  chInfo.appendChild(stats);

  card.appendChild(chInfo);

  feed.appendChild(card);
}
