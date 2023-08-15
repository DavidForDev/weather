import Link from "next/link";
import Image from "next/image";

const NavLi = ({ data }) => {
  const { name, image, href } = data;

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
      <Image
        src={`/images/navInterface/${image}`}
        width={25}
        height={25}
        alt="naImage"
      />{" "}
      {name}
    </Link>
  );
};

export default NavLi;
