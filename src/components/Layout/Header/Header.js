import { NavLink } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import HeaderIcon from './HeaderIcon';
import HeaderLogo from './HeaderLogo';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import HomeIconImage from '../../../assets/icons/home.svg';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <span className={classes.nav}>
        <NavLink to="/">
          <HeaderIcon src={HomeIconImage} alt="Home icon" />
        </NavLink>
        <HeaderLink>Rooms</HeaderLink>
        <HeaderLink>Treatments</HeaderLink>
      </span>
      <span className={classes.logo}>
        <NavLink to="/">
          <HeaderLogo />
        </NavLink>
      </span>
      <span className={classes.nav}>
        <HeaderCartButton onClick={props.onShowCart} />
      </span>
    </header>
  );
};

export default Header;