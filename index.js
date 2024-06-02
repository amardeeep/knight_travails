import { graphF } from "./graph.js";
//to convert given coordinates into graph(array) index
function indexConverter(i, j) {
  return i * 8 + j;
}
//knightMoves function
function knightMoves(arrayStart, arrayEnd) {
  let startIndex = indexConverter(arrayStart[0], arrayStart[1]);
  let finalIndex = indexConverter(arrayEnd[0], arrayEnd[1]);
  let queue = [];
  queue.push(graphF[startIndex]);
  console.log(queue);
  while (queue) {
    for (let ele of queue[0]) {
      queue.push(graphF[ele]);
    }
    console.log(queue);
    break;
  }
}
knightMoves([3, 4], [5, 5]);
