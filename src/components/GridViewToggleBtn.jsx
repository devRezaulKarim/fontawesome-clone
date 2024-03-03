/* eslint-disable react/prop-types */
const GridViewToggleBtn = ({ btn }) => {
  return (
    <button className="p-[1px] border-[3px] border-white focus:border-[var(--color-tertiary)] rounded-lg relative group">
      <div className="text-xl text-[var(--color-primary)] active:bg-[var(--color-primary)] active:text-white py-1 px-3 rounded hover:text-[var(--color-secondary)]">
        <i className={btn.icon}></i>
        <span className="absolute left-1/2 -translate-x-1/2 -top-10 text-sm bg-[var(--color-primary)] px-3 py-1 rounded-sm after:content-[''] after:w-[10px] after:aspect-square after:bg-[var(--color-primary)] after:absolute text-white after:rotate-45 after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:translate-y-1/2 after:-z-10 scale-0 group-hover:scale-100 duration-100">
          {btn.title}
        </span>
      </div>
    </button>
  );
};

export default GridViewToggleBtn;
