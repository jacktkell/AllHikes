import React, {useEffect, useState} from 'react';
import {Card, Image} from './style'
import {useParams} from "react-router-dom";

function HikePage() {

    const id = useParams().id

    const [hike, setHike] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/hikes/${id}`)
          .then((r) => r.json())
          .then((hike) => {
            setHike(hike);
          });
      }, [id]);

    
    
    return (
        <Card>
            <h2>{hike.name}</h2>
            <h3>{hike.length} miles</h3>
            <Image src = {hike.image_url} alt = {hike.name} />
            
        </Card>
    )
}

export default HikePage
