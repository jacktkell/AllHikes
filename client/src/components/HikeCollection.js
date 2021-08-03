import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import{Box} from './style';
import HikeCard from './HikeCard'

function HikeCollection() {
    const [hikes, setHikes] = useState([])
    useEffect(() => {
        async function fetchHikes() {
            const res = await fetch('/hikes')
            if(res.ok) {
                const data = await res.json()
                setHikes(data)
                console.log(data)
            }
        }
        fetchHikes()
    }, []);

    return (
        <Wrapper>
      {
        hikes.map((hike) => (
          <Box>
          <HikeCard hike={hike}/>
          </Box>
        ))
        }
    </Wrapper>
  );
}

//Unique wrapper styling 
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default HikeCollection;
