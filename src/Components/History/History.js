import { useSelector } from "react-redux";

export const History = () => {
  const history = useSelector((state) => state.history);
  return (
    <div className="history">
      <h2>History</h2>
      {history.length > 0 && (
        <ul className="history__list">
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
