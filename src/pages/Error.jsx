import React from "react";
import { useRouteError, Link } from "react-router-dom";
import "../App.css";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">

      <h1 className="error-code">
        {error?.status || 404}
      </h1>

      <h2 className="error-title">
        {error?.statusText || "Oops! Something went wrong 😵"}
      </h2>

      <p className="error-desc">
        {error?.data || "The page you’re looking for doesn’t exist or an unexpected error occurred."}
      </p>

      <div className="btn-group">
        <Link to="/" className="btn primary">
          Go Home
        </Link>

        
      </div>

    </div>
  );
}

export default Error;