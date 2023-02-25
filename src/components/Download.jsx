import React from "react";
import { useState } from "react";
import Button from "./Button";
const cardData = [
  {
    id:1,
    image: "./images/logo-chrome.svg",
    browser: "Add to Chrome",
    version: "Minimum version 62",
    link: "Add and Install Extension",
  },

  {
    id:2,
    image: "./images/logo-firefox.svg",
    browser: "Add to Firefox",
    version: "Minimum version 55",
    link: "Add and Install Extension",
  },

  {
    id:3,
    image: "./images/logo-opera.svg",
    browser: "Add to Opera",
    version: "Minimum version 46",
    link: "Add and Install Extension",
  },
];

const Download = () => {
  const [cards] = useState(cardData);
  return (
    <div>
      <div className="items-center text-center pb-10 lg:pb-2">
        <h2 className="text-3xl font-bold py-4">Download the extension</h2>
        <p className="leading-10 text-xl text-neutral-500 font-medium px-16 md:px-64">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="flex gap-10 flex-col lg:flex-row justify-center items-center">
        {cards.map((card) => (
          <div key={card.id} className={`w-72  bg-white font-semibold text-center rounded-xl border shadow-lg p-10 ${card.id==2 && "lg:mt-20"} ${card.id==3 && "lg:mt-40"}`}>
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg mx-auto"
              src={card.image}
              alt="product designer"
            />
            <h1 className="text-xl font-bold text-black">{card.browser}</h1>
            <h3 className="text-base py-4 text-neutral-500">{card.version}</h3>
            <div className="border-dotted border-t-4 border-neutral-400 pt-6 mt-4"><Button/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
