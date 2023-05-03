import React, { useEffect, useRef, useState } from "react";

import { render } from "react-dom";

import { MapContainer, useMap,TileLayer,Marker,Popup} from "react-leaflet";
import { Icon } from "leaflet";

import 'leaflet/dist/leaflet.css'
  function Home() {

    // let lat=11.925071;
    // let long=75.361432






    const [position,setPosition]=useState([11.918052,75.361921])
  
    setInterval(() => {
        navigator.geolocation.getCurrentPosition((position)=>{
    
            setPosition([position.coords.latitude,position.coords.longitude]);
            
            
            })
    }, 1000);



    const myIcon = new Icon({
     iconUrl: '../logo512.png',
     iconSize: [32,32]
    })
   

        
        return (
          
          <MapContainer  center={position}   style={{height:"500px",width:"500px"}} zoom={13} scrollWheelZoom={false}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon} >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        
    )
  }




export default Home;