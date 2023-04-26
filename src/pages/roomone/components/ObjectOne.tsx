"use client";

import React, { useEffect, useState } from "react";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

interface Props {
  showObjectOne: boolean;
  setShowObjectOne: (arg0: boolean) => void;
}

function ObjectOne({ showObjectOne, setShowObjectOne }: Props) {
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

  return (
    <>
      {showObjectOne ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 overflow-auto md:relative md:col-span-2 md:col-start-2 md:min-h-0">
          <ul className="min-h-screen bg-secondary p-4 md:mt-4 md:h-auto md:min-h-0 md:rounded-2xl md:border-b-[6px] md:border-b-accent">
            <li>
              <button
                className="mt-1 ml-auto mr-1 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-white"
                onClick={() => {
                  setShowObjectOne(!showObjectOne);
                }}
              >
                STÄNG
              </button>
            </li>

            <li className="mx-auto flex max-w-max flex-col">
              <label>Dela dina tankar!</label>
              <textarea
                className="max-w-[275px] resize-none border-2 bg-secondary"
                placeholder="Skriv här..."
                rows={4}
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

            <li className="mx-auto max-w-[90%]">
              <div className="my-6">
                {currentMessage === 0 ? (
                  <p className="rounded bg-white p-6 shadow-lg">
                    {messages[0].text}
                  </p>
                ) : (
                  ""
                )}
                {currentMessage === 1 ? (
                  <p className="rounded bg-white p-6 shadow-lg">
                    {messages[1].text}
                  </p>
                ) : (
                  ""
                )}
                {currentMessage === 2 ? (
                  <p className="rounded bg-white p-6 shadow-lg">
                    {messages[2].text}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </li>

            <li className="mx-auto my-8 flex w-full max-w-[90%] items-center justify-between">
              <BsFillCaretLeftFill
                className="h-auto w-[30px] cursor-pointer"
                onClick={() => {
                  prevMessage();
                }}
              />
              <div className="flex">
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
              </div>
              <BsFillCaretRightFill
                className="h-auto w-[30px] cursor-pointer"
                onClick={() => {
                  nextMessage();
                }}
              />
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ObjectOne;
