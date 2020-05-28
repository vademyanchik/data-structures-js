// Graph a collection of nodes, nodes may point to other nodes, know as edges

function createNode(key) {
   const neighbors = [];

   return {
      key,
      neighbors,
      addNeighbor(node) {
         neighbors.push(node)
      }
   }
}

function createGraph(directed = false) {
   const nodes = [];
   const edges = [];

   return {
      directed,
      nodes,
      edges,

      addNode(key) {
         nodes.push(createNode(key))
      },

      getNode(key) {
         return nodes.find(node => node.key === key)
      },

      addEdge(node1key, node2key) {
         const node1 = this.getNode(node1key);
         const node2 = this.getNode(node2key);

         node1.addNeighbor(node2);
         edges.push(`${node1key}-${node2key}`);

         if (!directed) {
            node2.addNeighbor(node1)
         }
      },

      print() {
         return nodes.map(({key, neighbors}) => {
            let result = key;

            if(neighbors.length) {
               result += ` => ${neighbors.map(neighbor => neighbor.key).join(' ')}`
            }

         return result;
         }).join('\n');
      },
   }
}

const graph = createGraph(true);

graph.addNode('Test1');
graph.addNode('Test2');
graph.addNode('Test3');
graph.addNode('Test4');

graph.addEdge('Test1', 'Test2');

console.log(graph.print());