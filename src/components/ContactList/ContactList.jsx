import Contact from "../Contact/Contact";

export default function ContactList({ contacts, icons, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            icons={icons}
            onDelete={onDeleteContact}
          />
          ;
        </li>
      ))}
    </ul>
  );
}
