// input: txt = "JonDoeIsAProgrammer";
// output: "Jon Doe Is A Programmer"

let txt = "JonDoeIsAProgrammer"
function spaceBeforeUpperLetter(txt) {
  let txt2 = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === txt[i].toUpperCase()) {
      txt2 = txt2 + " " + txt[i];
    }
    else{
      txt2 = txt2 + txt[i];
    }
  }
  return txt2;
}
console.log(spaceBeforeUpperLetter(txt));