import React from "react";
import { artistBio, streamingLinks, albums } from "./ArtistInformation";

export default function Listen() {
  return (
    <section id="listen" className="text-white py-16 max-w-screen-md mx-auto">
      <div>
        <h2 className="text-4xl text-center">
          Listen to {artistBio.name} on all streaming platforms.
        </h2>
      </div>

      <div className="flex flex-row items-center justify-center space-x-4 py-8 ">
        {streamingLinks.map((platform) => {
          return (
            <div key={platform.name} className="">
              <a href={platform.link} className="text-center">
                {/* <h3>{platform.name}</h3> */}
                {platform.icon}
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <h3 className="text-center text-2xl">Official Studio Music Releases</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8 gap-4 items-end">
          {albums.map((album) => {
            return (
              <a
                href={album.link}
                key={album.name}
                className="mx-auto bg-blue-800 p-4 rounded-3xl hover:-translate-y-2 hover:-translate-x-2 duration-300 
             hover:border-b-8 hover:border-r-8 border-blue-700 box-border"
              >
                <img
                  src={album.image}
                  alt={album.name}
                  className="w-[200px] h-auto"
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
