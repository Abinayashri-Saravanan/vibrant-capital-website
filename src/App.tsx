import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Investments from "./pages/Investments";

import Sectors from "./pages/Sectors";
import ForInvestors from "./pages/ForInvestors";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            {/* English */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/for-investors" element={<ForInvestors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />

            {/* Arabic mirrors - reuse same pages; content switches via context */}
            <Route path="/ar" element={<Index />} />
            <Route path="/ar/about" element={<About />} />
            <Route path="/ar/investments" element={<Investments />} />
            <Route path="/ar/sectors" element={<Sectors />} />
            <Route path="/ar/for-investors" element={<ForInvestors />} />
            <Route path="/ar/contact" element={<Contact />} />
            <Route path="/ar/legal" element={<Legal />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
