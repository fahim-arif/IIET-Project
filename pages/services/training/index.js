import React from 'react';

import Headers from "../../../components/common/headers";
import Footers from "../../../components/common/footers";
import Breadcrumb from '../../../components/pages/services/Breadcrumb';

function Training() {
    return (
        <>
            <Headers/>
            <Breadcrumb parent="services" page="Training" />
            <Footers />
        </>
    )
}

export default Training;
