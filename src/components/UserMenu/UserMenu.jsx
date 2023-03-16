import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { getUser } from "redux/auth/authSelector";


export const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
