/* eslint-disable react/prop-types */

const Square = ({ index, className, onClick, value }) => {
  return (
    <div id={index} style={{color:value==="X"?'#0f0':'aqua'}} className={className} onClick={() => onClick(index)}>
      {value}
    </div>
  );
};

export default Square;
