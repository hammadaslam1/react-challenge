const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-gray-800 hover:bg-gray-900 active:bg-gray-900/90 text-white text-xl transition-all font-semibold p-3 px-6 w-fit rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
