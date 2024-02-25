import React from "react";
import { Button } from "./Buttons";
import SocialMedia from "./SocialMedia";
import { artistBio } from "./ArtistInformation";

export default function Hero() {
  return (
    <section id="hero" className="w-full  py-16 max-w-screen-md mx-auto">
      <div className="flex sm:flex-row flex-col">
        <div className="mx-auto">
          <img
            src="/umbrella.jpg"
            alt="Umbrella"
            className="w-[300px] h-[300px] object-cover	mx-auto"
          />
        </div>
        <div className="text-white sm:text-start text-center justify-center flex flex-col mx-auto space-y-4 sm:pl-4">
          <h1 className="text-6xl text-white">{artistBio.name}</h1>
          <p className="max-w-sm">
            A captivating poet and rapper hailing from the vibrant streets of
            Philadelphia
          </p>
          <SocialMedia />
          <div className="text-white">
            <Button text="Listen Now" link="#listen" />
          </div>
        </div>
      </div>
    </section>
  );
}
