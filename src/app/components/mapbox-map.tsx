import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapboxMap() {
  const [map, setMap] = React.useState<mapboxgl.Map>();

  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [123.90677247002175, 10.330256044792451],
      zoom: 5,
    });

    const marker = new mapboxgl.Marker({ color: "red", rotation: 0 })
    .setLngLat([123.90677247002175, 10.330256044792451])
    .addTo(mapboxMap);

    var popup = new mapboxgl.Popup()
    .setText("Cebu, Philippines")
    .addTo(mapboxMap);


    // save the map object to React.useState
    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapboxMap;
