import React from "react";
import ToeflData from "../../../../components/pages/toefl/ToeflData";
import Headers from "../../../../components/common/headers";
import Footers from "../../../../components/common/footers";
import Breadcrumb from "../../../../components/pages/services/Breadcrumb";

function Toefl() {
  return (
    <>
      <Headers />
      <Breadcrumb parent="services" page="training" child="toefl" />
      <ToeflData />
      <Footers />
    </>
  );
}

export default Toefl;
