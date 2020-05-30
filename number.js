// create max number from array random of numbers

const createMaxNumber = (arr) => {
   const maxNumber = [];
   const acc = arr;

   for (let i = 0; i = acc.length; i++) {
      const maxValue = Math.max.apply(null, acc);
      const index = acc.indexOf(maxValue);
      acc.splice(index, 1);
      maxNumber.push(maxValue)
   }

   return maxNumber.join('');
}

console.log(createMaxNumber([2, 3, 3, 4, 1, 9]))