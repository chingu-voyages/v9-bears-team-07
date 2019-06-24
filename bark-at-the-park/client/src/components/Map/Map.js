import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { Component } from 'react'

const Mapa = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoieW9pemFsbyIsImEiOiJjang5cDhia3cweTZ1M3RydnJ3YWN3bGhqIn0.x4xiNokEzEVOMyyFFQ1SiQ"
});


export default class Map extends Component {
    render() {
        return (
            <div>
                <Mapa
                style="mapbox://styles/mapbox/streets-v9"
                center={[-58.417347, -34.5850838]}
                containerStyle={{
                    height: "50vh",
                    width: "50vw",
                }}>
                    <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={[-58.417347, -34.5850838]}/>
                    </Layer>
                </Mapa>
            </div>
        )
    }
}
