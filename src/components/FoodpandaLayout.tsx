import { Outlet } from "react-router-dom";
import FoodpandaHeader from "./FoodpandaHeader";
import FoodpandaFooter from "./FoodpandaFooter";

const FoodpandaLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <FoodpandaHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <FoodpandaFooter />
    </div>
  );
};

export default FoodpandaLayout;
