import React from "react";
import { Link, withRouter } from "react-router-dom";
import pathIcon from "../../../assets/Path (1).png";
import "./BreadCrumb.css";

const Breadcrumbs = ({ breadcrumbs, ...props }) => {
  return (
    <>
      <div className="breadcrumbs-container">
        {breadcrumbs.length > 1 &&
          breadcrumbs.map(({ path, name }, index) => (
            <>
              <Link
                to={{ pathname: path, search: props.location.search }}
                className="breadcrumb"
                key={`${index}-${Math.random()}-${path}`}
              >
                {name}
              </Link>
              <img className="pathIcon" src={pathIcon} />
            </>
          ))}
      </div>
    </>
  );
};

export default withRouter(Breadcrumbs);
