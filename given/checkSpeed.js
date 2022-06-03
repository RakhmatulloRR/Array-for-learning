// tezlik cheklovi -> 70km/soat
// 5 km/soat -> 1 point
// 12 point -> guvohnoma olib qo'yiladi
let speed = 149;
console.log(checkSpeed(speed));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function checkSpeed(speed) {
  const SPEED_LIMIT = 70;
  const KM_PER_POINT = 5;
  const MAX_POINTS = 12;
  
  if (speed < SPEED_LIMIT) {
    return "OK";
  } else {
    let points = (speed - SPEED_LIMIT) / KM_PER_POINT;
    if (points >= MAX_POINTS) {
      return "Guvohnoma olib qo'yiladi";
    }
    return Math.floor(points);
  }
}


