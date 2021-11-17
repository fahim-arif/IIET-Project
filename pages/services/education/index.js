import React from 'react';
import EducationData from "../../../components/pages/education/Education";
import Headers from "../../../components/common/headers";
import Footers from "../../../components/common/footers";
import Breadcrumb from '../../../components/pages/services/Breadcrumb';

function Education() {
    return (
        <>
            <Headers/>
            <Breadcrumb parent="services" page="education"/>
            <EducationData />
            <Footers />
        </>
    )
}

export default Education;
