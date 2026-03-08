import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { useEffect } from "react";
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import APropos from "./pages/APropos";
import Diplomes from "./pages/Diplomes";
import Experiences from "./pages/Experiences";
import TableauE5 from "./pages/TableauE5";
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
        <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-warm-50 to-white">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<APropos />} />
              <Route path="/diplomes" element={<Diplomes />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/tableau-e5" element={<TableauE5 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
