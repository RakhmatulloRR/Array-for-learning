const input = [
  ["usd", "buy", 10000],
  ["usd", "sell", 5000],
  ["gbp", "buy", 9000],
  ["eur", "sell", 7000],
  ["uah", "buy", 10000],
  ["usd", "sell", 25000],
];

/* 
const output = {
  buy    sell
  usd: [10000, 30000],
  gbp: [9000, 0],
  eur: [0, 7000],
  uah: [10000, 0],
}; 
*/
function buySell(input) {
  const output = {};
  for (let element of input) {
    const [ctry, bs, val] = element;
    if (!output[ctry]) {
      output[ctry] = bs === "buy" ? [val, 0] : [0, val];
    } else {
      const [b, s] = output[ctry];
      output[ctry] = bs === "buy" ? [b + val, s] : [b, s + val];
    }
  }
  return output;
}

console.log(buySell(input));
