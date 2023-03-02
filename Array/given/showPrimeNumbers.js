/* 
! O'ziga va birga bo'linadigan sonlar tub sonlar deyiladi.
! Qolganlari murakkab sonlar deyiladi.
  Berilgan chegaragacha bo'lgan 
  barcha tub sonlarni topib beruvchi 
  funksiyani yozing
  1: prime numbers -> tub sonlar
  2: composite numbers -> murakkab sonlar
*/
let limit = 20;
console.log(showPrimeNumbers(limit));
function showPrimeNumbers(limit) {
  let primeNums = [];
  for (let number = 2; number < limit; number++) {
    // let isPrime = true;
    // for (let divisor = 2; divisor < number; divisor++) {
    //   if (number % divisor === 0) {
    //     isPrime = false;
    //     // break;
    //     // savol: break nima uchun ishlatiladi.
    //   }
    // }
    // if (isPrime) primeNums.push(number);
    if (isPrime(number)) primeNums.push(number);
  }
  return primeNums;
}

// topshirip: ichki loop ni alohida isPrime funksiyasiga olib o'ting;

function isPrime(number) {
  let isPrime = true;
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
      // break;
      // savol: break nima uchun ishlatiladi.
    }
  }
  return isPrime;
}
