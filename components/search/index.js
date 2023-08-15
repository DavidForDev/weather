import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { City } from "country-state-city";
import gsap from "gsap";
import { take } from "lodash";

// ========== Icons ========== \\
import SearchSvg from "../../public/icons/search";

const Search = () => {
  const [cityValue, setCityValue] = useState("");
  const countries = City.getAllCities();
  const container = useRef(null);

  const city = take(
    countries.filter((e) =>
      e.name.toLowerCase().includes(cityValue.toLowerCase()) ? e : ""
    ),
    20
  );

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(container.current, { opacity: 0 }, { opacity: 1, duration: 2 });

    return () => tl.kill();
  }, []);

  return (
    <div
      className="flex gap-2 items-center relative w-full opacity-0"
      ref={container}
    >
      <SearchSvg width="22" height="22" />
      <input
        type="text"
        className="text-sm w-full"
        placeholder="search city here..."
        value={cityValue}
        onChange={(e) => setCityValue(e.target.value)}
      />
      {cityValue.length >= 1 ? (
        <div className="w-full flex flex-wrap gap-3 absolute top-8 left-0 right-0 bg-white p-2 z-20 shadow-md">
          <h3 className="text-xl font-semibold">Cities:</h3>
          <ul className="result_ul w-full flex flex-wrap gap-5">
            {city.length === 0 ? (
              <h3 className="text-zinc-800/40">write city name</h3>
            ) : (
              ""
            )}
            {city.map((el, index) => {
              return (
                <Link
                  href={`/${el.name}, ${el.countryCode}`}
                  onClick={() => setCityValue("")}
                  key={index}
                  className="result-li cursor-pointer"
                >
                  {el.name} ({el.countryCode})
                </Link>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
