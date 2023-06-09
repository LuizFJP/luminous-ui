import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../view/login/Login";
import Home from "../view/home/Home";
import CadUser from "../view/cadUser/CadUser";
import WhiteTax from "../view/whiteTax/WhiteTax";
import AuthVerify from "../view/auth/AuthVerify";
import CadAddress from "../view/cadAddress/CadAddress";
import { AddressContextProvider } from "../states/AddressContext";
import Profile from "../view/profile/Profile";
import EnergyBill from "../view/energyBill/EnergyBill";
import EnergyBillCadastro from "../view/energyBill/EnergyBillCadastro";
import { CurrentAddressProvider } from "../states/CurrentAddressContext";
import AddressIntegration from "../view/addressIntegrations/AddressIntegration";
import ConsumptionAlert from "../view/ConsumptionAlert/ConsumptionAlert";
import ConsumptionAlertCadastro from "../view/ConsumptionAlert/ConsumptionAlertCadastro";
import Tip from "../view/tip/Tip";
import PasswordRecover from "../view/password/PasswordRecover";
import PasswordSent from "../view/password/PasswordSent";
import PasswordReset from "../view/password/PasswordReset";
import AddressCadastro from "../view/Address/AddressCadastro";
import AddressEditar from "../view/Address/AddressEditar";
import AddressConsumptionReport from "../view/Address/AddressConsumptionReport";

export default function Router() {
  return (
    <AddressContextProvider>
      <CurrentAddressProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CadUser />} />
        <Route path="/register-address" element={<CadAddress />} />
        <Route path="/white-taxes" element={<WhiteTax />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/integracoes/" element={<AddressIntegration/>}/>
        <Route path="/energyBill/" element={<EnergyBill/>}/>
        <Route path="/energyBill/cadastro/" element={<EnergyBillCadastro/>}/>
        <Route path="/consumption-alert/" element={<ConsumptionAlert/>}/>
        <Route path="/consumption-alert/cadastro/" element={<ConsumptionAlertCadastro/>}/>
        <Route path="/login/tip" element={<Tip />}/>
        <Route path="/password/recover" element={<PasswordRecover />}/>
        <Route path="/password/sent" element={<PasswordSent />}/>
        <Route path="/password/reset" element={<PasswordReset />}/>
        <Route path="/address/cadastro" element={<AddressCadastro />}/>
        <Route path="/address/alterar/:id" element={<AddressEditar />} />
        <Route path="/report/address/:id" element={<AddressConsumptionReport />} />
      </Routes>
      </CurrentAddressProvider>
      <AuthVerify />
    </AddressContextProvider>
  );
}
