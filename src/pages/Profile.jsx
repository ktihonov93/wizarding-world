import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const Profile = () => {
  console.log("in profile");
  const { user: currentUser } = useSelector((state) => state.auth);
  useSelector((state) => console.log(state.auth));
  console.log("currentUser", typeof currentUser);

  if (!currentUser) {
    console.log("redirect");
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
    </div>
  );
};
export default Profile;

Profile.propTypes = {
  state: PropTypes.object
};