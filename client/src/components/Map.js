// https://www.youtube.com/watch?v=Pf7g32CwX_s

import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
// import mapStyles from "./mapStyles";

function Map() {


    //fetch hike data
const [hikeData, setHikes] = useState([])
useEffect(() => {
    async function fetchHikes() {
        const res = await fetch('http://localhost:3000/hikes')
        if(res.ok) {
            const data = await res.json()
            setHikes(data)
            console.log(data)          
        }
    }
    fetchHikes()
}, []);


  const [selectedHike, setSelectedHike] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedHike(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    //   defaultOptions={{ styles: mapStyles }}
    >
      {hikeData.map(hike => (
        <Marker
          key={hike.id}
          position={{
            lat: hike.x_coordinate,
            lng: hike.y_coordinate
          }}
          onClick={() => {
            setSelectedHike(hike);
          }}
        // SET ICON
        //   icon={{
        //     url: `/skateboarding.svg`,
        //     scaledSize: new window.google.maps.Size(25, 25)
        //   }}
        />
      ))}

      {selectedHike && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedHike(null);
          }}
          position={{
            // lat: selectedHike.x_coordinate,
            // lng: selectedHike.y_coordinate
          }}
        >
          <div>
              <p>park details</p>
            {/* <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p> */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}