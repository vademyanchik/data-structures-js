// LIFO

function createStack() {
   const array = [];

   return {
      push(item) {
         array.push(item);
      },
      pop() {
         array.pop();
      },
      peek() {
         return array[array.length - 1];
      },
      get length() {
         return array.length;
      },
      isEmpty() {
         return array.length === 0;
      }
   }
};

/* const stack = createStack();

stack.push('1');
stack.push('2');
stack.push('3');

console.log(stack.peek()) */