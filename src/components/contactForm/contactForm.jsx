import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook/phonebooSlice';
import { phonebookContactSelector } from 'redux/phonebook/selectors';

const ContactForm = () => {
  const contactsState = useSelector(phonebookContactSelector);
  const dispatch = useDispatch();

  const formsubmitHandler = event => {
    event.preventDefault();

    const name = event.target.name.value;

    if (
      contactsState
        .map(contact => {
          contact.name.toLowerCase();
        })
        .includes(name.toLowerCase())
    ) {
      return alert(`Name ${name} is already here`);
    }
    dispatch(
      addContact({
        name: name,
        number: event.target.number.value,
      })
    );
    event.currentTarget.reset();
  };
  return (
    <form className={css.phonebookForm} onSubmit={formsubmitHandler}>
      <label className={css.phonebookForm__label}>
        Name
        <input
          className={css.phonebookForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.phonebookForm__label}>
        Number
        <input
          className={css.phonebookForm__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.phonebookForm__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

