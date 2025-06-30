
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import CV from "./pages/CV";
import Parcours from "./pages/Parcours";
import Filiere from "./pages/Filiere";
import APropos from "./pages/APropos";
import Experiences from "./pages/Experiences";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-gradient-to-br from-warm-50 to-white">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Accueil />} />
                  <Route path="/projets" element={<Projets />} />
                  <Route path="/cv" element={<CV />} />
                  <Route path="/parcours" element={<Parcours />} />
                  <Route path="/filiere" element={<Filiere />} />
                  <Route path="/apropos" element={<APropos />} />
                  <Route path="/experiences" element={<Experiences />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
