import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
// import css from "../components/FormAddContact/Form.module.css"



export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const newUser = {
      name, email, password
    };
    dispatch(signup(newUser));
      // navigate('/contacts');
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>
        {' '}
        User name:
        <input
          onChange={onHandleChange}
          value={name}
          name="name"
          type="text"
          placeholder="User Name"
          required
        />
      </label>
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
      <button>Registration</button>
    </form>
  );
};
