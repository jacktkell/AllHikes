import React, { useEffect, useState } from 'react';
import { Card, Image, Textarea, Input, Form, Button } from './style'
import { useParams } from "react-router-dom";

function HikePage() {

  const id = useParams().id
  const [comment, setComment] = useState("")
  const [hike, setHike] = useState([])
  const [newComments, setNewComments] = useState([])

  // ==================================== FETCH HIKES PAGE FROM BACKEND
  useEffect(() => {
    fetch(`http://localhost:3000/hikes/${id}`)
      .then((r) => r.json())
      .then((hike) => {
        setHike(hike);
        setNewComments(hike.comments);
      });
  }, [id]);

  // ==================================== HANDLE COMMENT SUBMISSION
  async function handleSubmit(e) {
    e.preventDefault()
    const itemData = {
      user_id: 1,
      hike_id: id,
      content: comment
    }
    const res = await fetch(`http://localhost:3000/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemData)
    })
    const json = await res.json()
    setNewComments([...newComments, json])
    // history.push("/");
  }

  // ==================================== HANDLE DELETE
  async function handleDelete(commentId) {
    const res = await fetch(`http://localhost:3000/comments/${commentId}`
      , { method: 'DELETE' })
    const json = await res.json()
    // console.log(json.id)

    const newlist = newComments.filter(x => { return x.id != json.id; })
    setNewComments([...newlist])

    // const res = await res.json()
    // setNewComments([...comments, json])
    // history.push("/");
  }

  // ==================================== HANDLE ADD TRIP
  async function handleAddTrip() {
    const itemData = {
      user_id: 1,
      hike_id: id,
    }
    const res = await fetch(`http://localhost:3000/trips`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemData)
    })
    const json = await res.json()
    // history.push("/");
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      {/* ==================================== DISPLAY HIKE INFO*/}
      <Card>
        <h2>{hike.name}</h2>
        <h3>{hike.length} miles</h3>
        <h4>{hike.elevation_gain} ft</h4>
        <p>Parking Lot: 
        <a href={`https://www.google.com/maps/search/?api=1&query=${hike.x_coordinate},${hike.y_coordinate}`}> {hike.x_coordinate}, {hike.y_coordinate}</a></p>

        {/* ==================================== ADD TO HIKES BUTTON*/}
        <div><Button
          style={{
            borderRadius: 35,
            backgroundColor: "#21b6ae",
            padding: "9px 18px",
            fontSize: "15px"
          }}
          onClick={() => handleAddTrip()}>Add to Trips</Button></div>
        <br></br>
        {/* ==================================== DISPLAY HIKE IMAGE*/}
        <Image src={hike.image_url} alt={hike.name} />

        {/* ==================================== DISPLAY HIKE COMMENTS*/}
        {newComments ? newComments.map((comment) => <h5>{comment.user_id} : {comment.content}
          <Button onClick={() => handleDelete(comment.id)}>Delete</Button>
        </h5>) : null}
      </Card>

      {/* ==================================== DISPLAY COMMENT TEXT AREA */}
      <Form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          placeholder="Add comment..."
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}></Textarea>
        <Input submit type="submit" value="Post" />
      </Form>

    </div>
  )
}

export default HikePage