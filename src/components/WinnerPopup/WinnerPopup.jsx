/* eslint-disable react/prop-types */
import Button from '../Button/Button';
import './winnerPopup.css';

const WinnerPopup = ({ winner, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Game Over!</h2>
        {winner === 'Draw' ? (
          <h4>It &apos;s a draw!</h4>
        ) : (
          <h4>{`Player ${winner} wins!`}</h4>
        )}
        <Button className={'button'} onClick={onClose} title="New Game"/>
      </div>
    </div>
  );
};

export default WinnerPopup;
