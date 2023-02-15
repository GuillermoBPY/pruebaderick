import React from "react";

const Characters = ({ result }) => {
  const { id, name, status, image } = result;

  return (
    <div>
      <figure>
        <span>{status}</span>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

export default Characters;
