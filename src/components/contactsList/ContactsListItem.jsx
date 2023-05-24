import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '350px',
        justifyContent: 'space-between',
      }}
    >
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        style={{
          padding: '5px',
          width: '100px',
          height: '30px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
