import { Navigate, Route, Routes } from "react-router-dom";
import PhoneFrame from "./components/layout/PhoneFrame";
import Home from "./pages/Home";
import ShopPage from "./pages/Shop/ShopPage";
import EmiDues from "./pages/EmiDues";
import Limit from "./pages/Limit";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <PhoneFrame>
      <Routes>
        {/* Land on Shop — that is the assignment's focus. */}
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/emi-dues" element={<EmiDues />} />
        <Route path="/limit" element={<Limit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
    </PhoneFrame>
  );
}
