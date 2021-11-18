import React from "react";
import PteData from "../../../../components/pages/pte/PteData";
import Headers from "../../../../components/common/headers";
import Footers from "../../../../components/common/footers";
import Breadcrumb from "../../../../components/pages/services/Breadcrumb";

function Pte() {
  return (
    <>
      <Headers />
      <Breadcrumb parent="services" page="training" child="pte" />
      <PteData />
      <Footers />
    </>
  );
}

export default Pte;
