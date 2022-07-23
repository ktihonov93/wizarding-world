import "./SearchPanel.css";

export const SearchPanel = ({callback}) => {
  return (
    <input
      className="search__input"
      type="text"
      placeholder="Search"
      onChange={(e) => callback(e.target.value.trim())}
    />
  );
};
