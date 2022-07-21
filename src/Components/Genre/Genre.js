import React from "react";
import "./Genre.css";
function Genre({ genres }) {
  return (
    <div>
      <ul className="genres-list">
        {genres.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default Genre;
