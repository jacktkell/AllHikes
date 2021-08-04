import React, { useState, useEffect } from "react";

function MyProfile(props) {
    console.log(props.user)

    // send a GET request to 3000/user/:id
    const [hikes, setHikes] = useState([])
    useEffect(() => {
        async function fetchHikes() {
            const res = await fetch('http://localhost:3000/users/'+ props.user.id)
            if(res.ok) {
                const data = await res.json()
                setHikes(data)
                console.log(data)            
            }
        }
        fetchHikes()
    }, []);



    return (
        <div>
          
            {/* map through hikes variable, create these are the hikes I've been on */}
        </div>
    )
}

export default MyProfile
