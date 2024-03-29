var ind1=0;
var ind2=0;
var ind3=0;
export const winnerIndex=()=>{
  return [ind1,ind2,ind3]
}
export const calculateWinner = (currentBoard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        // console.log("ABC",a,b,c)
        ind1=a;
        ind2=b;
        ind3=c;
        return currentBoard[a];

      }
    }

    if (currentBoard.every((square) => square !== null)) {
      return 'Draw';
    }

    return null;
  };