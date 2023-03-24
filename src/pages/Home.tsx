import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import logo from "../assets/rat-logo.png";
import { ButtonLink } from "../components/Buttons";
import { TopRightActionIcon } from "../components/TopRightActionIcon";
import { useLocalStorage } from "../hooks/useLocalStorage";

function HomePage() {
  const [highscore] = useLocalStorage("highscore", 0);
  let isLoading = true;

  setTimeout(() => (isLoading = false), 3000);

  // return (
  //   <header>
  //     <img className="my-5 mx-auto w-3/4" src={logo} />
  //     <h1 className="text-medium inline-flex items-start">
  //       <span className="text-vertical">
  //         <span className="bg-black text-big font-bold text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
  //           R
  //         </span>
  //         <span
  //           className={`transition-[max-height] duration-[10000ms] ease-in overflow-hidden inline-block ${
  //             isLoading ? "max-h-none" : "max-h-0"
  //           }`}
  //         >
  //           emote
  //         </span>
  //         {/* <span
  //           className={`transition-all duration-[5000ms] ease-in-out max-h-none inline-block overflow-hidden ${
  //             !isLoading && "max-h-0"
  //           }`}
  //         >
  //           NOTE: THE opacity does work I just can't get hte height one to work... but height works in the browser so I just hate my life
  //           emote
  //         </span> */}
  //         {/* <span
  //           className={`transition-all duration-[5000ms] ${
  //             isLoading && "opacity-0 max-h-0"
  //           }`}
  //         >
  //           emote
  //         </span> */}
  //       </span>
  //       &nbsp;
  //       <span className="text-vertical">
  //         <span className="bg-black text-big font-bold text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
  //           A
  //         </span>
  //         ssociation
  //       </span>
  //       &nbsp;
  //       <span className="text-vertical">
  //         <span className="bg-black text-big font-bold text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
  //           T
  //         </span>
  //         est
  //       </span>
  //     </h1>
  //   </header>
  // );

  return (
    <>
      <header>
        <TopRightActionIcon faIcon={faQuestion} redirectPath="/how-to" />
        <img className="my-5 mx-auto w-3/4 max-w-xs" src={logo} />
        <h1 className="text-big font-bold">
          <span className="bg-black text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
            R
          </span>{" "}
          <span className="bg-black text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
            A
          </span>{" "}
          <span className="bg-black text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
            T
          </span>
        </h1>
        <h2 className="my-1 text-medium">the game</h2>
      </header>

      <section className="flex flex-col items-center">
        <ButtonLink redirectPath="/game" text="play" />
        <ButtonLink redirectPath="/settings" text="settings" />
      </section>

      <section className="my-5">
        <p className="font-bold text-big">{highscore}</p>
        <p className="text-medium">highscore</p>
      </section>
    </>
  );
}

export default HomePage;
