import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilters } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';
import { ContactsListItem } from './ContactsListItem';

export const ContactsList = () => {
  const filter = useSelector(getFilters);
  const contacts = useSelector(getContacts);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
     <ul>
      {filterContacts.map(contact => {
        return (
          <ContactsListItem
            key={contact.id}
            contact={contact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
