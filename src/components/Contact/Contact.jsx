import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, id, icons }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <div>
        <h3>
          <icons.IoMdContact /> {name}
        </h3>
        <p>
          <icons.FaPhoneAlt /> {number}
        </p>
      </div>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
}
