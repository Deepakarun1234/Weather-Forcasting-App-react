import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    { 
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Russia",
    },
    {
      id: 3,
      title: "Africa",
    },
    {
      id: 4,
      title: "Germany",
    },
    {
      id: 5,
      title: "Bangladesh",
    },
  ];

  return (
    <div>
      <h1 className="header">Weather Frcasting App</h1>
    <div className="flex items-center justify-around my-6">
    
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
    </div>
  );
}

export default TopButtons;
