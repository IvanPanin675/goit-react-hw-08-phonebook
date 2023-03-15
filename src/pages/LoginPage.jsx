import { useState } from 'react';




export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <form>
      <label>
        {' '}
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
        {' '}
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
      <button>Register</button>
    </form>
  );
};
