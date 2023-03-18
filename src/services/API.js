import authInstance from './auth';

export const getAllContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const addContact = async id => {
  const { data } = await authInstance.post('/contacts', id);
  return data;
};

export const deleteContact = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
