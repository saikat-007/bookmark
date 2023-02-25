import React from "react";
import { useState } from "react";
import Button from "./Button";
const data = [
  {
    id: 0,
    qtn: "What is Bookmark?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },

  {
    id: 1,
    qtn: "How can I request a new browser?",
    ans: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },

  {
    id: 2,
    qtn: "Is there a mobile app?",
    ans: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },

  {
    id: 3,
    qtn: "What about other Chromium browsers?",
    ans: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Question = () => {
  let [questions] = useState(data);
  let [open, setOpen] = useState([false, false, false, false]);

  return (
    <div className="mx-auto py-20 w-[90%] lg:w-1/2">
      <div>
        <h2 className="text-center text-xl lg:text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-center mx-auto leading-8 text-xl font-medium text-neutral-400 py-8">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="mx-auto border-b py-4 border-neutral-400">
          <div className="flex  justify-between gap-4">
            <div className="text-lg font-bold">
              <p>{question.qtn}</p>
            </div>
            <div>
              {/* updateMyArray( arr => [...arr, `${arr.length}`]) */}
              <button
                onClick={() => {
                  setOpen((open) => [
                    ...open.slice(0, index),
                    !open[index],
                    ...open.slice(index + 1),
                  ]);
                }}
              >
                <ion-icon
                  name={
                    open[index] ? "chevron-up-outline" : "chevron-down-outline"
                  }
                ></ion-icon>
              </button>
            </div>
          </div>
          <div
            className={`${
              open[index] ? "visible" : "hidden"
            } text-lg leading-8 text-neutral-400 font-medium my-4`}
          >
            {question.ans}
          </div>
        </div>
      ))}
      <div className="flex justify-center my-10">
        <Button/>
      </div>
    </div>
  );
};

export default Question;
