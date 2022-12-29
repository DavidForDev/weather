import { utc } from "moment";

// ========== Layout ========== \\
import HeadLayout from "../layout/headLayout";

// ========== Components ========== \\
import Search from "../components/search";
import MainDetail from "../components/weatherDetail/mainDetailCard";
import AdditionDetail from "../components/weatherDetail/additionDetailCard";

const weatherHome = ({ datastate }) => {
  // ==== Calculate sunrise && sunset
  const sun = (value, timezone) => {
    return utc(value, "X").add(timezone, "seconds").format("HH:mm a");
  };

  // ==== weather Detail
  const weatherDetail = {
    name: datastate.name,
    windSpeed: Math.floor(datastate.wind?.speed * 3.6),
    humidity: datastate.main?.humidity,
    pressure: datastate.main?.pressure,
    description: datastate.weather?.[0].description,
    temperature: Math.floor(datastate.main?.feels_like),
    sunrise: sun(datastate.sys?.sunrise, datastate.timezone),
    sunset: sun(datastate.sys?.sunset, datastate.timezone),
    countryCode: datastate.sys?.country,
    icon: datastate.weather?.[0].icon,
    main: datastate.weather?.[0].main,
  };

  // ==== time
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const state = {
    ...weatherDetail,
    time: time,
  };

  return (
    <>
      <HeadLayout title="Weather" />
      <div className="lg:p-3 home p-10 flex flex-col gap-7 overflow-auto  h-full">
        <div className="flex gap-5 items-center">
          <div className="lg:block w-8 hidden navOpener cursor-pointer">
            <div className="w-full h-0.5 bg-black m-2"></div>
            <div className="w-full h-0.5 bg-black m-2"></div>
            <div className="w-full h-0.5 bg-black m-2"></div>
          </div>
          <Search />
        </div>
        <MainDetail data={state} />
        <div className="sm:grid-cols-1 grid grid-cols-2 gap-8 w-full">
          <AdditionDetail
            name="wind"
            description="today wind speed"
            value={`${state.windSpeed} km/h`}
          />
          <AdditionDetail
            name="pressure"
            description="today pressure"
            value={`${state.pressure} hpa`}
          />
          <AdditionDetail
            name="Sunset"
            description="time of sunset"
            value={`${state.sunset}`}
          />
          <AdditionDetail
            name="Sunrise"
            description="time of sunrise"
            value={`${state.sunrise}`}
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(req, res) {
  const userLocation = await fetch(
    "https://api.bigdatacloud.net/data/reverse-geocode-client"
  );
  const locationResponse = await userLocation.json();
  const locationCity = await locationResponse.city;
  const locationCountryCode = await locationResponse.countryCode;

  const exist = req.params.city
    ? req.params.city
    : `${locationCity},${locationCountryCode}`;

  const fetching = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${exist}&appid=5b4954d82121fda1c99d4c1c58f1e916&units=metric`,
    {
      cache: "no-store",
    }
  );
  const datastate = await fetching.json();

  return {
    props: {
      datastate: datastate,
    },
  };
}

export default weatherHome;
