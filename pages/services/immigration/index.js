import React from 'react';

import Headers from "../../../components/common/headers";
import Footers from "../../../components/common/footers";
import Breadcrumb from '../../../components/pages/services/Breadcrumb';
import ImmigrationData  from '../../../components/pages/immigration/Immigration';

function Immigration() {
    return (
        <>
            <Headers/>
                <Breadcrumb parent="services" page="immigration" />
                <ImmigrationData />
            <Footers />
        </>
    )
}

export default Immigration;
