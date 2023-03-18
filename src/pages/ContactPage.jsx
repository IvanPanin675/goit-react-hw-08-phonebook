import FormAddContact from 'components/FormAddContact/FormAddContact';
import FilterSearch from 'components/FilterSearch/FilterSearch';

import { selectAllContacts } from 'redux/contactsSlice/contactsSelector';

import Loader from 'modules/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import ContactsList from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contactsSlice/contactsOperations';

export const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(selectAllContacts);
  const loader = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <FormAddContact />
      {(loader && <Loader />) ||
        (contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <FilterSearch />
            <ContactsList />
          </>
        ))}
    </>
  );
};
