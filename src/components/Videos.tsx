import { videoLinks } from "./ArtistInformation";

export default function Videos() {
  return (
    <section id="videos" className="py-16 bg-[#f0ece2] text-[#596e79] ">
      <h2 className=" text-3xl text-center">Videos</h2>
      <div className="flex flex-row flex-wrap items-center justify-center pt-16  max-w-screen-md mx-auto  ">
        {videoLinks.map((video) => {
          return (
            <div
              key={video.title}
              className="flex flex-col justify-center items-center p-4"
            >
              <h3 className=" text-center text-xl pb-2">{video.title}</h3>
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
