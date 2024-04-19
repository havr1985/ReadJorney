import bookIcon from "../assets/📚book.png";

export const DashboardFooter = () => {
  return (
    <div className=" lg:hidden xl:bg-[#262626] xl:rounded-xl xl:p-5 xl:flex xl:gap-3.5 xl:items-center">
      <img src={bookIcon} alt="book" width={40} height={40} className="" />

      <p className=" text-sm -tracking-wider text-sec-color">
        "Books are <span className=" text-prim-color">windows</span> to the world, and reading is a journey
        into the unknown."
      </p>
    </div>
  );
};
