//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Map = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={props.latLng}>
      {props.isMarkerShown && <Marker position={props.latLng} />}
    </GoogleMap>
  )
}))
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Map.propTypes = {
}
Map.defaultProps = {
  latLng: { lat: -34.397, lng: 150.644 },
  isMarkerShown: true,
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDpSuaak0-tdnP-LLFG3V7BLeS88xTLbF0&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />,
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

export default Map