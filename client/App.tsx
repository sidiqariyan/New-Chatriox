import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BulkEmail from "./pages/BulkEmail";
import WhatsApp from "./pages/WhatsApp";
import Validation from "./pages/Validation";
import AIAnalyzer from "./pages/AIAnalyzer";
import Templates from "./pages/Templates";
import Enterprise from "./pages/Enterprise";
import Saas from "./pages/Saas";
import Ecommerce from "./pages/Ecommerce";
import Financial from "./pages/Financial";
import Healthcare from "./pages/Healthcare";
import Docs from "./pages/Docs";
import Api from "./pages/Api";
import Status from "./pages/Status";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import SecurityPage from "./pages/SecurityPage";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import HelpCenter from "./pages/HelpCenter";
import Services from "./pages/Services";
import HowToUse from "./pages/HowToUse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-hero-radial">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/bulk-email" element={<BulkEmail />} />
              <Route path="/whatsapp" element={<WhatsApp />} />
              <Route path="/validation" element={<Validation />} />
              <Route path="/ai-analyzer" element={<AIAnalyzer />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/saas" element={<Saas />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/healthcare" element={<Healthcare />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/api" element={<Api />} />
              <Route path="/status" element={<Status />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
