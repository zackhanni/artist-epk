import { artistBio } from "./ArtistInformation";

export default function Biography() {
  return (
    <section id="biography" className="py-16 px-2 bg-[#f0ece2] text-[#596e79]">
      <div className="max-w-screen-md mx-auto space-y-4">
        <h2 className="text-4xl text-center">Artist Bio</h2>
        {artistBio.biography.map((paragraph) => {
          return (
            <div className="">
              <p key={paragraph} className="">
                {paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
