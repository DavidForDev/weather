import { useContext } from "react";
import Image from "next/image";

// ========== Context ========== \\
import FavoriteContext from "../../../context/addtoFavorite.context";

const MainDetail = ({ data }) => {
  const { addFavorite } = useContext(FavoriteContext);

  // ========== Gradients according to weather =========== \\
  const weatherGradient = [
    {
      main: "clouds",
      backgroundColor: "#8BC6EC",
      backgroundImage:
        "-webkit-linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    },
    {
      main: "clear",
      backgroundColor: "#FAD961",
      backgroundImage: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",
    },
    {
      main:
        "Mist" ||
        "Smoke" ||
        "Haze" ||
        "Dust" ||
        "fog" ||
        "Sand" ||
        "Dust" ||
        "ash" ||
        "Squall" ||
        "tornado",
      backgroundColor: "#0093E9",
      backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    },
    {
      main: "Snow",
      backgroundColor: "#0093E9",
      backgroundImage:
        "-webkit-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    },
    {
      main: "Rain",
      backgroundColor: "#D9AFD9",
      backgroundImage:
        "-webkit-linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
    },
    {
      main: "Thunderstorm" || "Drizzle",
      backgroundColor: "#21D4FD",
      backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    },
  ];

  const gradientByWeather = weatherGradient.find((el) => {
    return el.main.toLowerCase() === data.main?.toLowerCase();
  });

  return (
    <div
      className="sm:flex-col-reverse flex gap-3 w-full p-6 rounded-xl bg-sky-100"
      style={gradientByWeather}
    >
      <div className="flex flex-col justify-between p-2 gap-9 w-1/2 sm:w-full h-full box-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src="/images/weatherDetail/location.png"
              width={22}
              height={22}
              alt="location"
            />
            <h4>{data.name}</h4>
          </div>
          <div className="flex gap-1">
            <p>Today</p>
            {data.time}
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h2 className="text-8xl">{data.temperature} &#xb0;</h2>
          <span className="font-semibold text-xl">{data.description}</span>
        </div>
        <div className="flex justify-between gap-5 text-center">
          <div className="flex items-center gap-1">
            <Image
              src="/images/weatherDetail/pressure.png"
              width={22}
              height={22}
              alt="location"
            />
            <h4>{data.pressure} hpa</h4>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/weatherDetail/humidity.png"
              width={22}
              height={22}
              alt="location"
            />
            <h4>{data.humidity} %</h4>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/weatherDetail/wind.png"
              width={22}
              height={22}
              alt="location"
            />
            <h4>{data.windSpeed} km/h</h4>
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-full h-full">
        <div className="w-full relative rounded-xl h-full backdrop-blur-1xl p-2 bg-white/50 flex justify-center items-center">
          <Image
            src={`/images/weather/${data.icon}.png`}
            width={150}
            height={150}
            alt={data.icon}
          />
          <Image
            src={`/images/favorite.png`}
            width={30}
            height={30}
            className="absolute top-3 right-3 cursor-pointer"
            alt="weatherIcons"
            onClick={() => addFavorite(data.name, data.countryCode)}
          />
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
