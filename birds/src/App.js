import React, { useEffect, useState } from 'react';
import { Link, Route } from "react-router-dom";
import Bird from "./Bird";
import './App.css';

function App() {
  const birdData = [
    {
      id: "aztec-thrush",
      name: "Aztec Thrush",
      genus: "Ridgwayia pinicola",
      conservationStatus: "",
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/3556_Sibl_9780307957900_art_r1.jpg?itok=LP8V2DuC",
      homepage: "https://www.audubon.org/field-guide/bird/aztec-thrush"
    },
    {
      id: "american-white-pelican",
      name: "American White Pelican",
      genus: "Pelecanus erythrorhynchos",
      conservationStatus:
        "Colonies are vulnerable to disturbance and habitat loss. Total population probably declined through first half of 20th century, substantial increase since 1970s.",
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/267_Sibl_9780307957900_art_r1.jpg?itok=eUpCM6_Y",
      homepage: "https://www.audubon.org/field-guide/bird/american-white-pelican"
    },
    {
      id: "american-flamingo",
      name: "American Flamingo",
      genus: "Phoenicopterus ruber",
      conservationStatus: "",
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/601_Sibl_9780307957900_art_r1.jpg?itok=AcEmNVlO",
      homepage: "https://www.audubon.org/field-guide/bird/american-flamingo"
    },
    {
      id: "acorn-woodpecker",
      name: "Acorn Woodpecker",
      genus: "Melanerpes formicivorus",
      conservationStatus:
        "Still widespread and common. Reliance on specific oak habitats may make it vulnerable to the effects of climate change.",
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/2420_Sibl_9780307957900_art_r1.jpg?itok=7khdegFX",
      homepage: "https://www.audubon.org/field-guide/bird/acorn-woodpecker"
    },
    {
      id: "atlantic-puffin",
      name: "Atlantic Puffin",
      genus: "Fratercula arctica",
      conservationStatus:
        "Major declines during 19th century were owing to overharvesting of eggs and adults. During 20th century, continued to decrease at southern end of breeding range in both North America and Europe. Vulnerable to introduction of predators (such as rats) to nesting islands. An ambitious Audubon project to re-introduce puffins on former nesting islands off Maine, started in the 1970s, has been a major success. However, at the southernmost colonies, puffins have poor breeding success in warm-water years, which are becoming more frequent as the climate heats up.",
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/2514_Sibl_9780307957900_art_r1.jpg?itok=nTHL4EEu",
      homepage: "https://www.audubon.org/field-guide/bird/atlantic-puffin"
    },
    {
      id: "aplomado-falcon",
      name: "Aplomado Falcon",
      genus: "Falco femoralis",
      conservationStatus: "",
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/990_Sibl_9780307957900_art_r1.jpg?itok=gs0Ngawy",
      homepage: "https://www.audubon.org/field-guide/bird/aplomado-falcon"
    },
    {
      id: "american-black-duck",
      name: "American Black Duck",
      genus: "Anas rubripes",
      conservationStatus:
        'Still abundant locally, but has declined drastically in interior parts of range. Clearing of forest has favored invasion by Mallards, which hybridize extensively with Black Ducks, leading to genetic "swamping" of population.',
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/783_Sibl_9780307957900_art_r1.jpg?itok=q04--9Fr",
      homepage: "https://www.audubon.org/field-guide/bird/american-black-duck"
    },
    {
      id: "acadian-flycatcher",
      name: "Acadian Flycatcher",
      genus: "Empidonax virescens",
      conservationStatus:
        "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
      image:
        "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy",
      homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher"
    }
  ];
  const [birds, setBirds] = useState(birdData);
  useEffect(() => {
    const getBirds = async () => {
      setBirds(birdData);
      // console.log(birds);
    };
    getBirds();
  });
  return (
    <div className="App">
      {/* <nav>
        <Link to="/create">(Add a new bird)</Link>
      </nav> */}
      <Route path="/">
        <h1>Audubon Society</h1>
      </Route>
      <Route exact path="/">
        <div>
          <h2>Birds</h2>
          {birds.map((bird) => (
            <Link to={`/bird/${bird.id}`}><img src={bird.image} alt={bird.name} /></Link>
          ))}
        </div>
      </Route>
      {/* <Route path="/create">
        {<Form />}
      </Route> */}
      <Route path="/bird/:id">
        <Bird birds={birds} />
      </Route>
    </div>
  );
}

export default App;