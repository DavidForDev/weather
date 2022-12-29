import { useState } from "react";
import Link from "next/link";
import { City } from "country-state-city";

// ========== Icons ========== \\
import SearchSvg from "../../public/icons/search";

// ========== redux ========== \\

const Search = () => {
  const [cityValue, setCityValue] = useState("");
  const countries = City.getAllCities();

  const city = countries.filter((e) =>
    e.name.toLowerCase() === cityValue.toLocaleString() ? e : ""
  );
  return (
    <div className="flex gap-2 items-center relative w-full">
      <SearchSvg width="22" height="22" />
      <input
        type="text"
        className="text-sm w-full"
        placeholder="search something here"
        value={cityValue}
        onChange={(e) => setCityValue(e.target.value)}
      />
      {cityValue.length >= 1 ? (
        <div className="w-full flex flex-wrap gap-3 absolute top-8 left-0 right-0 bg-white p-2 z-20 shadow-md">
          <h3 className="text-xl font-semibold">Cities:</h3>
          <ul className="result_ul w-full flex flex-wrap gap-5">
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
