import { artistBio, streamingLinks, albums } from "./ArtistInformation";

export default function Listen() {
  return (
    <section id="listen" className="text-white py-16 max-w-screen-md mx-auto">
      <h2 className="text-3xl text-center px-2">
        Listen to {artistBio.name} on all streaming platforms.
      </h2>
      <div className="flex flex-row items-center justify-center space-x-4 py-8 ">
        {streamingLinks.map((platform) => {
          return (
            <a key={platform.name} href={platform.link} className="text-center">
              {/* <h3>{platform.name}</h3> */}
              {platform.icon}
            </a>
          );
        })}
      </div>
      <div>
        <h3 className="text-center text-xl">Official Studio Music Releases</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 gap-y-8 items-end">
          {albums.map((album) => {
            return (
              <a
                href={album.link}
                key={album.name}
                className="mx-auto bg-blue-800 p-4 rounded-3xl hover:-translate-y-2 hover:-translate-x-2 duration-300 
             hover:border-b-8 hover:border-r-8 border-blue-600 hover:-mt-2 hover:sm:-mb-2 box-border space-y-2"
              >
                <img
                  src={album.image}
                  alt={album.name}
                  className="w-[200px] h-auto rounded-xl"
                />
                <h3>{album.name}</h3>
                <p>Released {album.date}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
