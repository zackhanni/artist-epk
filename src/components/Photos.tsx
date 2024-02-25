import React, { useState } from "react";

export default function Photos() {
  const images = require.context(
    "../../public/photos",
    true,
    /\.(png|jpe?g|svg)$/
  );
  const imageFiles = images.keys().map(images);
  //   const [count, setCount] = useState(0);

  return (
    <section className="overflow-hidden">
      <div className="flex">
        {imageFiles.map((image) => {
          return <img src={image} alt={image} className="h-[200px] w-auto" />;
        })}
      </div>
    </section>
  );
}
