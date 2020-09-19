import React from "react";
import "./Story.css";
import Stories from "./Stories";
function Story() {
  return (
    <div className="story">
      <Stories
        image="https://eskipaper.com/images/colors-background-2.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
        title="Florim Maliqi"
      />
      <Stories
        image="https://cdn4.vectorstock.com/i/1000x1000/59/33/gradient-colors-background-vector-22375933.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
        title="Amir Asani"
      />
      <Stories
        image="https://www.color-hex.com/palettes/2639.png"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
        title="Rexhep Dema"
      />
      <Stories
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThtMJmCy4XCD6Qv_l-1lkqx8QDtY62dB24LA&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
        title="Faton Xhoni"
      />
    </div>
  );
}

export default Story;
