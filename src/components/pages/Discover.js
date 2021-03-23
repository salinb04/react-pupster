import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "react-bootstrap";
import axios from 'axios';

function Discover() {
  const [data, setData] = useState({image : ""});
  let [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => setData(response.data.message));
  }, []);

  function handleLike(e) {
    e.preventDefault();
    let num = Math.floor(Math.random() * 5) + 1;
    if (num === 1) {
      setCount(count + 1)
    }
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => setData(response.data.message));
  }
  
  function handleDislike(e) {
    e.preventDefault();
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => setData(response.data.message));
  }

  return (
    <Card>
      <Card.Header>Make New Friends</Card.Header>
      <Card.Body>
        <Card.Title>Thumbs up on any pups you'd like to meet!</Card.Title>
        <Card.Text>
          Made friends with {count} pups so far!
        </Card.Text>
        <Button class="random" variant="success" onClick={handleLike}>Like</Button>
        <Button class="random" variant="danger" onClick={handleDislike}>Dislike</Button>
        <br></br>
        <br></br>
        <Image src={data} fluid />
      </Card.Body>
    </Card>
  );
}

export default Discover;
