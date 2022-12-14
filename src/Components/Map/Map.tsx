import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function GetGeolocation(location) {
  const lat = location.location.lat;
  const long = location.location.long;
  console.log("lat", lat);
  console.log("long", long);
  return (
    <div className="map">
      <MapContainer
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
export default GetGeolocation;
