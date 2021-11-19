import React from "react";
import GreData from "../../../../components/pages/gre/GreData";
import Headers from "../../../../components/common/headers";
import Footers from "../../../../components/common/footers";
import Breadcrumb from "../../../../components/pages/services/Breadcrumb";

function Gre() {
  return (
    <>
      <Headers />
      <Breadcrumb parent="services" page="training" child="gre" />
      <GreData />
      <Footers />
    </>
  );
}

export default Gre;
