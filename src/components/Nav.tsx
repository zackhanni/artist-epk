import { artistBio } from "./ArtistInformation";

export default function Nav() {
  const navItems = [
    { name: "Biography", link: "#biography" },
    { name: "Listen", link: "#listen" },
    { name: "Videos", link: "#videos" },
    // { name: "Shows", link: "#shows" },
  ];

  return (
    <nav className="h-16 w-full fixed top-0 bg-white/10 text-white backdrop-blur-sm flex justify-between px-8 items-center">
      <h1 className="">{artistBio.name} EPK</h1>
      <div className="space-x-3">
        {navItems.map((item) => {
          return (
            <a href={item.link} className="hover:underline">
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
