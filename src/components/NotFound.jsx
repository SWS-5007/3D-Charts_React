import React from "react";
import { Link } from "react-router-dom";

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
