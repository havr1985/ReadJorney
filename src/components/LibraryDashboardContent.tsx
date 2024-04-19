import { Dashboard } from "./Dashboard"
import { FiltersLibrary } from "./FiltersLibrary"
import { LibraryRecomended } from "./LibraryRecomended"

export const LibraryDashboardContent = () => {
    return (
        <Dashboard>
            <FiltersLibrary />
            <LibraryRecomended/>
        </Dashboard>
    )
}