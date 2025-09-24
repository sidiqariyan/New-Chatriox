import "./global.css";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";

// New App Components (Marketing/Public Pages)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AssistantWidget from "@/components/AssistantWidget";
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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import PaymentSuccess from "./components/PaymentSuccess";
import EmailSender from "./components/EmailSender";
import GmailSender from "./components/GmailSender";
import WhatsAppSender from "./components/WhatsAppSender";
import MailScraper from "./components/MailScraper";
import EmailValidation from "./components/EmailValidation";
import Accounts from "./components/Accounts";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Register from "./components/Register";
import EmailVerification from "./components/EmailVerification";
import Plans from "./components/Plans";
import CheckoutPage from "./components/CheckoutPage";
import EmailTrackingDashboard from "./components/EmailTrackingDashboard";
import AdminDashboard from "./components/AdminDashboard";
import AdminBlog from "./pages/AdminBlog";
import AdminCaseStudies from "./pages/AdminCaseStudies";

// Email Template Builder Components
import { TemplateManager } from "./components/TemplateBuilder";
import { EmailBuilder } from "./components/EmailBuilder";
import { EmailPreview } from "./components/EmailPreview";

const queryClient = new QueryClient();

// Define dashboard routes that should show sidebar and dashboard layout
const DASHBOARD_ROUTES = [
  "/dashboard",
  "/email-sender",
  "/gmail-sender",
  "/payment/success",
  "/whatsapp-sender",
  "/mail-scraper",
  "/email-validation",
  "/email-tracking",
  "/accounts",
  "/settings",
  "/checkout",
  "/admin",
  "/templates",
  "/template-builder",
];

// Layout wrapper that conditionally shows different layouts based on route
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check if current path is a dashboard route
  const isDashboardRoute = DASHBOARD_ROUTES.some((route) =>
    location.pathname.startsWith(route),
  );

  // If it's a dashboard route, show sidebar layout (authenticated users)
  if (isDashboardRoute) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

// Client-side access guard: allow if admin, or active plan, or trial not expired
const RequireAccess: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  const isAdmin = user.role === "admin";
  const isActive = user.planStatus === "active";
  const inTrial =
    user.planStatus === "trial" && (user.trialDaysRemaining ?? 0) > 0;
  if (isAdmin || isActive || inTrial) return <>{children}</>;
  return <Navigate to="/plans" replace />;
};

// Admin-only access guard
const AdminOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  const isAdmin = user.role === "admin";
  if (!isAdmin) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

// Main routes component
const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

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
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
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
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onToggleMode={() => setAuthMode("register")} />
          )
        }
      />
      <Route
        path="/signup"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Register onSwitchToLogin={() => setAuthMode("login")} />
          )
        }
      />
      <Route path="/verify-email" element={<EmailVerification />} />

      {/* Protected Dashboard Routes - only for authenticated users */}
      <Route
        path="/dashboard"
        element={
          user ? (
            <RequireAccess>
              <Dashboard />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/email-sender"
        element={
          user ? (
            <RequireAccess>
              <EmailSender />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/gmail-sender"
        element={
          user ? (
            <RequireAccess>
              <GmailSender />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/payment/success"
        element={user ? <PaymentSuccess /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/whatsapp-sender"
        element={
          user ? (
            <RequireAccess>
              <WhatsAppSender />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/mail-scraper"
        element={
          user ? (
            <RequireAccess>
              <MailScraper />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/email-validation"
        element={
          user ? (
            <RequireAccess>
              <EmailValidation />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/email-tracking"
        element={
          user ? (
            <RequireAccess>
              <EmailTrackingDashboard />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/accounts"
        element={
          user ? (
            <RequireAccess>
              <Accounts />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/settings"
        element={
          user ? (
            <RequireAccess>
              <Settings />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/plans" element={<Plans />} />
      <Route
        path="/checkout"
        element={
          user ? (
            <RequireAccess>
              <CheckoutPage />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/admin"
        element={
          <AdminOnly>
            <AdminDashboard />
          </AdminOnly>
        }
      />
      <Route
        path="/admin/blog"
        element={
          <AdminOnly>
            <AdminBlog />
          </AdminOnly>
        }
      />
      <Route
        path="/admin/case-studies"
        element={
          <AdminOnly>
            <AdminCaseStudies />
          </AdminOnly>
        }
      />

      {/* Email Template Builder Routes */}
      <Route
        path="/templates"
        element={
          user ? (
            <RequireAccess>
              <TemplateManager />
            </RequireAccess>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

import Preloader from "./components/Preloader";

const AppContent: React.FC = () => {
  const { isLoading } = useAuth();
  const appReady = !isLoading;

  return (
    <>
      <Preloader done={appReady} />
      <Router>
        <LayoutWrapper>
          <AppRoutes />
        </LayoutWrapper>
        <AssistantWidget />
      </Router>
    </>
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
