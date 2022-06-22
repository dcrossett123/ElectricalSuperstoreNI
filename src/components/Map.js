import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import EssLogo from '../Images/logo.png';
import { Icon } from 'leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[54.597414, -5.974971]}
      zoom={15}
      style={{ height: '40vh', width: '100wh' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[54.597414, -5.974971]}
        icon={
          new Icon({
            iconUrl: EssLogo,
            iconSize: [41, 41],
          })
        }
      >
        <Popup>
          Unit 5, 638 Springfield Road, Belfast, <strong>BT127DY</strong>.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
