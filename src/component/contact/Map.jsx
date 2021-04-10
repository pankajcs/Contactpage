import React from 'react'
import mapImg from '../../assets/img/map.jpg'
import './Map.css'

const style={
    backgroundImage: `url(${mapImg})` ,
    // backgroundPosition: 'center',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
}

const Map=()=> {
    return (
        <>
        <div className="map" style={style}>

        </div>
        </>
    )
}
export default Map
