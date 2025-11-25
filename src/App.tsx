import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BookRepair from "./pages/BookRepair";
import DeviceRepairs from "./pages/DeviceRepairs";
import IPhoneScreenRepair from "./pages/IPhoneScreenRepair";
import IPhoneBatteryReplacement from "./pages/IPhoneBatteryReplacement";
import SamsungRepair from "./pages/SamsungRepair";
import IPadRepair from "./pages/IPadRepair";
import MacBookRepair from "./pages/MacBookRepair";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/book-repair" element={<BookRepair />} />
            <Route path="/device-repairs" element={<DeviceRepairs />} />
            <Route path="/iphone-screen-repair-brooklyn" element={<IPhoneScreenRepair />} />
            <Route path="/iphone-battery-replacement-brooklyn" element={<IPhoneBatteryReplacement />} />
            <Route path="/samsung-repair-brooklyn" element={<SamsungRepair />} />
            <Route path="/ipad-repair-brooklyn" element={<IPadRepair />} />
            <Route path="/macbook-repair-brooklyn" element={<MacBookRepair />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
