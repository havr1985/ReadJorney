import { FC, useState } from "react";
import { AddLibraryModal } from "./AddLibraryModal";
import { useDeleteUsersBookMutation } from "../redux/api/books/bookApi";
import { useLocation } from "react-router-dom";
import { Trash2 } from "lucide-react";

interface IBookCardProps {
  title: string;
  _id: string;
  author: string;
  imageUrl: string;
  totalPages: number;
}

export const BookCard: FC<IBookCardProps> = ({
  title,
  _id,
  author,
  imageUrl,
  totalPages,
}) => {
  const [isModalAddLibrary, setIsModalAddLibrary] = useState(false);
  const [remove] = useDeleteUsersBookMutation();
  const location = useLocation();

  const altImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmxEdVrPsocD2mi5abpFV18QBEhFVAxHqjQ&s";

  const modalStateSwitcher = () => {
    setIsModalAddLibrary((prev) => !prev);
  };

  const clickDelete = (_id: string) => {
    remove({ _id });
  };

  return (
    <>
      <div onClick={() => modalStateSwitcher()}>
        <img
          src={imageUrl ? imageUrl : altImage}
          alt={title}
          className=" h-[198px] rounded-lg mb-2 xl:w-[162px] xl:h-[218px]"
        />

        <p className=" text-sm font-bold -tracking-wide truncate">{title}</p>

        <p className=" text-xs text-sec-color -tracking-wider">{author}</p>

        <AddLibraryModal
          modalIsOpen={isModalAddLibrary}
          modalStateSwitcher={modalStateSwitcher}
          _id={_id}
          title={title}
          author={author}
          imageUrl={imageUrl}
          totalPages={totalPages}
        />
      </div>
      {location.pathname === "/library" && (
        <button type="button" onClick={() => clickDelete(_id)}>
          <Trash2 size={28} color="#E8505033" />
        </button>
      )}
    </>
  );
};
