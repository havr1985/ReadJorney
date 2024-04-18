import { FC, useState } from "react";
import { AddLibraryModal } from "./AddLibraryModal";

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

  const modalStateSwitcher = () => {
    setIsModalAddLibrary((prev) => !prev);
  };

  return (
    <div onClick={() => modalStateSwitcher()}>
      <img
        src={imageUrl}
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
  );
};
