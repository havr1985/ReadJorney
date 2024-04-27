import { AddReading } from "./AddReading";
import { Dashboard } from "./Dashboard"
import { ProgressReading } from "./ProgressReading";


export const ReadingDashboardContent = () => {
    return (
      <Dashboard>
            <AddReading />
            <ProgressReading/>
      </Dashboard>
    );
}
