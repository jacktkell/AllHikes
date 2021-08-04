import React from 'react'
import {Card, Image} from './style'

function HikePage() {
    
    // function HikeCollection() {
    //     const [hikes, setHikes] = useState([])
    //     useEffect(() => {
    //         async function fetchHikes() {
    //             const res = await fetch('http://localhost:3000/hikes/$id')
    //             if(res.ok) {
    //                 const data = await res.json()
    //                 setHikes(data)
    //                 console.log(data)
                    
    //             }
    //         }
    //         fetchHikes()
    //     }, []);
    
    
    
    return (
        <Card>
            <h2>{hike.name}</h2>
            <h3>{hike.length} miles</h3>
            <Image src = {hike.image_url} alt = {hike.name} />
            
        </Card>
    )
}

export default HikePage
