import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const PrivateRoute = ({ children, nav }: any) => {
  const cookie = new Cookies();
  const token = cookie.get("TOKEN");
  return token ? <>{children}</> : <Navigate to={nav} />;
};

export default PrivateRoute;
