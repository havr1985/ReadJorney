import { LibraryBooks } from "../components/LibraryBooks";
import { LibraryDashboardContent } from "../components/LibraryDashboardContent";

const LibraryPage = () => {
    return (
        <div>
            <LibraryDashboardContent />
            <LibraryBooks/>
        </div>
    )
}

export default LibraryPage;