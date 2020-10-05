import React from "react";
import { Link, useParams } from "react-router-dom";

function Bird(props) {
  const params = useParams();

  const bird = props.birds.find((b) => b.id === params.id);
  console.log(bird);

  if (!bird) {
    return <h3>Loading...</h3>;
  }

  return (
    <div id="birdBio">
      <img class="birdImg" src={bird.image} alt={bird.name} />
      <div class="birdInfo">
        <h3>{bird.name}</h3>
        <h4>({bird.genus})</h4>
        <h5>Conservation Status</h5>
        <p>{bird.conservationStatus}</p>
        <a href={bird.homepage}>
          <button type="button">
            Read More
        </button>
        </a>
      </div>
    </div>
  )
}

export default Bird;