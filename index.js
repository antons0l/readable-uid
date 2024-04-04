const _ = require('lodash');

const words = ['sunny', 'bright', 'clear', 'dark', 'gloomy', 'shiny', 'sparkling', 'dull', 'radiant', 'mystic', 'calm', 'stormy', 'windy', 'breezy', 'chilly', 'frosty', 'fiery', 'icy', 'warm', 'cool', 'autumn', 'spring', 'summer', 'winter', 'water', 'fire', 'earth', 'air'];

function RUID({ wordCount = 2, useNumbers = false } = {}) {
  let ids = [];
  for (let i = 0; i < wordCount; i++) {
    ids = _.concat(ids, words[Math.floor(Math.random() * words.length)]);
  }
  if (useNumbers) {
    ids = _.concat(ids, Math.floor(Math.random() * 100).toString());
  }
  return ids.join('-');
}

module.exports = RUID;