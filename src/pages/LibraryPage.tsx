import { LibraryBooks } from "../components/LibraryBooks";
import { LibraryDashboardContent } from "../components/LibraryDashboardContent";

const LibraryPage = () => {
    return (
      <div className=" xl:flex xl:gap-4">
        <LibraryDashboardContent />
        <LibraryBooks />
      </div>
    );
}

export default LibraryPage;