import PropTypes from 'prop-types';

function Button({ text, color, onClick }) {
  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={onClick} > {text}</button >
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default Button;