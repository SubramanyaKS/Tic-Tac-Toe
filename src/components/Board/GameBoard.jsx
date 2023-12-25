/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Square from '../Square/Square';
import WinnerPopup from '../WinnerPopup/WinnerPopup';
import './board.css';
import useTicTacToeGame from '../../hook/TicTacToeGame';
import { AiContext } from '../../context/AIContext';
import Button from '../Button/Button';

const UnifiedBoard = ({ isMinVersion }) => {
  const {
    board,
    winner,
    getStatus,
    handleClick,
    resetGame,
    handlePopupClose,
    isWinnerPopupOpen,
    handleClickAI,
  } = useTicTacToeGame(isMinVersion);
  const { setIsAI } = useContext(AiContext);

  return (
    <div className="container">
      <div className="board-container">
        {winner ? <p style={{ color: "#fff" }}>{winner} wins the game</p> : null}
       {!isMinVersion? <div className="status">
          <h5 className='status'>{getStatus()}</h5>
        </div>:null}
        <div className="board">
          {board.map((value, index) => (
            <Square
              key={index}
              index={index}
              className={`input input${index + 1}`}
              onClick={isMinVersion ? handleClickAI : handleClick}
              value={value}
            />
          ))}
        </div>
        {/* <button className="button reset" onClick={() => resetGame()}>
          Reset
        </button> */}
        <Button classname={'button reset'} onClick={() => resetGame()} title='Reset'/>
        <WinnerPopup
          winner={winner}
          isOpen={isWinnerPopupOpen}
          onClose={handlePopupClose}
        />
        <Button onClick={() => setIsAI(null)} classname={'button'} title='Back to Home'/>
      </div>
    </div>
  );
};

export default UnifiedBoard;