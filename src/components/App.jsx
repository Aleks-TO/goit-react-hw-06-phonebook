import css from './app.module.css';
import ContactForm from './contactForm/contactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';

const App = () => {
  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.phonebook__contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
