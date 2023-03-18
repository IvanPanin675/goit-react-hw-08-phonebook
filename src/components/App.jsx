import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Loyaut/Loyaut';
import { ContactPage } from 'pages/ContactPage';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { current } from 'redux/auth/authOperations';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
