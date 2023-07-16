import css from './contactList.module.css';
import {
  phonebookContactSelector,
  phonebookFilterSelector,
} from 'redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/phonebook/phonebooSlice';

const ContactList = () => {
  const contactState = useSelector(phonebookContactSelector);
  const filterState = useSelector(phonebookFilterSelector);
  const dispatch = useDispatch();

  const onDeleteContact = e => {
    dispatch(removeContact(e.target.id));
  };

  return (
    <ul className={css.contacts__list}>
      {contactState.map(data => {
        if (filterState === '') {
          return (
            <li key={data.id} id={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                className={css.contacts__btn}
                type="button"
                onClick={onDeleteContact}
              >
                delete
              </button>
            </li>
          );
        }
        if (data.name.toLowerCase().includes(filterState.toLowerCase())) {
          return (
            <li key={data.id} id={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                className={css.contacts__btn}
                type="button"
                onClick={onDeleteContact}
              >
                delete
              </button>
            </li>
          );
        }
        return '';
      })}
    </ul>
  );
};

export default ContactList;
