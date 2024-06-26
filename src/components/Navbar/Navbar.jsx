import useNav from "../../hooks/useNav";
import Logo from "../ui/Logo";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

import { BsJustify, BsXLg } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();

  return (
    <header
      className={`
    fixed z-[98] top-0 left-0 w-full
    px-5 flex justify-between items-center  
    h-[78px]  text-dark 
    ${hasScrolled ? "bg-nav" : "bg-transparent"}
   `}
    >
      <Logo variant='blue' />
      <button
        className='text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center md:hidden'
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
      <MenuDesktop />
    </header>
  );
};
export default Navbar;
