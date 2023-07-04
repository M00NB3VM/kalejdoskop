"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import ChartOneLiam from "./ChartOneLiam";

interface Props {
  showObject: boolean;
  setShowObject: (arg0: boolean) => void;
}

interface Message {
  id: number;
  timestamp: Date;
  room: string;
  object: string;
  message: string;
  status: string;
}

function LiamEnvelope({ showObject, setShowObject }: Props) {
  useEffect(() => {
    const element = document.getElementById("liam-envelope");

    if (showObject === true) {
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  }, [showObject]);

  const [messages, setMessages] = useState<Message[]>([]);
  const [showMessageResponse, setShowMessageResponse] =
    useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
  const [currentMessage, setCurrentMessage] = useState(0);
  const [charMax, setCharMax] = useState(280);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const URL = process.env.API_URL;
        const response = await axios.get(
          `${URL}/messages/three-random/Liams/Brev`
        );
        setMessages(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMessages();
  }, []);

  async function postMessage() {
    try {
      const newMessage = {
        room: "liam",
        object: "envelope",
        message: userMessage,
      };
      const URL = process.env.API_URL;
      await axios.post(`${URL}/messages`, newMessage);
      setShowMessageResponse(true);
    } catch (error) {
      console.log(error);
    }
  }

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
      {showObject ? (
        <div
          id="liam-envelope"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto md:absolute md:top-[25%] md:left-[70%] md:min-h-0 md:max-w-fit"
        >
          <ul className="min-h-full bg-secondary p-4 md:h-auto md:min-h-0 md:rounded-2xl md:border-b-[6px] md:border-b-accent">
            <li>
              <button
                className="mt-1 ml-auto mr-1 mb-1 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-sm text-white"
                onClick={() => {
                  setShowObject(!showObject);
                }}
              >
                STÄNG
              </button>
            </li>

            <li>
              <ChartOneLiam />
            </li>
            {!showMessageResponse ? (
              <li className="mx-auto flex max-w-max flex-col">
                <label>Dela dina tankar!</label>
                <textarea
                  className="max-w-[275px] resize-none border-2 bg-secondary"
                  placeholder="Skriv här..."
                  rows={4}
                  cols={56}
                  maxLength={280}
                  value={userMessage}
                  onChange={(e) => {
                    setUserMessage(e.target.value);
                    setCharMax(280 - e.target.value.length);
                  }}
                />
                <p className="pt-1 text-xs">{charMax} / 280</p>

                <button
                  className="mx-auto my-4 w-3/6 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
                  onClick={() => {
                    postMessage();
                  }}
                >
                  Skicka
                </button>
              </li>
            ) : (
              <li>
                <p className="my-6 text-xl">
                  Tack för att du delade dina tankar!
                </p>
              </li>
            )}
            <li className="mx-auto mt-4 max-w-[80%]">
              <h6>Meddelanden från andra</h6>
            </li>

            <li className="mx-auto max-w-[90%]">
              <div className="my-6">
                {currentMessage === 0 ? (
                  <p className="rounded bg-white p-6 shadow-lg">
                    {messages[0]?.message ?? ""}
                  </p>
                ) : (
                  ""
                )}
                {currentMessage === 1 ? (
                  <p className="rounded bg-white p-6 shadow-lg">
                    {messages[1]?.message ?? ""}
                  </p>
                ) : (
                  ""
                )}
                {currentMessage === 2 ? (
                  <p className="rounded bg-white p-6 shadow-lg">
                    {messages[2]?.message ?? ""}
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

export default LiamEnvelope;
