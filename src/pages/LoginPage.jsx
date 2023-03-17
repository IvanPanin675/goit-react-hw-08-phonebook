import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/authSelector';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const navigate = useNavigate();
  
  if (isUserLogin === true) {
    navigate('/contacts');
  }

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const oldUser = {
      email,
      password,
    };
    dispatch(login(oldUser));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User email:
        <input
          onChange={onHandleChange}
          value={email}
          name="email"
          type="text"
          placeholder="User email"
          required
        />
      </label>
      <label>
        Password:
        <input
          onChange={onHandleChange}
          value={password}
          name="password"
          type="text"
          placeholder="Password"
          required
        />
      </label>
      <button>Login</button>
    </form>
  );
};
