import React from 'react'
import './MapSection.css'
import map_image from '../../../assets/images/Map.png'

function MapSection() {
  return (
    <>
        <section class="map-section">
            <div class="content">
                <div class="map">
                    <img src={map_image} alt="Map Preview"/>
                </div>
            </div>

    </section>
    </>
  )
}

export default MapSection