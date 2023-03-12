import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/contacts">Contacts</NavLink>
      <nav>
        <ul>
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
