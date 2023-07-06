"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import ChartOne from "./ChartOnePolka";

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

function PolkaGameConsole({ showObject, setShowObject }: Props) {
  useEffect(() => {
    const element = document.getElementById("polka-console");

    if (showObject === true) {
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  }, [showObject]);

  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesError, setMessagesError] = useState<boolean>(false);
  const [showMessageResponse, setShowMessageResponse] =
    useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
  const [currentMessage, setCurrentMessage] = useState(0);
  const [charMax, setCharMax] = useState(280);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const URL = process.env.NEXT_PUBLIC_API_URL;
        const response = await axios.get(
          `${URL}/messages/three-random/Polkas/Spelkonsol`
        );
        setMessagesError(false);
        setMessages(response.data);
      } catch (error) {
        console.log(error);
        //setMessagesError(true);
      }
    }

    fetchMessages();
  }, []);

  async function postMessage() {
    try {
      const newMessage = {
        room: "Polka",
        object: "Spelkonsol",
        message: userMessage,
      };
      const URL = process.env.NEXT_PUBLIC_API_URL;
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
          id="polka-console"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-secondary md:absolute md:top-[15%] md:left-[5%] md:bottom-[20%] md:min-h-0 md:w-[350px] md:bg-transparent"
        >
          <div className="relative mb-20 h-full overflow-hidden bg-secondary md:w-[330px] md:rounded-2xl md:border-b-[6px] md:border-b-accent md:p-4">
            <button
              className="absolute top-2 right-2 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-sm text-white"
              onClick={() => {
                setShowObject(!showObject);
              }}
            >
              STÄNG
            </button>
            <ul className="object-modal relative mx-4 mt-20 max-h-[90%] overflow-y-scroll pr-4 md:mx-0 md:mt-10">
              <li>
                <ChartOne />
              </li>
              {!showMessageResponse ? (
                <li className="mx-auto mt-4 flex max-w-max flex-col">
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
                  <p className="w-[270px] pt-1 text-right text-xs">
                    {charMax} / 280
                  </p>
                  <p className="w-[270px] pt-1 text-xs">
                    * Du är helt anonym när du skickar ett meddelande och vi
                    lagrar ingenting som kan spåra ett meddelande tillbaka till
                    dig. Dela ingen personlig information.
                  </p>

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
                  <p className="pt-1 text-xs">
                    När ditt meddelande har blivit godkänt kommer det att läggas
                    till bland de slumpmässiga meddelanden som visas på sidan.
                  </p>
                </li>
              )}
              <li className="mx-auto mt-8 max-w-[80%]">
                <h6>Meddelanden från andra</h6>
              </li>

              <li className="mx-auto max-w-[90%]">
                {messagesError ? (
                  <div className="mt-4 rounded bg-white p-6 shadow-lg">
                    <p>Ooops!</p>
                    <p>
                      Det gick inte att hämta meddelanden just nu. Försök igen
                      senare.
                    </p>
                  </div>
                ) : (
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
                )}
              </li>
              {messagesError ? (
                <></>
              ) : (
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
              )}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PolkaGameConsole;
