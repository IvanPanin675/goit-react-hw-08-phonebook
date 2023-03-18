import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelector';
import css from "./UserMenu.module.css"

export const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.emailUser}>{email}</p>
      <button onClick={onLogout} className={css.uMBtn}>Logout</button>
    </div>
  );
};
