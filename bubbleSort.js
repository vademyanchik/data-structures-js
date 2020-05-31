function bubbleSort(array) {
   let swapped = false;

   do {
      swapped = false;

      array.forEach((item, index) => {
         console.log(array)
         if (item > array[index + 1]) {
            const temporary = item;

            array[index] = array[index + 1];
            array[index + 1] = temporary;
            swapped = true;
         }
      })
   } while (swapped)
   return array;
}

console.log(bubbleSort([10, 4, 1, 6]));
