import { FC } from "react";
import { IProgess } from "../redux/api/books/types";
import { AddReading } from "./AddReading";
import { Dashboard } from "./Dashboard";
import { ProgressReading } from "./ProgressReading";
import { FinishReadingBook } from "./FinishReadingBook";
import { DetailsReading } from "./DetailsReading";

interface IContentProps {
  currentBook: IProgess[];
  _id: string;
  totalPages: number
}

export const ReadingDashboardContent: FC<IContentProps> = ({ currentBook, _id, totalPages }) => {
  return (
    <Dashboard>
      {!currentBook.length ||
      currentBook[currentBook.length - 1].status !== "active" ? (
        <AddReading
          finishPage={
            currentBook.length
              ? currentBook[currentBook.length - 1].finishPage
              : 0
          }
          id={_id}
        />
      ) : (
        <FinishReadingBook id={_id} />
      )}
      {currentBook.length ? (
        <DetailsReading
          totalPages={totalPages}
          finishPage={currentBook[currentBook.length - 1].finishPage}
        />
      ) : (
        <ProgressReading />
      )}
    </Dashboard>
  );
};
