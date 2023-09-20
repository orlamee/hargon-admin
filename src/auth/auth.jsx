import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

const useAuth = () => {
  const user = useSelector(selectUser);

  return {
    isAuthenticated: !!user,
    user,
  };
};

export default useAuth;
