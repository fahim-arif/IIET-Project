import React from 'react';

import Headers from "../../../components/common/headers";
import Footers from "../../../components/common/footers";
import Breadcrumb from '../../../components/pages/services/Breadcrumb';

function Gallery() {
    return (
        <>
            <Headers/>
            <Breadcrumb parent="information" page="Gallery"/>
            <Footers />
        </>
    )
}

export default Gallery;
