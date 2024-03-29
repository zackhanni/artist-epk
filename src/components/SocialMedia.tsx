import { socialMedia } from "./ArtistInformation";

export default function SocialMedia() {
  return (
    <div className="flex space-x-4 mx-auto sm:mx-0">
      {socialMedia.map((social) => {
        return (
          <a key={social.name} href={social.link}>
            {social.icon}
          </a>
        );
      })}
    </div>
  );
}
