function graph() {
  function adjacencyObject(i, j) {
    const arrOperations = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [2, -1],
      [-2, 1],
      [1, -2],
      [-1, -2],
      [-2, -1],
    ];
    let arrMoves = [];
    function validMove(xi, yi) {
      for (let ele of arrOperations) {
        let xf = xi + ele[0];
        let yf = yi + ele[1];
        if (xf < 8 && xf > 0 && yf < 8 && yf > 0) {
          arrMoves.push([xf, yf]);
        }
      }
      return arrMoves;
    }
    validMove(i, j);
    return arrMoves;
  }
  let graph = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      graph.push(adjacencyObject(i, j));
    }
  }
  return graph;
}
var graphF = graph();
//to convert given coordinates into graph(array) index
function indexConverter(i, j) {
  return i * 8 + j;
}
export { graphF, indexConverter };
