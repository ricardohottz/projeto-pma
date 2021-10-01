
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import { addressPoints } from "../../mock/adressPoits";


export default function Map() {
  useEffect(() => {
    var map = L.map("map").setView([-22.8590299,-42.3555149], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const points = addressPoints
      ? addressPoints.map((p) => {
          return [p[0], p[1]];
        })
      : [];

    L.heatLayer(points).addTo(map);
  }, []);

  return <div id="map" style={{height:'430px', width:'725px', borderRadius:'3px', boxShadow:'0px 1px 3px  gray'}}></div>;
}