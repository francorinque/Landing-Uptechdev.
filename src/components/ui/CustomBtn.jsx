const CustomBtn = ({ variant, children }) => {
  return (
    <button
      className={`
        ${
          variant === "primary"
            ? "bg-blue text-light hover:bg-transparent hover:border hover:border-blue hover:text-blue"
            : "bg-transparent border border-blue text-blue hover:bg-blue hover:text-light"
        }
        transition-colors duration-300
         font-semibold select-none py-2 px-4 rounded-md
        `}
    >
      {children}
    </button>
  );
};
export default CustomBtn;
