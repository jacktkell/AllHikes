import React, { useState, useEffect } from "react";

function MyProfile({currentUser}) {

    const [hikes, setHikes] = useState([])
    useEffect(() => {
        async function fetchHikes() {
            const res = await fetch(`http://localhost:3000/users/${currentUser.id}`)
            if(res.ok) {
                const currentUser = await res.json()
                setHikes(currentUser.user_hikes)     
            }
        }
        fetchHikes()
    }, []);



    return (
        <div>
          {currentUser.user_hikes.name}
        </div>
    )
}

export default MyProfile
