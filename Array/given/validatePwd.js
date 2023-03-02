 
const inTxt = "p@Sword1234";

function validatePassword(inTxt) {
  let len = inTxt.length >= 6;
  let abc = "qwertyuiopasdfghjklzxcvbnm";
  let ABC = abc.toUpperCase();
  let nums = "0123456789";
  let chars = `\`~!@#$%^&*()-=_+:;"'<>?,./`;
  
  let lower = false;
  let upper = false;
  let num = false;
  let char = false;

  for (let i = 0; i < inTxt.length; i++) {
    const ltr = inTxt[i];
    if (abc.includes(ltr)) lower = true;
    if (ABC.includes(ltr)) upper = true;
    if (nums.includes(ltr)) num = true;
    if (chars.includes(ltr)) char = true;
  }
  console.log(len, lower, upper, num, char);
  if (len && lower && upper && num && char) {
    return true;
  } else {
    return false;
  }
}
console.log(validatePassword(inTxt));
