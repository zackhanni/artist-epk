import { artistBio } from "./ArtistInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Nav() {
  const [click, setClick] = useState(false);
  const navItems = [
    { name: "Photos", link: "#photos" },
    { name: "Biography", link: "#biography" },
    { name: "Listen", link: "#listen" },
    { name: "Videos", link: "#videos" },
  ];

  return (
    <nav className="h-16 w-full fixed top-0 bg-black/10 text-white backdrop-blur-sm flex justify-between px-8 items-center ">
      <a href="/" className="z-10">
        <h1 className="font-bold text-xl">{artistBio.name} EPK</h1>
      </a>

      <MobileNav click={click} setClick={setClick} navItems={navItems} />

      {/* desktop nav */}
      <div className="space-x-4 hidden sm:block">
        {navItems.map((item) => {
          return (
            <a key={item.name} href={item.link} className="hover:underline">
              {item.name}
            </a>
          );
        })}
      </div>
      {click ? (
        <div className="sm:hidden z-10">
          <FontAwesomeIcon
            className="text-2xl"
            icon={faRectangleXmark}
            onClick={() => setClick(!click)}
          />
        </div>
      ) : (
        <div className="sm:hidden">
          <FontAwesomeIcon
            className="text-xl"
            icon={faBars}
            onClick={() => setClick(!click)}
          />
        </div>
      )}
    </nav>
  );
}

// mobile nav
interface MobileNavProps {
  click: boolean;
  setClick: (value: boolean) => void;
  navItems: { name: string; link: string }[];
}

function MobileNav({ click, setClick, navItems }: MobileNavProps) {
  if (!click) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/90 flex items-center justify-center sm:hidden">
      <div className="flex flex-col mx-auto">
        {navItems.map((item) => {
          return (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setClick(!click)}
              className="hover:underline text-4xl"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
