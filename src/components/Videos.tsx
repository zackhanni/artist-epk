import { videoLinks } from "./ArtistInformation";

export default function Videos() {
  return (
    <section className="flex flex-col justify-center space-y-16 py-16 bg-[#f0ece2] text-[#596e79] ">
      <h2 id="videos" className=" text-4xl text-center">
        Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 max-w-screen-md mx-auto">
        {videoLinks.map((video) => {
          return (
            <div key={video.title} className="flex flex-col">
              <h3 className=" text-center text-2xl">{video.title}</h3>
              <div className="mx-auto rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className=" h-[200px] w-auto"
                  src={video.link}
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
