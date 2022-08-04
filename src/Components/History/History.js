import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { historyItem } from "../../slices/history";

export const History = () => {
  const history = useSelector((state) => state.history.history);
  const dispatch = useDispatch();
  console.log("history", history);

  const putValueToInput = (item) => {
    dispatch(historyItem(item));
  };

  return (
    <div className="history">
      <h2>History</h2>
      {history.length > 0 && (
        <ul className="history__list">
          {history.map((item, index) => (
            <li key={index}>
              <Link to={"/"} onClick={() => putValueToInput(item)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
