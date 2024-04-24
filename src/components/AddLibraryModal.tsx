import { FC } from "react";
import { CustomModal } from "./CustomModal";
import { useAddBookByIdMutation } from "../redux/api/books/bookApi";
import { useAppSelector } from "../redux/hooks";
import { selectLibraryBooks } from "../redux/slices/librarySlice";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { CustomDarkBtn } from "./CustomDarkBtn";

interface IAddLibraryModalProps {
  modalIsOpen: boolean;
  modalStateSwitcher(event: React.MouseEvent | React.KeyboardEvent): void;
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
}

export const AddLibraryModal: FC<IAddLibraryModalProps> = ({
  modalIsOpen,
  modalStateSwitcher,
  _id,
  title,
  author,
  imageUrl,
  totalPages,
}) => {
  const [addBookbyId, { isError }] = useAddBookByIdMutation();
  const libraryBook = useAppSelector(selectLibraryBooks);
  const location = useLocation();

  const clickAddBook = (_id: string, title: string) => {
    if (libraryBook) {
      const isInLibrary = libraryBook.find(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      );
      if (isInLibrary) {
        toast.error("The book is already in your library!");
        return;
      }
    }
    addBookbyId({ _id });
    if (!isError) {
      toast.success("The book has been added to your library!");
    }
  };

  return (
    <CustomModal modalIsOpen={modalIsOpen} closeModal={modalStateSwitcher}>
      <div className=" bg-btn-text-color flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className=" w-[140px] h-[213px] rounded-lg mb-4 md:w-[153px] md:h-[233px]"
        />
        <div className=" w-[140px] text-center mb-5 md:w-[153px] md:mb-8">
          <h2 className=" truncate text-lg font-bold -tracking-wider md:text-xl ">
            {title}
          </h2>
          <p className=" text-xs text-sec-color font-medium md:text-sm">
            {author}
          </p>
          <p className=" text-xs font-medium">{totalPages} pages</p>
        </div>
        {location.pathname === "/" ? (
          <div onClick={() => clickAddBook(_id, title)}>
            <CustomDarkBtn type="button">Add to library</CustomDarkBtn>
          </div>
        ) : (
          <div>
            <CustomDarkBtn type="button">Start reading</CustomDarkBtn>
          </div>
        )}
      </div>
    </CustomModal>
  );
};
