function insertionSort(array) {
   let i;
   let j;

   for (i = 1; i < array.length; i++) {
      for (j = 0; j < i; j++) {
         console.log(array);
         if (array[i] < array[j]) {
            const [item] = array.splice(i, 1);
            array.splice(j, 0, item);
         }
      }
   }
   return array;
}

const numbers = [10, 5, 2, 6, 2, 1, 4];
insertionSort(numbers);