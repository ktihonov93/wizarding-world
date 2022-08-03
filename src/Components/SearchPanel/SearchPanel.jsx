import { useDispatch } from "react-redux";
import { history } from "../../slices/history";
import "./SearchPanel.css";

export const SearchPanel = ({callback}) => {
  const dispatch = useDispatch();

  return (
    <input
      className="search__input"
      type="text"
      placeholder="Search"
      onChange={(e) => {
        callback(e.target.value.trim())
        dispatch(history(e.target.value.trim() ))
      }}
    />
  );
};
