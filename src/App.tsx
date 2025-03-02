import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import MedicalBilling from "./pages/services_pages/MedicalBilling";
import MedicalCoding from "./pages/services_pages/Medical_Coding";
import CredentialingPage from "./pages/services_pages/Insurance_Credentialing";
import DenialManagementPage from "./pages/services_pages/Denial_Management";
import EligibilityVerification from "./pages/services_pages/Eligibility_Verification";
import RCMServices from "./pages/services_pages/RCM";
import Clients from "./pages/Clients";
import HealthcareSystems from "./pages/clients_pages/Healthcare_Systems";
import EmergencyRoom from "./pages/clients_pages/Emergency_Room";
import UrgentCares from "./pages/clients_pages/Urgent_Cares";
import Hospitals from "./pages/clients_pages/Hospitals";
import PrivatePractices from "./pages/clients_pages/Private_Practices";
import ClinicsAndImagingCenters from "./pages/clients_pages/ClinicsImaging_Centers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import {  useLocation } from "react-router-dom";

const queryClient = new QueryClient();


const Layout = () => {
  const location = useLocation(); // useLocation is now inside BrowserRouter
  const excludedRoutes = [
    "/",
    // "/MedicalBilling",
    // "/MedicalCoding",
    // "/CredentialingPage",
    // "/DenialManagementPage",
    // "/EligibilityVerification",
    // "/RCMServices",
  ];

  const showNavbar = !excludedRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col bg-[#D4F6FF] min-h-screen">
      
      {showNavbar ? <Navbar /> : null}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/MedicalBilling" element={<MedicalBilling />} />
            <Route path="/MedicalCoding" element={<MedicalCoding />} />
            <Route path="/CredentialingPage" element={<CredentialingPage />} />
            <Route path="/DenialManagementPage" element={<DenialManagementPage />} />
            <Route path="/EligibilityVerification" element={<EligibilityVerification />} />
            <Route path="/RCMServices" element={<RCMServices />} />
            <Route path="/HealthcareSystems" element={<HealthcareSystems />} />
            <Route path="/EmergencyRoom" element={<EmergencyRoom />} />
            <Route path="/UrgentCares" element={<UrgentCares />} />
            <Route path="/Hospitals" element={<Hospitals />} />
            <Route path="/PrivatePractices" element={<PrivatePractices />} />
            <Route path="/ClinicsAndImagingCenters" element={<ClinicsAndImagingCenters />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout /> {/* Move the routing logic inside Layout */}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
