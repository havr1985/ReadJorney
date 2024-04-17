import { useMediaQuery } from "react-responsive";
import { useRecommendQuery } from "../redux/api/books/bookApi";

export const Recommended = () => {
  const page = 1;
  let perPage = 2;

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  if (isTablet) perPage = 8;
  if (isDesktop) perPage = 10;

  const { data } = useRecommendQuery({ page, perPage });
  console.log(data?.results);
  return (
    <div className=" bg-bg-dark rounded-xl py-10 px-5 mt-2.5 md:px-10 md:mt-4">
      <div className=" mb-8 text-xl font-bold md:mb-7 md:text-2xl md:tracking-wider">
        <h2>Recomended</h2>
      </div>

      <ul className=" flex justify-between md:flex-wrap md:justify-normal md:gap-8">
        {data?.results.map(({ title, _id, author, imageUrl }) => (
          <li key={_id} className=" w-[127px]  md:w-[132px] xl:w-[162px]">
            <img
              src={imageUrl}
              alt={title}
              className=" h-[198px] rounded-lg mb-2 xl:w-[162px] xl:h-[218px]"
            />

            <p className=" text-sm font-bold -tracking-wide truncate">
              {title}
            </p>

            <p className=" text-xs text-sec-color -tracking-wider">{author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
