import React from 'react';
import IeltsData from "../../../../components/pages/ielts/IeltsData";
import Headers from "../../../../components/common/headers";
import Footers from "../../../../components/common/footers";
import Breadcrumb from '../../../../components/pages/services/Breadcrumb';

function Ielts() {
    return (
        <>
            <Headers/>
            <Breadcrumb parent="services" page="training" child="ielts"/>
            <IeltsData />
            <Footers />
        </>
    )
}

export default Ielts;
