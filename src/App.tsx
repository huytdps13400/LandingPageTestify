import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { SupportPage } from "./components/SupportPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/terms-of-use" replace />} />
        <Route path="/terms-of-use" element={<PrivacyPolicyPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
