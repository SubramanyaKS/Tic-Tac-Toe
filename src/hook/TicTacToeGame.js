import { useState, useEffect } from 'react';
import { calculateWinner } from '../utils/helper';

const useTicTacToeGame = (isMinVersion) => {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isWinnerPopupOpen, setIsWinnerPopupOpen] = useState(false);


  useEffect(() => {
    const result = calculateWinner(board);
    console.log("Result",result)

    if (result) {
      setWinner(result);
      if (!isMinVersion && !isWinnerPopupOpen) {
        setIsWinnerPopupOpen(true);
      }
      if (!isWinnerPopupOpen && result!=null ) {
        setIsWinnerPopupOpen(true);
      }
    } else if (!turn && isMinVersion) {
      makeAIMove();
    }
    
  }, [board, turn, isMinVersion, isWinnerPopupOpen]);

  const makeMove = (index) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = turn ? 'X' : 'O';
    setBoard(newBoard);
    // console.log(newBoard)
    // console.log(board)
    setTurn(!turn);
  };

  const makeAIMove = () => {
    const bestMove = getBestMove();
    makeMove(bestMove);
    // console.log(board)
  };

  const getBestMove = () => {
    // console.log("called")
    const availableMoves = getAvailableMoves(board);
    let bestScore = -Infinity;
    let bestMove = null;

    availableMoves.forEach((move) => {
      const newBoard = board.slice();
      newBoard[move] = 'O';
      const score = minimax(newBoard, 0, false);
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    });
    // console.log(bestMove)
    return bestMove;
  };

  const getAvailableMoves = (currentBoard) => {
    return currentBoard.reduce((moves, value, index) => {
      if (value === null) {
        moves.push(index);
      }
      return moves;
    }, []);
  };

  const minimax = (currentBoard, depth, isMaximizing) => {
    const result = calculateWinner(currentBoard);
    if (result === 'X') {
      return -1;
    } else if (result === 'O') {
      return 1;
    } else if (result === 'Draw') {
      return 0;
    }

    const availableMoves = getAvailableMoves(currentBoard);

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];
        const newBoard = currentBoard.slice();
        newBoard[move] = 'O';
        const score = minimax(newBoard, depth + 1, false);
        bestScore = Math.max(bestScore, score);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];
        const newBoard = currentBoard.slice();
        newBoard[move] = 'X';
        const score = minimax(newBoard, depth + 1, true);
        bestScore = Math.min(bestScore, score);
      }
      return bestScore;
    }
  };

  const getStatus = () => {
    if (winner && !isMinVersion && !isWinnerPopupOpen) {
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

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(true);
    setWinner(null);
    setIsWinnerPopupOpen(false);
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
  const handleClickAI = (index) => {
    makeMove(index);
  };

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
    handleClickAI,
  };
};

export default useTicTacToeGame;
