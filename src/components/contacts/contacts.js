import Header from '../header/header';
import  '../contacts/contacts.css';
import FormBlock from '../formBlock/formBlock';

function Contacts() {
  return (
    <div className="Contacts">
      <header >
        <Header/>
      </header>
      <FormBlock/>
      <main className="Contacts-main">
        <div className="Contacts-block">
          <p className="Contacts-block__text">Контакты</p>
        </div>
      </main>
    </div>
  );
}

export default Contacts;
