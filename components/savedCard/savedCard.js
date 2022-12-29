import Image from "next/image";
import Link from "next/link";

const SavedCard = ({ data, removeFavorite }) => {
  const { cityName, countryCode } = data;

  return (
    <div className="saved_card h-fit flex flex-col gap-1">
      <Link href={`/${cityName},${countryCode}`}>
        <div className="flex items-center gap-5 flex-wrap-reverse bg-blue-200 cursor-pointer p-3 rounded-lg">
          <h3>
            {cityName} {`(${countryCode})`}
          </h3>
          <Image
            src="/images/globalweather.png"
            width={100}
            height={100}
            alt="globalWeather"
          />
        </div>
      </Link>
      <button
        className="w-full p-2"
        onClick={() => removeFavorite(cityName, countryCode)}
      >
        Remove
      </button>
    </div>
  );
};

export default SavedCard;
