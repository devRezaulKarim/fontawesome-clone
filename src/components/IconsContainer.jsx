import Filters from "./Filters";
import Icons from "./Icons";

const IconsContainer = () => {
  return (
    <div className="bg-[#F0F1F3]">
      <div className="container lg:max-w-[1080px] 2xl:xl:max-w-[1440px] mx-auto flex pt-4">
        <div className="pr-8">
          <Filters />
        </div>
        <div className="">
          <div className="flex items-center justify-between  py-4">
            <h4 className="font-bold font-quicksand text-xl text-[var(--color-primary)]">
              30,013 Icons
            </h4>
            <span className="text-gray-500">Page 1 of 20</span>
          </div>
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default IconsContainer;
