import { HomeDashboardContent } from "../components/HomeDashboardContent";
import { Recommended } from "../components/Recommended";

const HomePage = () => {
  return (
    <div className=" xl:flex xl:gap-4">
      <HomeDashboardContent />
      <Recommended />
    </div>
  );
};

export default HomePage;
