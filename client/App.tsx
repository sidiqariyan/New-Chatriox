import "./global.css";

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { createRoot } from "react-dom/client";

// New App Components (Marketing/Public Pages)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
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

// Old App Components (Dashboard/Authenticated Pages)
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PaymentSuccess from './components/PaymentSuccess';
import EmailSender from './components/EmailSender';
import GmailSender from './components/GmailSender';
import WhatsAppSender from './components/WhatsAppSender';
import MailScraper from './components/MailScraper';
import EmailValidation from './components/EmailValidation';
import Accounts from './components/Accounts';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Register';
import EmailVerification from './components/EmailVerification';
import Plans from './components/Plans';
import CheckoutPage from './components/CheckoutPage';
import EmailTrackingDashboard from './components/EmailTrackingDashboard';
import AdminDashboard from './components/AdminDashboard';

// Email Template Builder Components
import { TemplateManager } from './components/TemplateBuilder';
import { EmailBuilder } from './components/EmailBuilder';
import { EmailPreview } from './components/EmailPreview';


const queryClient = new QueryClient();

// Define dashboard routes that should show sidebar and dashboard layout
const DASHBOARD_ROUTES = [
  '/dashboard',
  '/email-sender',
  '/gmail-sender',
  '/payment/success',
  '/whatsapp-sender',
  '/mail-scraper',
  '/email-validation',
  '/email-tracking',
  '/accounts',
  '/settings',
  '/plans',
  '/checkout',
  '/admin',
  '/templates',
  '/template-builder'
];

// Layout wrapper that conditionally shows different layouts based on route
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Check if current path is a dashboard route
  const isDashboardRoute = DASHBOARD_ROUTES.some(route => 
    location.pathname.startsWith(route)
  );

  // If it's a dashboard route, show sidebar layout (authenticated users)
  if (isDashboardRoute) {
    return (
      <div className="min-h-screen flex flex-col bg-hero-radial">
        <Header />
        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // For non-dashboard routes (marketing/public pages), render with header and footer
  return (
    <div className="min-h-screen flex flex-col bg-hero-radial">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Main routes component
const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <Routes>
      {/* Public Marketing/Homepage Routes - New App Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/bulk-email" element={<BulkEmail />} />
      <Route path="/whatsapp" element={<WhatsApp />} />
      <Route path="/validation" element={<Validation />} />
      <Route path="/ai-analyzer" element={<AIAnalyzer />} />
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
      {/* Auth Routes */}
      <Route 
        path="/login" 
        element={
          user ? <Navigate to="/dashboard" replace /> : 
          <Login onToggleMode={() => setAuthMode('register')} />
        } 
      />
      <Route 
        path="/signup" 
        element={
          user ? <Navigate to="/dashboard" replace /> : 
          <Register onSwitchToLogin={() => setAuthMode('login')} />
        } 
      />
      <Route path="/verify-email" element={<EmailVerification />} />

      {/* Protected Dashboard Routes - only for authenticated users */}
      <Route 
        path="/dashboard" 
        element={user ? <Dashboard /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/email-sender" 
        element={user ? <EmailSender /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/gmail-sender" 
        element={user ? <GmailSender /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/payment/success" 
        element={user ? <PaymentSuccess /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/whatsapp-sender" 
        element={user ? <WhatsAppSender /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/mail-scraper" 
        element={user ? <MailScraper /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/email-validation" 
        element={user ? <EmailValidation /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/email-tracking" 
        element={user ? <EmailTrackingDashboard /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/accounts" 
        element={user ? <Accounts /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/settings" 
        element={user ? <Settings /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/plans" 
        element={user ? <Plans /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/checkout" 
        element={user ? <CheckoutPage /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/admin" 
        element={user ? <AdminDashboard /> : <Navigate to="/login" replace />} 
      />

      {/* Email Template Builder Routes */}
      <Route 
        path="/templates" 
        element={user ? <TemplateManager /> : <Navigate to="/login" replace />} 
      />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const AppContent: React.FC = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <LayoutWrapper>
        <AppRoutes />
      </LayoutWrapper>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Initialize the app
createRoot(document.getElementById("root")!).render(<App />);

export default App;