function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//===========================
// 1. Uzduotis

// const pirma = (a, b) => {
//   if (a === b) return 'lygus';
//   return a > b ? a : b;
// };

//===========================
// 2. Uzduotis

// for (let i = 1; i < 11; i++) console.log(i);

//===========================
// 3. Uzduotis

// for (let i = 0; i < 11; i += 2) console.log(i);

//===========================
// 4. Uzduotis

// for (let i = 1; i < 11; i++) {
//   if (i > 5) break;
//   console.log(rand(1, 10));
// }

//===========================
// 5. Uzduotis

// let i = 1;
// while (i < 11) {
//   if (i === 10) {
//     console.log(5);
//     break;
//   }

//   console.log(rand(1, 10));
//   i++;
// }

//===========================
// 6. Uzduotis

// const sesta = () => {
//   const array = [...Array(rand(20, 30))].map((_) => rand(10, 30));
//   let didziausias = 0;

//   for (let i = 0; i < array.length; i++)
//     if (didziausias < array[i]) didziausias = array[i];

//   return didziausias;
// };

// console.log(sesta());

//===========================
// 7. Uzduotis

// const septinta = () => {
//   const letters = 'ABCD';
//   const array = [...Array(100)].map((_) => letters[rand(0, 3)]);
//   console.log(array);

//   const obj = array.reduce((total, curr) => {
//     total[curr] ? total[curr]++ : (total[curr] = 1);
//     return total;
//   }, {});

//   console.log(obj);
// };

// septinta();

//===========================
// 8. Uzduotis

const lygineSuma = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return (a.length + b.length) % 2 !== 0 ? 'Suma nelygine' : a.length + b.length;
  } else if (
    typeof a === 'number' &&
    isFinite(a) &&
    typeof b === 'number' &&
    isFinite(b)
  ) {
    return (a + b) % 2 !== 0 ? 'Suma nelygine' : a + b;
  } else {
    return 'Negalimi variantai';
  }
};

// console.log(lygineSuma(Infinity, NaN));

//===========================
// 9. Uzduotis

// const pirminisSkaicius = (num) => {
//   if (typeof num !== 'number' || !isFinite(num) || num < 2) return false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }

//   return num;
// };
// console.log(pirminisSkaicius(13));

//===========================
// 10. Uzduotis

// const telefonoNumeris = (array) => {
//   if (!Array.isArray(array) && array.length !== 10) return;
//   return `"(${array[0]}${array[1]}${array[2]}) ${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}${array[8]}${array[9]}"`;
// };

// console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
