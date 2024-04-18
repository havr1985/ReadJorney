import { Dashboard } from "./Dashboard"
import { DashboardFooter } from "./DashboardFooter";
import { DashboardStatic } from "./DashboardStatic";
import { Filters } from "./Filters";

export const HomeDashboardContent = () => {
    return (
      <Dashboard>
        <Filters />
        <DashboardStatic />
        <DashboardFooter />
      </Dashboard>
    );
}