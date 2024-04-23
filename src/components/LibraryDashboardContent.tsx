import { Dashboard } from "./Dashboard"
import { FormAddLibrary } from "./FormAddLibrary"
import { LibraryRecomended } from "./LibraryRecomended"

export const LibraryDashboardContent = () => {
    return (
        <Dashboard>
            <FormAddLibrary/>
            <LibraryRecomended/>
        </Dashboard>
    )
}