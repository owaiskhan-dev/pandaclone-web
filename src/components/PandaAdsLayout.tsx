import { Outlet } from "react-router-dom";
import PandaAdsHeader from "./PandaAdsHeader";
import PandaAdsFooter from "./PandaAdsFooter";

const PandaAdsLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PandaAdsHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <PandaAdsFooter />
    </div>
  );
};

export default PandaAdsLayout;