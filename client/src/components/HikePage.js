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

  const comments = hike.comments
  // const users_who_commented = hike.user_comments

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
    setNewComments([...comments, json])
    // history.push("/");
  }

  // ==================================== HANDLE DELETE
  async function handleDelete(commentId) {
    await fetch(`http://localhost:3000/comments/${commentId}`
    
    
    , {
    // await fetch(`http://localhost:3000/comments`, {
      method: 'DELETE' })
    // const res = await res.json()
    // setNewComments([...comments, json])
    // history.push("/");
  }

  // useEffect(() => {
  //   // DELETE request using fetch with async/await
  //   async function handleDelete(commentId) {
  //     await fetch('http://localhost:3000/comments${commentId}', { method: 'DELETE' });
  //     setStatus('Delete successful');
  //   }
  //   handleDelete();
  // }, []);



  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      {/* ==================================== DISPLAY HIKE INFO + COMMENTS*/}
      <Card>
        <h2>{hike.name}</h2>
        <h3>{hike.length} miles</h3>
        <h4>{hike.elevation_gain} ft</h4>
        <p>Parking Lot: {hike.x_coordinate}, {hike.y_coordinate}</p>
        <Image src={hike.image_url} alt={hike.name} />
        {newComments ? newComments.map((comment) => <h5>{comment.user_id} : {comment.content}
          <Button onClick={() => handleDelete(comment.id)}>Delete</Button>
        </h5>) : null}
        {/* users_who_commented.find(id: comment.user_id[:name]) */}
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