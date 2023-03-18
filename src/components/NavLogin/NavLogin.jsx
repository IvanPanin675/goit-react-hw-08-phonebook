import { NavLink } from 'react-router-dom';
import css from "./NavLogin.module.css";


export const NavLogin = () => {
  return (
        <ul className={css.ulNavi}>
          <li>
            <NavLink className={css.links} to="/register">Registration</NavLink>
          </li>
          <li>
            <NavLink className={css.links} to="/login">Login</NavLink>
          </li>
        </ul>
  );
};