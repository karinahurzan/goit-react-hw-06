export default function SearchBox({ filter, onFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
