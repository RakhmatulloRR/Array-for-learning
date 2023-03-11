String.prototype.concat1 = function (...str) {
  concat_str = this;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    concat_str += str[i];
  }
  return concat_str;
};
const txt1 = 'Hello';
const txt2 = 'World!';
const text = txt1.concat1(' +sss ', txt2);
console.log(text);
