import React from "react";
import GmatData from "../../../../components/pages/gmat/GmatData";
import Headers from "../../../../components/common/headers";
import Footers from "../../../../components/common/footers";
import Breadcrumb from "../../../../components/pages/services/Breadcrumb";

function Gmat() {
  return (
    <>
      <Headers />
      <Breadcrumb parent="services" page="training" child="gmat" />
      <GmatData />
      <Footers />
    </>
  );
}

export default Gmat;
