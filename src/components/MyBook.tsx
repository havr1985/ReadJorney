import { CirclePlay, Disc } from "lucide-react";
import { IGetFinishBook } from "../redux/api/books/types";
import { FC } from "react";

interface IMyBookProps {
  currentBook: IGetFinishBook;
}

export const MyBook: FC<IMyBookProps> = ({ currentBook }) => {
  return (
    <div className=" bg-bg-dark rounded-xl py-10 px-5 mt-2.5 md:px-10 md:mt-4 xl:w-full">
      <h2 className=" text-lg font-bold -tracking-wider md:text-2xl md:tracking-wide">
        My reading
      </h2>
      <div className=" items-center w-[147px] mx-auto mt-10 md:mt-8 md:w-[169px] xl:mt-11 xl:w-[224px]">
        <img
          src={currentBook?.imageUrl}
          alt={currentBook?.title}
          className=" w-full h-[208px] rounded-lg md:h-[256px] xl:h-[340px]"
        />
        <p className=" text-center mt-2.5 text-sm font-bold -tracking-wide md:mt-6 md:text-xl ">
          {currentBook?.title}
        </p>
        <p className=" text-center text-sec-color text-xs font-medium -tracking-wide md:text-sm">
          {currentBook?.author}
        </p>
      </div>
      {!currentBook.progress.length ||
      currentBook.progress[currentBook.progress.length - 1].status !==
        "active" ? (
        <div className=" flex justify-center mt-5 md:mt-4 xl:mt-6">
          <CirclePlay color="#E90516" className=" w-10 h-10 md:w-12 md:h-12" />
        </div>
      ) : (
        <div className=" flex justify-center mt-5 md:mt-4 xl:mt-6">
          <Disc color="#E90516" className=" w-10 h-10 md:w-12 md:h-12" />
        </div>
      )}
    </div>
  );
};
