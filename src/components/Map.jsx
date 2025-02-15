/* eslint-disable no-undef */
import  { useEffect, useState } from "react";

const Map = () => {
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    const mapApiKey = import.meta.env.VITE_MAP_API;
    const location = "9.037042,38.726790"; 
    setMapUrl(
      `https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=${location}`
    );
  }, []);

  return (
    <div className="container mx-auto pt-12 md:pt-44 lg:pt-20">
      <h1>Find us here</h1>
      <div>
        <iframe
          className="md:rounded-[1rem] rounded-lg w-[370px] md:w-[280px] lg:w-[600px] h-[400px] md:h-[400px] "
          width="660"
          height="340"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
