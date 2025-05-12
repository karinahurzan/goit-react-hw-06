export default function Contact({ name, number, id, onDelete, icons }) {
  return (
    <div>
      <div>
        <h3>
          <icons.IoMdContact />
          {name}
        </h3>
        <p>
          <icons.FaPhoneAlt />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
}
