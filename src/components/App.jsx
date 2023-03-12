import { Route, Routes } from 'react-router-dom';
import { Layout } from './Loyaut/Loyaut';
import { ContactPage } from 'pages/ContactPage';


import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contactsSlice/contactsSelector';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contactsSlice/contactsOperations';


export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<ContactPage />} />
          

        </Route>
    </Routes>
  );
}
