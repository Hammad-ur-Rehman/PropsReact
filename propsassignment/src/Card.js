import React from 'react';

const Card = ({ id, userName, age, institute, isActive, category }) => {
  return (
    <div className="card">
      <h3>{userName}</h3>
      <p>ID: {id}</p>
      <p>Age: {age}</p>
      <p>Institute: {institute}</p>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Card;
