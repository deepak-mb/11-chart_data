import React from "react";
import { Link } from "react-router-dom";

export default function Path() {
  return (
    <div className="my-3">
      <Link to="/" className="btn btn-dark mx-2">
        GDP Graph
      </Link>
      <Link to="/battlefield" className="btn btn-dark mx-2">
        Battlefield Stats Graph
      </Link>
    </div>
  );
}
