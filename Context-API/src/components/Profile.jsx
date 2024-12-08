import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center shadow-md">
        Please login
      </div>
    );

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-blue-800 mb-2">
        Welcome, {user.username}!
      </h1>
      <p className="text-sm text-gray-700">
        <strong>Your password:</strong> {user.password}
      </p>
    </div>
  );
};

export default Profile;
