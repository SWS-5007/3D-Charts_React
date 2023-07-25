import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Page Not Found</h1>
      <Link className="link-primary" to="/">
        Return Home
      </Link>
    </section>
  );
};

export default NotFound;
