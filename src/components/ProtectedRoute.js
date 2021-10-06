import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, path, isPrivate, ...rest }) => {
  let authorization = false;
  if (localStorage.getItem("token")) {
    authorization = true;
  }
  return (
    <Route
      path={path}
      render={(props) =>
        !authorization ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export default ProtectedRoute;
