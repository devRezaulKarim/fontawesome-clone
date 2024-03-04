/* eslint-disable react/prop-types */

const Icon = ({ icon }) => {
  return (
    <button className="bg-white text-[var(--color-primary)] aspect-square hover:bg-[#FFD43B] duration-100 rounded-lg flex flex-col items-center justify-center gap-4 w-44 relative">
      <span
        className={`${
          icon.license === "Pro" ? "block" : "hidden"
        } text-xs font-quicksand font-bold tracking-wider bg-[#FFD43B] py-1 px-2 rounded-lg absolute top-0 -translate-y-1/2`}
      >
        {icon.license.toUpperCase()}
      </span>
      <i className={`${icon.icon} text-4xl`}></i>
      <span className="text-gray-500 text-sm px-2">
        {icon.icon.split(" ")[1].substr(3)}
      </span>
    </button>
  );
};

export default Icon;
