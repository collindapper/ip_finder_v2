import React, { useEffect, useState } from 'react'; 
import Map, { Marker } from 'react-map-gl'; 
import { RiUserLocationFill } from 'react-icons/ri';
import 'mapbox-gl/dist/mapbox-gl.css';
  
const API_KEY = process.env.MAPBOX_API;
  
const SearchableMap = ({ lat, lon }) => { 
  
    // Setting up the initial viewport of the map 
    const [viewport, setViewport] = useState({ 
        latitude: lat, 
        longitude: lon, 
        zoom: 12, 
        bearing: 0, 
        pitch: 0, 
        width: '100%', 
        height: '100%', 
    }); 
  
    // Viewport re-renders whenever latitude 
    // and longitude changes 
    
  
    return ( 
        <div className="map"> 
            <Map 
                mapboxAccessToken='pk.eyJ1IjoiY29sbGluZGFwcGVyIiwiYSI6ImNsd3V6eDdnbjBqcjUya3BzNjRueHBqaWQifQ.bwouVpfqFDHAKdJKMVK0Kw'
                {...viewport} 
                onViewportChange={(viewport) => setViewport(viewport)} 
                mapStyle="mapbox://styles/mapbox/dark-v11"> 
                <Marker latitude={lat} longitude={lon}> 
                    <div className="mark"> 
                        <RiUserLocationFill size="20px" color="green" /> 
                    </div> 
                </Marker> 
            </Map> 
        </div> 
    ); 
}; 
  
export default SearchableMap;