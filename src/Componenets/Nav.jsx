import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants/index";

const handleClick = () => {
    //TODO Implement handle click
};
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {/* //The max-lg:hidden means it will be hidden on devices with width(min-width:1024px) less than or equal 1024 px else it will be visible */}

          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={handleClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
