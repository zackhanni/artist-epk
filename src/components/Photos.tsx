import { photos } from "./ArtistInformation";
import { useState } from "react";

export default function Photos() {
  const [showLargeImage, setShowLargeImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  function showImage(image: string) {
    setSelectedImage(image);
    setShowLargeImage(true);
  }

  function closeImage() {
    setShowLargeImage(false);
  }

  return (
    <section
      id="photos"
      className="pt-16 bg-black text-[#596e79]"
      onClick={closeImage}
    >
      <div className="flex overflow-x-scroll">
        {photos.map((image: string) => {
          return (
            <img
              key={image}
              src={image}
              alt={image}
              className="h-[250px] w-auto hover:border-4 border-[#f0ece2]"
              onClick={(e) => {
                e.stopPropagation(); // Prevents the click event from bubbling up to the section
                showImage(image);
              }}
            />
          );
        })}
      </div>
      {showLargeImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <img
            src={selectedImage}
            alt="Large preview"
            className="max-w-full max-h-full"
            onClick={closeImage}
          />
        </div>
      )}
    </section>
  );
}
