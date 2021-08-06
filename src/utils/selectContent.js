const songs = require("../content")

function getRandomPick(list) {
  return Math.floor(Math.random() * list.length);
}

function selectContent() {
  const contentIndex = getRandomPick(songs);
  const pick = songs[contentIndex];
  //console.log("//// SONG NAME: ", pick.name);
  return pick;
}

module.exports = selectContent;