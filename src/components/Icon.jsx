/* eslint-disable react/prop-types */

const Icon = ({ icon }) => {
  return (
    <button className="bg-white">
      <i className={icon.icon}></i>
    </button>
  );
};

export default Icon;
