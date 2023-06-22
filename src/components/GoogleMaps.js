"use client";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const cetner = useMemo(
    () => ({ lat: 52.20681578738545, lng: 21.137844335582017 }),
    []
  );

  return (
    <GoogleMap zoom={11} center={cetner} mapContainerClassName="map-container">
      <Marker position={cetner} />
    </GoogleMap>
  );
}
