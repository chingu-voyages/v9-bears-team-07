// import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
// import React, { useEffect, useState } from 'react'

// export default function Map () {
//     const [location, setLocation] = useState([-58.2554584,-37.8464067])

//     const Mapa = ReactMapboxGl({
//         accessToken: "pk.eyJ1IjoieW9pemFsbyIsImEiOiJjang5cDhia3cweTZ1M3RydnJ3YWN3bGhqIn0.x4xiNokEzEVOMyyFFQ1SiQ"
//     });

//     let error = (err) => {
//         console.warn(`ERROR(${err.code}): ${err.message}`);
//     }
    
//     let success = (pos) => {
//         let latitude = pos.coords.latitude;
//         let longitude = pos.coords.longitude;
//         let coordinate = [latitude, longitude]

//         setLocation(coordinate)    
//     }

//     useEffect( () => { navigator.geolocation.getCurrentPosition(success, error)}, [location] );

//     return (
//             <div>
//                 <Mapa
//                     // eslint-disable-next-line react/style-prop-object
//                     style="mapbox://styles/mapbox/streets-v9"
//                     zoom={[13]}
//                     center={[location[1], location[0]]}
//                     containerStyle={{
//                         height: "50vh",
//                         width: "50vw",
//                 }}>
//                     <Layer
//                         type="symbol"
//                         id="marker"
//                         layout={{ "icon-image": "marker-15" }}>
//                         <Feature coordinates={[-58.417347, -34.5850838]}/>
//                     </Layer>
//                     {/* <Marker
//                         coordinates={[-58.417347, -34.5850838]}
//                         anchor="bottom">
                        
//                         <img height="20px" src={logo}/>
//                         {/* <img height="50px" src={'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'}/> 
//                     </Marker> */}
//                 </Mapa>
//             </div>
//         )
// }


import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

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
