import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map() {
    const mapStyles = {        
        height: "50vh",
        width: "100%"};

    const defaultCenter = {
        lat: 49.246292, lng: -123.116226
    }
    return (
        <div>
            <LoadScript googleMapsApiKey='AIzaSyC1rycEYIqN7rGl1UDg89FC91T6mn1abUw'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={11}
                    center={defaultCenter}
                />
            </LoadScript>
        </div>
    )
}
