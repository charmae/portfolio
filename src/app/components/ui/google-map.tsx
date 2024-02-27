import * as React from "react";
import GoogleMapReact from "google-map-react";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 10.330256044792451,
      lng: 123.90677247002175,
    },
    zoom: 5,
  };

  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat: defaultProps.center.lat, lng: defaultProps.center.lng },
      map,
      title: "Cebu, PH",
    });
    return marker;
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    ></GoogleMapReact>
  );
}
