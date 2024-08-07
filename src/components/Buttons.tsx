"use client";

import { useInView } from "react-intersection-observer";

interface ButtonProps {
  link: string;
  text: string;
}

export function Button(props: ButtonProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  return (
    <a
      href={props.link}
      ref={ref}
      className={`${inView ? "show-bot" : "hide-bot"}`}
    >
      <div
        id="this-button"
        className="hover:-translate-y-2 hover:-translate-x-2 duration-300 
      border-4 hover:border-b-8 hover:border-r-8 hover:-mb-1  overflow-hidden
        "
      >
        <p className=" p-4 font-bold hover:underline uppercase text-center">
          {props.text}
        </p>
      </div>
    </a>
  );
}

export function RedButton(props: ButtonProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  return (
    <a href={props.link} ref={ref}>
      <div
        className={`hover:-translate-y-2 duration-300 bg-red-600 text-white rounded-full ${
          inView ? "show-bot" : "hide-bot"
        }`}
      >
        <p className="py-3 px-8 text-sm hover:underline uppercase">
          {props.text}
        </p>
      </div>
    </a>
  );
}
