import React from 'react';
import Link from "next/link";

function Breadcrumb(props) {
    return (
        <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>{props.page}</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link href={`/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    {props.parent && <li>{props.parent}
                                    <i className="bx bx-chevron-right" /></li>}
                                    <li>{props.page}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Breadcrumb;
