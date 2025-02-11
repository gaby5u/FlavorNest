const SimpleButton = ({ value, className, onClick }) => {
  return (
    <input
      type="submit"
      value={value}
      onClick={onClick}
      className={`${className} bg-customOrange cursor-pointer text-white py-2 px-8 rounded-full transition duration-300 hover:bg-[#DC8000]`}
    />
  );
};

export default SimpleButton;
