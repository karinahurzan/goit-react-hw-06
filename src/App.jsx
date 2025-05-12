import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const icons = {
  IoMdContact,
  FaPhoneAlt,
};

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList icons={icons} />
    </div>
  );
}

export default App;
