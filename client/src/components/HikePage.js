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
    
    const comments = hike.comments
    return (
      <div>
        <Card>
            <h2>{hike.name}</h2>
            <h3>{hike.length} miles</h3>
            <h4>{hike.elevation_gain} ft</h4>
            <p>Parking Lot: {hike.x_coordinate}, {hike.y_coordinate}</p>
            <Image src = {hike.image_url} alt = {hike.name} />
        
        {comments.map((comment) => <li>{comment.content}</li>)}

        </Card>
        
         {/* <li>{hike.comments[1].content}</li> */}

          
      
      </div>
    )
}

export default HikePage
