import Link from "next/link";
// import {Link} from "react-scroll"

const NavLink = ({ href, title }) => {
  return (
    <Link
        href={href} 
        // to={href} spy={true} smooth={true} duration={500} offset={50}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </Link>
    
    )
};

export default NavLink;
