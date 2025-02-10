const SimpleButton = ({ value, className }) => {
  return (
    <input
      type="submit"
      value={value}
      className={`${className} bg-customOrange cursor-pointer text-white py-2 px-8 rounded-full transition duration-300 hover:bg-[#DC8000]`}
    />
  );
};

export default SimpleButton;
