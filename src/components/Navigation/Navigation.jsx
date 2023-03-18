import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavLogin } from 'components/NavLogin/NavLogin';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './navigation.module.css';
import { isUserLogin } from 'redux/auth/authSelector';

export const Navigation = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      <nav className={css.navi}>
        {isLogin && <NavLink className={css.contacts} to="/contacts">Contacts</NavLink>}
        {isLogin ? <UserMenu /> : <NavLogin />}
      </nav>
    </div>
  );
};
