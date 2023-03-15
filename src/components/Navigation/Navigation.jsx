import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import css from "./navigation.module.css";


export const Navigation = () => {
  return (
    <div className={css.navi}>
      <NavLink to="/contacts">Contacts</NavLink>
      <nav>
        <ul className={css.ulNavi}>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
