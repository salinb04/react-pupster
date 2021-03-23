import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import axios from 'axios';
import "./style.css";

function Search() {
  const breedsArray = [];
  const [data, setData] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher");
  const [breedImages, setBreedImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => setData(response.data.message));
  }, []);

  function createBreedsList(data) {
    Object.keys(data)
    .map((breed) => {
      return breedsArray.push(breed.charAt(0).toUpperCase() + breed.substr(1)) 
    })
  }
  createBreedsList(data);

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${selectedBreed}/images`)
      .then(response => setBreedImages(response.data.message));
  }, [selectedBreed]);

  return (
    <Card class="card">
      <Card.Header>Search by Breed</Card.Header>
      <Card.Body>
        <Card.Title>
          Choose a breed you'd like to see from the dropdown!
          </Card.Title>
            <select onChange={
              (event) => setSelectedBreed(event.target.value.charAt(0).toLowerCase() 
              + event.target.value.substr(1))
              }>
              {breedsArray.map(breed => {
                return <option key={breedsArray.indexOf(breed)}>{breed}</option>;
              })}
            </select>
            <div>
              {breedImages.map(image => {
                return <Image style={{display: "inline-block", margin: "auto"}} class="image" key={breedImages.indexOf(image)} src={image} fluid />;
              })}
            </div>
      </Card.Body>
    </Card>
  );
}

export default Search;
