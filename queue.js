// FIFO Queue

function createQueue() {
   const queue = [];

   return {
     enqueue(item) {
       return queue.unshift(item);
     },
     dequeue(item) {
       return queue.pop(item);
     },
     peek() {
       return queue[queue.length - 1];
     },
     isEmpty() {
        return queue.length === 0;
     },
   };
 }

/*  const q = createQueue();
 q.enqueue('1');
 q.enqueue('2');

console.log(q.peek()); */

module.exports.createQueue = createQueue;
