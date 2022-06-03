function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "son emas"; // agar berilgan son number bo'lmasa qolgan shartlarni  tekshirb o'tirishning ham keragi yoq.
  } else if (input % 3 === 0 && input % 5 === 0) {
    return "fizzBuzz";
  } else if (input % 3 === 0) {
    return "fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else {
    return input;
  }
}
console.log(fizzBuzz("k"));

// input 3 ga bo'linsa, fizz qaytadi
// input 5 ga bo'linsa, buzz qaytadi
// input 3 ga ham 5 ga ham bo'linsa fizzBuzz qaytadi

// input 3 ga ham 5 ga ham bo'linmasa input qaytadi qaytadi
// input son bo'lmasa 'son emas' qaytadi.
