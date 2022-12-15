import React, { useState } from "react";
import "./Map.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function GetGeolocation(location) {
  const lat = location.location.lat;
  const long = location.location.long;
  console.log("lat", lat);
  console.log("long", long);

  return (
    <MapContainer
      center={[lat, long]}
      zoom={6}
      maxZoom={10}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, long]}></Marker>
    </MapContainer>
  );
}

export default GetGeolocation;
