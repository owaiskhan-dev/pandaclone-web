import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import FoodpandaLayout from "./components/FoodpandaLayout";
import PandaAdsLayout from "./components/PandaAdsLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsroomPage from "./pages/NewsroomPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";
import PandaAdsHomePage from "./pages/pandaads/PandaAdsHomePage";
import PandaAdsSolutionsPage from "./pages/pandaads/PandaAdsSolutionsPage";
import PandaAdsResourcesPage from "./pages/pandaads/PandaAdsResourcesPage";
import PandaAdsInsightsPage from "./pages/pandaads/PandaAdsInsightsPage";
import PandaAdsCaseStudiesPage from "./pages/pandaads/PandaAdsCaseStudiesPage";
import PandaAdsNewsroomPage from "./pages/pandaads/PandaAdsNewsroomPage";
import PandaAdsToolsPage from "./pages/pandaads/PandaAdsToolsPage";
import PandaAdsContactPage from "./pages/pandaads/PandaAdsContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          {/* Foodpanda Routes */}
          <Route element={<FoodpandaLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          
          {/* PandaAds Routes */}
          <Route element={<PandaAdsLayout />}>
            <Route path="/pandaads" element={<PandaAdsHomePage />} />
            <Route path="/pandaads/solutions" element={<PandaAdsSolutionsPage />} />
            <Route path="/pandaads/resources" element={<PandaAdsResourcesPage />} />
            <Route path="/pandaads/resources/insights" element={<PandaAdsInsightsPage />} />
            <Route path="/pandaads/resources/case-studies" element={<PandaAdsCaseStudiesPage />} />
            <Route path="/pandaads/resources/newsroom" element={<PandaAdsNewsroomPage />} />
            <Route path="/pandaads/tools" element={<PandaAdsToolsPage />} />
            <Route path="/pandaads/contact" element={<PandaAdsContactPage />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;