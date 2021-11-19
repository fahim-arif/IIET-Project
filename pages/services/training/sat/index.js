import React from 'react'
import SatData from "../../../../components/pages/sat/SatData";
import Headers from "../../../../components/common/headers";
import Footers from "../../../../components/common/footers";
import Breadcrumb from "../../../../components/pages/services/Breadcrumb";

function Sat() {
    return (
        <>
      <Headers />
      <Breadcrumb parent="services" page="training" child="sat" />
      <SatData />
      <Footers />
    </>
    )
}

export default Sat
