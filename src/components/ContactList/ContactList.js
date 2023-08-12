import PropTypes from 'prop-types';
import ListModule from './ContactList.module.css';
import AddIcon from '../Icons/addIcon';

export const ListContact = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={ListModule.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={ListModule.item}>
          {name + ': ' + number}
          <button
            type="button"
            className={ListModule.removeButton}
            onClick={() => onRemoveContact(id)}
            aria-label="Delete contact"
          >
            <AddIcon width="45" height="45" />
          </button>
        </li>
      ))}
    </ul>
  );
};

ListContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
