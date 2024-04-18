import { useMediaQuery } from "react-responsive";
import { useRecommendQuery } from "../redux/api/books/bookApi";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

export const Recommended = () => {
  const [page, setPage] = useState(1);
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  let perPage = 2;

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  if (isTablet) perPage = 8;
  if (isDesktop) perPage = 10;

  const { data, isLoading, isError } = useRecommendQuery({ page, perPage });
  console.log(data?.results);

  const clickRight = () => {
    setPage((prev) => prev + 1);
    console.log(page);
  };

  const clickLeft = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    if (page > 1) {
      setLeftDisabled(false);
    } else {
      setLeftDisabled(true);
    }
    if (data?.totalPages) {
      if (page >= data.totalPages) {
        setRightDisabled(true);
      } else {
        setRightDisabled(false);
      }
    }
  }, [page, data]);

  return (
    <div className=" bg-bg-dark rounded-xl py-10 px-5 mt-2.5 md:px-10 md:mt-4">
      {isLoading && <div>Loading...</div>}
      {isError && <div>ERROR</div>}
      <div className=" mb-8 text-xl font-bold md:mb-7 md:text-2xl md:tracking-wider flex justify-between">
        <h2>Recomended</h2>
        <div className=" flex gap-2">
          <button type="button" onClick={clickLeft} disabled={leftDisabled}>
            <CircleArrowLeft
              size={32}
              strokeWidth={1}
              className={`${
                leftDisabled && "text-[#F9F9F933]"
              } md:w-10 md:h-10`}
            />
          </button>
          <button type="button" onClick={clickRight} disabled={rightDisabled}>
            <CircleArrowRight
              size={32}
              strokeWidth={1}
              className={`${
                rightDisabled && "text-[#F9F9F933]"
              } md:w-10 md:h-10`}
            />
          </button>
        </div>
      </div>

      <ul className=" flex justify-between md:flex-wrap md:justify-normal md:gap-8">
        {data?.results.map(({ title, _id, author, imageUrl, totalPages }) => (
          <li key={_id} className=" w-[127px]  md:w-[132px] xl:w-[162px] cursor-pointer">
            <BookCard
              title={title}
              _id={_id}
              author={author}
              imageUrl={imageUrl}
              totalPages={totalPages}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
