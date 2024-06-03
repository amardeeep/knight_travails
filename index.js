import { graphF } from "./graph.js";
//to convert given coordinates into graph(array) index
function indexConverter(i, j) {
  return i * 8 + j;
}
//to convert index back to coordinates
function coordinates(index) {
  let i = parseInt(index / 8);
  let j = index % 8;
  return [i, j];
}
//queueObject function
function queueObject(index, previous, cost) {
  return {
    index: index,
    move: graphF[index],
    previous: previous,
    cost: cost,
  };
}
//knightMoves function
function knightMoves(arrayStart, arrayEnd) {
  let startIndex = indexConverter(arrayStart[0], arrayStart[1]);
  let finalIndex = indexConverter(arrayEnd[0], arrayEnd[1]);
  if (startIndex == finalIndex) {
    return "Starting Point and final Point are same, hence no steps needed!";
  }
  let queue = [];
  let pathAndCost = [];
  //output path function that displays the output moves and total steps
  function outputPath(pathAndCost, index, cost) {
    console.log(
      "The number of steps needed is " + cost + " and the path is as follows:"
    );
    let outputArray = [];
    function generatePath(pathAndCost, index, cost) {
      let temp = index;
      let level = cost;
      while (level >= 0) {
        for (let entry of pathAndCost) {
          if (entry.current == temp && entry.cost == level) {
            outputArray.push(coordinates(temp));
            temp = entry.previous;
            level = level - 1;
          }
        }
      }
      return outputArray;
    }
    generatePath(pathAndCost, index, cost);
    for (let ele of outputArray) {
      console.log(ele);
    }
  }
  function pathCost(index, previous, cost) {
    return {
      current: index,
      previous,
      cost,
    };
  }
  queue.push(queueObject(startIndex, null, 0));
  while (queue[0]) {
    for (let ele of queue[0].move) {
      if (ele == queue[0].previous) {
        continue;
      }
      queue.push(queueObject(ele, queue[0].index, queue[0].cost + 1));
    }
    let dataCurrent = queue.shift();
    let path = pathCost(
      dataCurrent.index,
      dataCurrent.previous,
      dataCurrent.cost
    );
    pathAndCost.push(path);
    if (finalIndex == dataCurrent.index) {
      return outputPath(pathAndCost, dataCurrent.index, dataCurrent.cost);
    }
  }
}
knightMoves([3, 4], [5, 6]);
