import { FC } from "react";
import { CustomModal } from "./CustomModal";
import { useAddBookByIdMutation } from "../redux/api/books/bookApi";

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
  console.log(_id)
  
  const [addBookbyId] = useAddBookByIdMutation();

  const clickAddBook = (_id: string) => {
    addBookbyId({ _id })
  }

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
        <button
          type="button" onClick={() => clickAddBook(_id)}
          className="bg-hover-color px-7 py-3 rounded-3xl
         text-sm border-2 border-sec-color
         hover:bg-prim-color hover:text-hover-color hover:border-inherit"
        >
          Add to library
        </button>
      </div>
    </CustomModal>
  );
};
