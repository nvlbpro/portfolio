import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const position = [51.000766999999996, 2.1050410161073874]; // [latitude, longitude]
  const zoomLevel = 50;
  return (
    <section className="map">
      <span className="ancres" id="map"></span>
      <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <p className="charlie">You finally find me !</p>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
