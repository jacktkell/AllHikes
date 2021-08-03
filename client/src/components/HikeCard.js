import React from 'react'
import {Card, Image} from './style'

function HikeCard({hike}) {
    return (
        <Card>
            <Image src = {hike.image_url} alt = {hike.name} />
            <h2>{hike.name}</h2>
        </Card>
    )
}

export default HikeCard
