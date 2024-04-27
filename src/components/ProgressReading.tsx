import star from '../assets/🌟star.png'

export const ProgressReading = () => {
  return (
    <div className=" mt-10 md:w-[50%] md:mt-0 xl:mt-10 xl:w-full xl:pb-20">
      <h2 className=" text-lg font-bold -tracking-wide md:text-xl">Progress</h2>
      <p className=" mt-3.5 text-sm font-medium -tracking-wider text-sec-color">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
          <div className=" w-20 h-20 bg-[#262626] rounded-full flex items-center justify-center mx-auto mt-5 
          md:mt-12 md:w-[100px] md:h-[100px]">
        <img src={star} alt="star" className=" w-8 h-8 md:w-[50px] md:h-[50px]" />
      </div>
    </div>
  );
}
