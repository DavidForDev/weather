import Link from "next/link";

const NavLi = ({ data }) => {
  const { name, svg, href } = data;

  return (
    <Link
      href={href}
      className="
    cursor-pointer 
    flex 
    items-center 
    gap-3 
    h-9 
    w-full 
    px-10 
    relative 
    hover:before:content-[' '] 
    hover:before:absolute 
    hover:before:w-0.5 
    hover:before:h-full 
    hover:before:bg-gray-800 
    hover:before:right-0 
    hover:before:-mr-0.5 font-normal"
    >
      {svg} {name}
    </Link>
  );
};

export default NavLi;
