import React from 'react'
import {Card, Image} from './style'

function HikeCard({hike}) {
    // need link to hike page, maybe onclick event listener on whole tile? and an add to trips button
    return (
        <Card>
            <h2>{hike.name}</h2>
            <h3>{hike.length} miles</h3>
            <Image src = {hike.image_url} alt = {hike.name} />
            
        </Card>
    )
}

export default HikeCard
