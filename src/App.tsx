import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import APropos from "./pages/APropos";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col w-full">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/apropos" element={<APropos />} />
              <Route path="/contact" element={<Contact />} />
              {/* Anciennes pages retirées : on renvoie vers la page la plus proche */}
              <Route path="/veille" element={<Navigate to="/apropos" replace />} />
              <Route path="/tableau-e5" element={<Navigate to="/projets" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
