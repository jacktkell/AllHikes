import React from 'react'
import {Card, Image} from './style'

function HikeCard({hike}) {
    return (
        <Card>
            <h2>{hike.name}</h2>
            <h3>{hike.length} miles</h3>
            <Image src = {hike.image_url} alt = {hike.name} />
            
        </Card>
    )
}

export default HikeCard
