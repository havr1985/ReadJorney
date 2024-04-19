import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRecommendQuery } from "../redux/api/books/bookApi";

export const LibraryRecomended = () => {
    const page = 1;
    const perPage = 3
    const { data } = useRecommendQuery({page, perPage});

    return (
      <div className=" flex flex-col gap-5 bg-[#262626] rounded-xl p-5 mt-5 md:w-[313px] xl:mt-[71px]">
        <h2 className=" text-lg font-bold">Recommended books</h2>
        <ul className=" flex gap-3 md:gap-5">
          {data?.results.map(({ imageUrl, title, author, _id }) => (
            <li key={_id} className=" w-[71px]">
              <img
                src={imageUrl}
                alt={title}
                className=" h-[107px] rounded-lg mb-2 "
              />

              <p className=" text-xs font-bold -tracking-wide truncate">
                {title}
              </p>

              <p className=" text-xs text-sec-color -tracking-wider truncate">
                {author}
              </p>
            </li>
          ))}
        </ul>
        <div className=" flex justify-between ">
          <Link
            to="/"
            className=" text-sec-color text-sm underline decoration-solid"
          >
            Home
          </Link>
          <Link to="/">
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    );
}