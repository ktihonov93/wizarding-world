import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { historyItem } from "../../slices/history";

export const History = () => {
  const history = useSelector((state) => state.history.history);
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/wizarding-world/login" />;
  }

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
              <Link to={"/wizarding-world/index.html"} onClick={() => putValueToInput(item)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
