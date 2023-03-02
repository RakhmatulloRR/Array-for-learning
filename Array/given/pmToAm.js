// input:
let pm = "13:02 PM";

function pmToAm(pm) {
  const [time, ext] = pm.split(" ");
  let [hours, minutes] = time.split(":");
  
  if (hours === "12") {
    hours = "00";
  } else if (ext.toLowerCase() === "pm") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}

console.log(pmToAm(pm));

