import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Homepage from "../Components/homepage";
import SitewidePasskey from "../Components/SitewidePasskey";
import Paymentportal from "../Components/Paymentportal";
import Beneficiary from "../Components/Beneficiaryportal";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<SitewidePasskey/>} exact={true}/>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/payment" element={<Paymentportal/>} />
        <Route path="/Beneficiary" element={<Beneficiary/>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
