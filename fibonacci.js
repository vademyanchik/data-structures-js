// start from 0, recursion f(n) => f(n-1) + f(n-2);

// bad
function fibNaive(n) {
   if (n <= 1) {
      return n
   }

   return fibNaive(n - 1) + fibNaive(n - 2);
}

// console.log(fibNaive(50));

// better
// console.log(fibNaive(3));

function fibEffective(n) {
   const array = [];

   array[0] = 0;
   array[1] = 1;

   for (let i = 2; i <= n; i++) {
      array[i] = array[i - 1] + array[i - 2];
   }
   return array[n]
}

// console.log(fibEffective(3))

// memoization
function fibMemoize(n, mem) {
   if (mem[n] !== -1) {
      return mem[n]
   }

   if (n <= 1) {
      return n
   }

   let result = fibMemoize(n - 1, mem) + fibMemoize(n - 2, mem);

   mem[n] = result;

   return result;
}

/* const fib = 89;
const memo = new Array(100);
memo.fill(-1);
console.log(fibMemoize(fib, memo)); */
