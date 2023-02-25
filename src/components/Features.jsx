import React from "react";
import { useState } from "react";
import Button from "./Button";

const data = [
  {
    id: 1,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: "Simple Bookmarking",
    image: "./images/illustration-features-tab-1.svg",
  },

  {
    id: 2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    image: "./images/illustration-features-tab-2.svg",
  },

  {
    id: 3,
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    image: "./images/illustration-features-tab-3.svg",
  },
];

const Features = () => {
  const [tabs] = useState(data);
  const [value, setValue] = useState(0);
  const { image, title, desc, link } = tabs[value];
  return (
    <div>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <article className="text-center">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <p className="md:w-1/2 lg:w-1/3 mx-auto text-xl text-slate-500 font-medium leading-10">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </article>

        <div>
          <ul className="flex justify-center flex-col text-center my-10 md:flex-row">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                className="border-t  border-slate-400 last:border-b md:border-t-0 md:border-b md:px-10 "
              >
                <button
                  className={`py-3 text-xl font-medium ${
                    index === value && "border-b-2 border-red-400"
                  }`}

                  onClick={() => setValue(index)}
                >
                  {tab.button}
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:flex items-center justify-center lg:gap-16 pt-10 lg:place-items-center">
            <article className="flex-1 relative">
              <img src={image} alt="" className="block mx-auto w-full" />
              <div className="bg-left w-[80%] h-[70%] bg-blue-600 rounded-br-[100px] -z-20 absolute top-32 lg:top-40 md:top-64 -left-10"></div>
            </article>

            <article className="text-center pt-24 lg:pt-0 lg:text-left lg:flex-1">
              <h2 className="text-3xl my-8 font-bold lg:text-4xl">{title}</h2>
              <p className="lg:mr-24 leading-10 text-neutral-500 font-medium text-lg">{desc}</p>
              <div className="my-6">
                <Button />
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
