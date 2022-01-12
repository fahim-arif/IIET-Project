import React from "react";
import Link from "next/link";

function Breadcrumb(props) {
  return (
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="breadcrumb-wrap">
              {props.child ? <h2>{props.child.toUpperCase()}</h2> : <h2>{props.page.toUpperCase()}</h2>}
              <ul className="breadcrumb-links">
                <li>
                  <Link href={`/`}>Home</Link>
                  <i className="bx bx-chevron-right" />
                </li>
                {props.parent && (
                  <li>
                    {props.parent}
                    <i className="bx bx-chevron-right" />
                  </li>
                )}
                <li>
                  {props.page}
                  {props.child ? <i className="bx bx-chevron-right" /> : null}
                </li>
                {props.child && <li>{props.child}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
