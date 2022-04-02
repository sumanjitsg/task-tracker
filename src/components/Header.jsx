import Button from './Button';

import PropTypes from 'prop-types';

function Header({ title, btnState, onClick }) {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        text={btnState ? 'Close' : 'Add'}
        color={btnState ? 'red' : 'green'}
        onClick={onClick}
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnState: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;