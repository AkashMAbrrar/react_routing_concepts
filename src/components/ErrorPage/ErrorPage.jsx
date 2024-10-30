import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Ooops!</h2>
      <h1>404</h1>
      <h2>There is no items available for this page</h2>
      <i>{error.statusText || error.message}</i>
      {error.status === 404 && (
        <div>
          <h3>Page Not Found</h3>
          <p>Please Go Back Where You From</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
