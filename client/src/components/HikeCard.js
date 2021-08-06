import React from 'react'
import {Card, Image, Button} from './style'
import {Link} from 'react-router-dom'

function HikeCard({hike}) {
    // need link to hike page, maybe onclick event listener on whole tile? and an add to trips button
    const src = `/hikes/${hike.id}`
    return (
        <Card>
            


            <h2>{hike.name}</h2>
            <h3>{hike.length} miles</h3>
            <Image src = {hike.image_url} alt = {hike.name} />
            <h4>
            <Button as = {Link} to ={src}> Details </Button>
            </h4>

        </Card>
    )
}

export default HikeCard