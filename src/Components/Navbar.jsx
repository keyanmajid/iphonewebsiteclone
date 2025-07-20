import { navLists } from "../Constants";
const Navbar = () => {
  return (
  <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">  
    <nav className="flex  w-full screen-max-width">
      <img src="/assets/images/apple.svg" alt="Apple Logo" width={14} height={18}/>
      <div className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm font-semibold cursor-pointer hover:text-gray-400 transition-all duration-300">
                {nav} </div>))}
      </div>

      <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
        <img src="/assets/images/search.svg" alt="Search Icon" width={14} height={14}/>
        <img src="/assets/images/bag.svg" alt="Bag Icon" width={14} height={14}/>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
