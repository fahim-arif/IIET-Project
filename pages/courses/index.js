import React from 'react';

import Headers from "../../components/common/headers";
import Footers from "../../components/common/footers";
import Breadcrumb from '../../components/pages/services/Breadcrumb';

function Courses() {
    return (
        <>
            <Headers/>
            <Breadcrumb page="Courses" />
            <Footers />
        </>
    )
}

export default Courses;
