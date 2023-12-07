// TicTacToeLogic.js

import { useEffect, useState } from 'react';

const useTicTacToe = () => {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isWinnerPopupOpen, setIsWinnerPopupOpen] = useState(false);


  useEffect(() => {
    const calculateWinner = () => {
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
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }

      if (board.every((square) => square !== null)) {
        return 'Draw';
      }

      return null;
    };

    const winnerResult = calculateWinner();
    if (winnerResult) {
      setWinner(winnerResult);
    }
  }, [board]);

  const getStatus = () => {
    if (winner && !isWinnerPopupOpen) {
      setIsWinnerPopupOpen(true);
    }
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'Draw';
    } else {
      return `Next Player: ${turn ? 'X' : 'O'}`;
    }
    
  };

  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = turn ? 'X' : 'O';
    setBoard(newBoard);
    setTurn(!turn);
  };

  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(true)
    setWinner(null)
  }
  const handlePopupClose = () => {
    setIsWinnerPopupOpen(false);
    resetGame();
  };

  return {
    turn,
    board,
    winner,
    getStatus,
    handleClick,
    resetGame,
    handlePopupClose,
    isWinnerPopupOpen,
  };
};

export default useTicTacToe;
