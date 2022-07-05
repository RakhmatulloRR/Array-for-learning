/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let nums = 0;
  let key;
  if (ruleKey === 'type') key = 0;
  else if (ruleKey === 'color') key = 1;
  else key = 2;

  for (let i = 0; i < items.length; i++) {
    if (items[i][key] === ruleValue) nums++;
  }
  return nums;
};

let items = [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'phone'],
    ['phone', 'gold', 'iphone'],
  ],
  ruleKey = 'type', // type, color, name
  ruleValue = 'phone'; // phone, blue, pixel
countMatches(items, ruleKey, ruleValue);
