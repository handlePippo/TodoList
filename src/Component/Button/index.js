import "./index.scss";

const Button = ({ name, handleClick, isDisabled = false }) => {
  return (
    <button className='btn' onClick={handleClick} disabled={isDisabled}>
      {name}
    </button>
  );
};

export default Button;
