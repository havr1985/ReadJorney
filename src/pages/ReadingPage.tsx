import { MyBook } from "../components/MyBook"
import { ReadingDashboardContent } from "../components/ReadingDashboardContent"


const ReadingPage = () => {
  return (
    <div className=" xl:flex xl:gap-4">
      <ReadingDashboardContent />
      <MyBook />
    </div>
  );
}

export default ReadingPage