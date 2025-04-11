import React from "react";

function AnimeCard({ title, image_url, score, year }) {
  return (
    <div className="anime-card">
      {image_url ? (
        <img className="img-container" src={image_url} alt={title} />
      ) : (
        <div className="flex h-full items-center justify-center text-gray-400">
          No image available
        </div>
      )}

     <div >
     <h2 className="font-bold text-center text-[14px] ">{title}</h2>

<div className="flex justify-center text-[10px]   gap-3">
  <div className="flex gap-1  ">
    <img className="w-2" src="./star.svg" alt="rating" />
    <p>{score}</p>
  </div>

  <p >{year}</p>
     </div>
      </div>
    </div>
  );
}

export default AnimeCard;
