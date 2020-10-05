// NOT CURRENTLY FUNCTIONING

import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState("");
  const [genus, setGenus] = useState("");
  const [image, setImage] = useState("");
  const [homePage, setHomePage] = useState("");
  const [conservationStatus, setConservationStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      genus,
      image,
      homePage,
      conservationStatus,
    };
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Genus</label>
        <input
          type="text"
          value={genus}
          onChange={(e) => setGenus(e.target.value)}
        />
        <label htmlFor="">Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="">Homepage</label>
        <input
          type="text"
          value={homePage}
          onChange={(e) => setHomePage(e.target.value)}
        />
        <label htmlFor="">Conservation Status</label>
        <input
          type="text"
          value={conservationStatus}
          onChange={(e) => setConservationStatus(e.target.value)}
        />
      </form>
    )
  }
}