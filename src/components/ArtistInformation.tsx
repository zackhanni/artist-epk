import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareYoutube,
  faSquareXTwitter,
  faSpotify,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

export const artistBio = {
  name: "Juice Elliott",
  email: "juiceelliottmusic@gmail.com",
  biography: [
    "Juice Elliott, a captivating poet and rapper hailing from the vibrant streets of Philadelphia, is an artist who effortlessly weaves the threads of melancholy and joy through his music, crafting a unique sound that has been coined as 'pleasantly depressing.' The result is a musical landscape that resonates with listeners on a profound level, evoking a range of emotions that mirror the complexity of life itself.",

    "Having etched his mark on the Philadelphia music scene, Juice Elliott has released over 10 soul-stirring singles that showcase his lyrical prowess and ability to tap into the depths of human experience. His crowning achievement, the album 'Indigo Blue', stands as a testament to his commitment to pushing artistic boundaries and exploring the rich tapestry of emotions within his work.",

    "Beyond the studio, Juice Elliott is a dynamic force on the stage, actively performing at various venues across the city. His live performances are not just concerts; they are immersive experiences that allow audiences to connect with the raw honesty embedded in his lyrics. As a torchbearer for the underground music culture of Philly, Juice has forged collaborations with a myriad of local artists, further enriching the city's diverse musical landscape.",
  ],
};

export const socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/juiceelliott?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: <FontAwesomeIcon className="text-5xl" icon={faSquareInstagram} />,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@juiceelliott1",
    icon: <FontAwesomeIcon className="text-5xl" icon={faSquareYoutube} />,
  },
  {
    name: "Twitter",
    link: "twitter.com/juiceelliott",
    icon: <FontAwesomeIcon className="text-5xl" icon={faSquareXTwitter} />,
  },
];

export const streamingLinks = [
  {
    name: "Spotify",
    link: "https://open.spotify.com/artist/4duZ6ilrYWRjxJVZi55PuE?si=fXqPWJ08SFWH12L_wCZvIA",
    icon: <FontAwesomeIcon className="text-5xl" icon={faSpotify} />,
  },

  {
    name: "Apple Music",
    link: "https://music.apple.com/us/artist/juice-elliott/1456507404",
    icon: <FontAwesomeIcon className="text-5xl" icon={faApple} />,
  },
];

export const videoLinks = [
  {
    title: "Lately",
    link: "https://www.youtube.com/embed/jlRzKiq6wgY?si=xZf933uU97ZwdD7D",
  },
  {
    title: "Roger Sterling",
    link: "https://www.youtube.com/embed/HyvwWC6_Meg?si=_IKpXnr0wzh9EFV7",
  },
  {
    title: "Paper",
    link: "https://www.youtube.com/embed/a3fhwNmyt-A?si=hzYl5sYompNrFu8s",
  },
];

export const albums = [
  {
    name: "Lately (Single)",
    link: "/",
    image: "/albums/lately.jpg",
    date: "December 2023",
  },
  {
    name: "Indigo Blue (Album)",
    link: "/",
    image: "/albums/indigo-blue.jpeg",
    date: "December 2023",
  },
  {
    name: "Album3 (Single)",
    link: "/",
    image: "/albums/album3.jpeg",
    date: "December 2023",
  },
];

export const photos = [
  "../../public/photos/1.jpg",
  "../../public/photos/2.jpg",
  "../../public/photos/3.jpg",
  "../../public/photos/4.jpg",
  "../../public/photos/5.jpg",
  "../../public/photos/6.jpg",
];
