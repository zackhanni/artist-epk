import { Button } from "./Buttons";
import SocialMedia from "./SocialMedia";
import { artistBio } from "./ArtistInformation";

export default function Footer() {
  return (
    <section className="text-white py-24 space-y-16 flex flex-col items-center">
      <p className="text-center text-3xl">Book Juice Eliott</p>
      <SocialMedia />
      <a className="hover:underline" href={`mailto:${artistBio.email}`}>
        {artistBio.email}
      </a>

      <div className="w-[200px] mx-auto">
        <Button text="Back to top" link="#hero" />
      </div>
    </section>
  );
}
