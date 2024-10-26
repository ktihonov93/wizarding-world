import { history } from "../../slices/history";
import { useAppDispatch, useAppSelector } from "../../shared/api/lib/store";
import "./SearchPanel.css";

type Props = {
  callback: (arg: string) => void;
};

export const SearchPanel = ({ callback }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const historyItem = useAppSelector((state) => state.history?.historyItem);

  return (
    <input
      className="search__input"
      type="text"
      defaultValue={historyItem ? historyItem : ""}
      placeholder="Search"
      onChange={(e) => {
        callback(e.target.value.trim());
        dispatch(history(e.target.value.trim()));
      }}
    />
  );
};
