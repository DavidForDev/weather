// ========== Nav Li ========== \\
import NavLi from "./navLi";

// ========== Icons ========== \\
import DashboarddSvg from "../../public/icons/dashboardd";
import FavoriteSvg from "../../public/icons/favorite";

const Navigation = () => {
  const navList = [
    { name: "Dashboard", svg: <DashboarddSvg />, href: "/" },
    { name: "Saved Location", svg: <FavoriteSvg />, href: "/saved" },
  ];

  return (
    <nav className="flex w-full overflow-hidden relative bg-white duration-700 items-start flex-col h-full gap-10 border-solid border-gray-200 border-r-2">
      <div className="logo p-10">
        <h3 className="text-2xl font-semibold">Weather</h3>
      </div>
      <ul className="flex flex-col gap-10 w-full">
        {navList.map((el, index) => {
          return <NavLi key={index} data={el} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
