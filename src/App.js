import styled from 'styled-components';
import { MapContainer, TileLayer, Polygon, Tooltip, Popup } from 'react-leaflet';
import polygonData from './polygons';

const Wrapper = styled.div`
  margin: 5vh auto;
  width: 90%;
  height: 90vh;
`;


function App() {
  return (
    <Wrapper>
      <MapContainer center={[52.6526, 19.0606]} zoom={14} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {polygonData.map(polygon => 
        <Polygon key={`polygon-${polygon.id}`} pathOptions={{ color: polygon.color}} positions={polygon.positions}>
          <Popup>{polygon.description}</Popup>
        </Polygon>)}
      </MapContainer>
    </Wrapper>
  );
}

export default App;
