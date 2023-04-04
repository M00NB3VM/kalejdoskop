import React from "react";
import Link from "next/link";

import { BsHash } from "react-icons/bs";

interface Character {
  name: string;
  age: number;
  hobbies: string[];
  room: string;
  path: string;
  img: string;
}

function EnterRoom() {
  const characters: Character[] = [
    {
      name: "Namn Ett",
      age: 17,
      hobbies: ["Gaming", "Musik"],
      room: "Room One",
      path: "/roomone",
      img: "/Ch1.png",
    },
    {
      name: "Namn Två",
      age: 19,
      hobbies: ["Att streama online", "Fotboll"],
      room: "Room Two",
      path: "/roomtwo",
      img: "/character_two.png",
    },
    {
      name: "Namn Tre",
      age: 18,
      hobbies: ["Streama", "Smink"],
      room: "Room Three",
      path: "/roomthree",
      img: "/character_three.png",
    },
  ];

  return (
    <div>
      <ul className="m-4">
        {characters.map((character) => {
          return (
            <li
              key={character.name}
              className={`mb-4 flex items-center ${
                character.name === "Namn Två" ? "flex-row-reverse" : "flex-row"
              } `}
            >
              <ul className="min-h-[300px] min-w-[250px] rounded-2xl border-b-[6px] border-b-accent bg-secondary px-8 pt-8 text-primary">
                <li key={character.name}>
                  <div className="flex items-baseline">
                    <p>Namn: </p>
                    <h2
                      className="pl-1 text-xl"
                      style={{ textShadow: "1px 2px var(--accent-color)" }}
                    >
                      {character.name}
                    </h2>
                  </div>
                </li>
                <li key={character.age}>
                  <p>Ålder: {character.age}</p>
                </li>
                <li key={character.hobbies[0]}>
                  <ul>
                    Hobbies:{" "}
                    {character.hobbies.map((h) => {
                      return (
                        <li key={h} className="flex items-center">
                          <BsHash />
                          <p>{h}</p>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>

              <img src={character.img} alt="Karaktär" className="m-4 mx-8" />

              <nav>
                <Link
                  href={character.path}
                  className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
                >
                  {character.room}
                </Link>
              </nav>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EnterRoom;
