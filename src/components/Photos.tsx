import { photos } from "./ArtistInformation";

export default function Photos() {
  return (
    <section
      id="photos"
      className="overflow-hidden bg-[#f0ece2] text-[#596e79]"
    >
      {/* <h2 className="text-4xl text-center pb-4">Images</h2> */}
      <div className="flex justify-center">
        {photos.map((image: string) => {
          return (
            <img
              key={image}
              src={image}
              alt={image}
              className="h-[200px] w-auto"
            />
          );
        })}
      </div>
    </section>
  );
}
