import React, { useState } from "react";

const Booking = () => {
  const [selectedCity, setSelectedCity] = useState("SAF");
  const [goToCity, setGoToCity] = useState(null);
  const [showAllCities, setShowAllCities] = useState(false);
  const cities = [
    { name: "Las Vegas", value: "NV", code: "LAS" },
    { name: "Los Angeles", value: "CA", code: "LAX" },
    { name: "New York City", value: "NY", code: "NYC" },
    { name: "Palm Springs", value: "CA", code: "PSP" },
    { name: "Portland", value: "OR", code: "PDX" },
    { name: "San Francisco", value: "SF", code: "SAF" },
  ];
  console.log(selectedCity);
  return (
    <>
      <form className="flex justify-center pt-10 items-center text-4xl">
        <div className="mr-1">Book from</div>
        <select
          className=" text-purple-700 focus:outline-none font-semibold "
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
        <div className="ml-3">to</div>
      </form>
      

      <form className="flex flex-wrap justify-center">
        {cities.slice(0, showAllCities ? cities.length : 5).map((city) => (
          <div
            key={city.code}
            className={"px-3 m-2 rounded-md py-6 w-[11%] border-4 " + (city.code === goToCity ? "bg-purple-500 text-white" : "bg-white text-black")}
            onClick={() => setGoToCity(city.code)}
          >
            <div className={"font-bold text-purple-600"+ (city.code === goToCity ? " text-white" : " text-purple-600") }>{city.name}</div>
            <div className="text-xs">
              {city.value} ( {city.code} )
            </div>
          </div>
        ))}
        {!showAllCities && (
          <div
            className="px-3 m-2 rounded-md py-6 w-[11%] border-4 font-bold text-purple-600"
            onClick={() => setShowAllCities(true)}
          >
            All cities
          </div>
        )}
      </form>
    </>
  );
};

export default Booking;
