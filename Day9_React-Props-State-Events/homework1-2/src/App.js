import "./App.css";
import React from "react";
import PictureCard from "./PictureCard";

const people = [
  {
    id: "photo 001",
    img: "https://images.unsplash.com/photo-1652631631022-4c9ab6c22109",
    createdBy: "Luffy",
    likeCount: 10,
    commentCount: 8,
  },
  {
    id: "photo 002",
    img: "https://images.unsplash.com/photo-1621695371436-2118f66371a7",
    createdBy: "Zoro",
    likeCount: 5,
    commentCount: 13,
  },
  {
    id: "photo 003",
    img: "https://images.unsplash.com/photo-1652602400310-c948bdc46d88",
    createdBy: "Sonji",
    likeCount: 2,
    commentCount: 8,
  },
  {
    id: "photo 004",
    img: "https://images.unsplash.com/photo-1652632666776-a33eacbdd33f",
    createdBy: "Nami",
    likeCount: 4,
    commentCount: 10,
  },
  {
    id: "photo 005",
    img: "https://images.unsplash.com/photo-1652602446872-5dd4961a05ae",
    createdBy: "Usopp",
    likeCount: 10,
    commentCount: 16,
  },
  {
    id: "photo 006",
    img: "https://images.unsplash.com/photo-1652465485213-eb37cb92a34d",
    createdBy: "Chopper",
    likeCount: 11,
    commentCount: 20,
  },
  {
    id: "photo 007",
    img: "https://images.unsplash.com/photo-1652521887861-5ec257b41e0a",
    createdBy: "Robin",
    likeCount: 18,
    commentCount: 7,
  },
  {
    id: "photo 008",
    img: "https://images.unsplash.com/photo-1652633485407-ffc8351fbead",
    createdBy: "Franky",
    likeCount: 6,
    commentCount: 10,
  },
];

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {people.map((x) => {
        return (
          <PictureCard
            key={x.id}
            id={x.id}
            img={x.img}
            createdBy={x.createdBy}
            likeCount={x.likeCount}
            commentCount={x.commentCount}
          />
        );
      })}
    </div>
  );
}

export default App;