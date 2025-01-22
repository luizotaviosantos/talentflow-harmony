import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JobSearch from "./pages/JobSearch";
import WhatsAppGroups from "./pages/WhatsAppGroups";
import FreeAnalysis from "./pages/careers/FreeAnalysis";
import LinkedIn from "./pages/careers/LinkedIn";
import InterviewSimulation from "./pages/careers/InterviewSimulation";
import CareerBoost from "./pages/careers/CareerBoost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buscar-vagas" element={<JobSearch />} />
          <Route path="/grupos-whatsapp" element={<WhatsAppGroups />} />
          <Route path="/carreiras/analise-gratuita" element={<FreeAnalysis />} />
          <Route path="/carreiras/linkedin" element={<LinkedIn />} />
          <Route path="/carreiras/simulacao-entrevista" element={<InterviewSimulation />} />
          <Route path="/carreiras/potencialize" element={<CareerBoost />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;