import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Mapa = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoieW9pemFsbyIsImEiOiJjang5cDhia3cweTZ1M3RydnJ3YWN3bGhqIn0.x4xiNokEzEVOMyyFFQ1SiQ"
});
export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: [-58.2554584,-37.8464067]
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success, this.error)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.location[0] !== this.state.location[0]) {
            return true
        } else {
            return false
        }
    }

    error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    success = (pos) => {
        let latitude = pos.coords.latitude;
        let longitude = pos.coords.longitude;
        let coordinate = [latitude, longitude]

        this.setState({
            location: coordinate
        })
    }

    render() {
        const { location } = this.state
        return (
            <div>
                <Mapa
                    // eslint-disable-next-line react/style-prop-object
                    style="mapbox://styles/mapbox/streets-v9"
                    zoom={[13]}
                    center={[location[1], location[0]]}
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
