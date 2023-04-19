"use client";

import React, { useEffect, useState } from "react";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

function ObjectOne() {
  const allMessages = [
    {
      id: 1,
      text: "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde omnis sint non tempora voluptatibus quasi, aliquid quaerat alias veniam, autem fuga placeat sunt. Vero, culpa. Sint voluptates deleniti quam molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lor.",
      status: "approved",
    },
    {
      id: 2,
      text: "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde omnis sint non tempora voluptatibus quasi, aliquid quaerat alias veniam, autem fuga placeat sunt. Vero, culpa. Sint voluptates deleniti quam molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lor.",
      status: "approved",
    },
    {
      id: 3,
      text: "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde omnis sint non tempora voluptatibus quasi, aliquid quaerat alias veniam, autem fuga placeat sunt. Vero, culpa. Sint voluptates deleniti quam molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lor.",
      status: "denied",
    },
    {
      id: 4,
      text: "4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde omnis sint non tempora voluptatibus quasi, aliquid quaerat alias veniam, autem fuga placeat sunt. Vero, culpa. Sint voluptates deleniti quam molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lor.",
      status: "approved",
    },
    {
      id: 5,
      text: "5. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde omnis sint non tempora voluptatibus quasi, aliquid quaerat alias veniam, autem fuga placeat sunt. Vero, culpa. Sint voluptates deleniti quam molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lor.",
      status: "denied",
    },
    {
      id: 6,
      text: "6. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde omnis sint non tempora voluptatibus quasi, aliquid quaerat alias veniam, autem fuga placeat sunt. Vero, culpa. Sint voluptates deleniti quam molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lor.",
      status: "approved",
    },
  ];

  const approvedMessages = allMessages.filter((m) => m.status === "approved");

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [charMax, setCharMax] = useState(280);

  function getRandomMessages(array) {
    for (let i = approvedMessages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setMessages(array);
  }

  useEffect(() => {
    getRandomMessages(approvedMessages);
  }, []);

  // Carousel buttons
  function nextMessage() {
    if (currentMessage === 2) {
      setCurrentMessage(0);
    } else {
      setCurrentMessage(currentMessage + 1);
    }
  }
  function prevMessage() {
    if (currentMessage === 0) {
      setCurrentMessage(2);
    } else {
      setCurrentMessage(currentMessage - 1);
    }
  }

  if (messages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-30 flex max-h-[90%] flex-col items-center overflow-auto rounded-2xl border-b-[6px] border-b-accent bg-secondary p-4 text-primary">
      <ul>
        <li>
          <button
            className="mt-1 ml-auto mr-1 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-white"
            onClick={() => {
              console.log("closed");
            }}
          >
            STÄNG
          </button>
        </li>

        <li className="mx-auto flex max-w-[80%] flex-col">
          <label>Dela dina tankar!</label>
          <textarea
            className="max-w-[275px] resize-none border-2 bg-secondary"
            placeholder="Skriv här..."
            rows={10}
            cols={56}
            maxLength={280}
            onChange={(e) => {
              setCharMax(280 - e.target.value.length);
            }}
          />
          <p className="pt-1 text-xs">{charMax} / 280</p>

          <button
            className="mx-auto my-4 w-3/6 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
            onClick={() => {
              console.log("Sent");
            }}
          >
            Skicka
          </button>
        </li>

        <li className="mx-auto mt-4 max-w-[80%]">
          <h6>Meddelanden från andra</h6>
        </li>

        <li className="flex items-center justify-between">
          <BsFillCaretLeftFill
            className="h-auto w-[30px] cursor-pointer"
            onClick={() => {
              prevMessage();
            }}
          />

          <div className="my-6 min-h-[400px] max-w-[60%] bg-[url('/checkered_wallpaper.png')] bg-cover bg-no-repeat">
            {currentMessage === 0 ? (
              <div className="relative">
                <img
                  src="/binder_clip.png"
                  alt="pappersclips"
                  className="absolute -top-[30px] left-[30%] h-[50px] w-[50px]"
                />
                <p className="mt-16 ml-8 mr-8 max-w-[60%] rounded bg-white p-6 pt-8 shadow-lg">
                  {messages[0].text}
                </p>
              </div>
            ) : (
              ""
            )}
            {currentMessage === 1 ? (
              <div className="relative">
                <img
                  src="/binder_clip.png"
                  alt="pappersclips"
                  className="absolute -top-[30px] left-[60%] h-[50px] w-[50px]"
                />
                <p className="mt-10 ml-auto mr-6 max-w-[60%] rounded bg-white p-6 pt-8 shadow-lg">
                  {messages[1].text}
                </p>
              </div>
            ) : (
              ""
            )}
            {currentMessage === 2 ? (
              <div className="relative">
                <img
                  src="/binder_clip.png"
                  alt="pappersclips"
                  className="absolute -top-[30px] left-[40%] h-[50px] w-[50px]"
                />
                <p className="mt-28 ml-24 mr-2 max-w-[60%] rounded bg-white p-6 pt-8 shadow-lg">
                  {messages[2].text}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <BsFillCaretRightFill
            className="h-auto w-[30px] cursor-pointer"
            onClick={() => {
              nextMessage();
            }}
          />
        </li>

        <li className="mt-4 flex justify-center">
          {currentMessage === 0 ? (
            <div className="mx-1 h-[10px] w-[10px] rounded-full bg-primary"></div>
          ) : (
            <div className="mx-1 h-[10px] w-[10px] rounded-full border-2"></div>
          )}
          {currentMessage === 1 ? (
            <div className="mx-1 h-[10px] w-[10px] rounded-full bg-primary"></div>
          ) : (
            <div className="mx-1 h-[10px] w-[10px] rounded-full border-2"></div>
          )}
          {currentMessage === 2 ? (
            <div className="mx-1 h-[10px] w-[10px] rounded-full bg-primary"></div>
          ) : (
            <div className="mx-1 h-[10px] w-[10px] rounded-full border-2"></div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ObjectOne;
