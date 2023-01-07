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
    { name: "Delhi", value: "DH", code: "DEH" }
  ];
  console.log(selectedCity);
  return (
    <>
      <form className="flex justify-center pt-10 items-center text-xl md:text-4xl">
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
      

      <form className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-start mt-5 lg:mx-52 px-3 mx-1 md:mx-4 h-auto">
        {cities.slice(0, showAllCities ? cities.length : 5).map((city) => (
          <div
            key={city.code}
            className={"rounded-md py-4 md:py-6 px-2 w-[90%] border-4 my-2 " + (city.code === goToCity ? " bg-purple-500/80 text-white" : "bg-white text-black")}
            onClick={() => setGoToCity(city.code)}
          >
            <div className={"font-bold "+ (city.code === goToCity ? " text-white " : " text-purple-600") }>{city.name}</div>
            <div className="text-xs">
              {city.value} ( {city.code} )
            </div>
          </div>
        ))}
        {!showAllCities && (
          <div
            className="px-2 rounded-md py-4 md:py-6  w-[90%] my-2 border-4 font-bold text-purple-600"
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
