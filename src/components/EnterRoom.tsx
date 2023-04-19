import React from "react";
import Link from "next/link";

interface Character {
  name: string;
  age: number;
  description: string;
  room: string;
  path: string;
  img: string;
}

function EnterRoom() {
  const characters: Character[] = [
    {
      name: "Milou",
      age: 17,
      description:
        "Milou älskar alla typer av spel och har startat en spelförening med sina vänner. Hans dröm vore att träffa en tjej med samma intressen men trots hans försök har han inte lyckats charma någon. Lika mycket energi lägger han inte på sitt skolarbete, vilket hans lärare och föräldrar ofta påpekar.",
      room: "Room One",
      path: "/roomone",
      img: "/Ch1.png",
    },
    {
      name: "Liam",
      age: 20,
      description:
        "Sedan Sebastian hoppade av gymnasiet har det varit svårt för honom att hamna rätt. Alla chefer han har haft är dumma i huvudet och att flytta hemifrån verkar vara omöjligt. Han har en flickvän men även hon har börjat vända sig emot honom.",
      room: "Room Two",
      path: "/roomtwo",
      img: "/character_two.png",
    },
    {
      name: "Polka",
      age: 18,
      description:
        "Stolt samlare av limited edition plushies och japanska rollspel. Hon har alltid gillat spelkultur och följer flera cosplayers på sociala medier. Hon hade gärna cosplayat själv men har aldrig haft några nära vänner och inte vågat åka på konvent ensam. Nu har hon dock bestämt sig för att börja våga mer och börja streama hennes favoritspel.",
      room: "Room Three",
      path: "/roomthree",
      img: "/character_three.png",
    },
  ];

  return (
    <div className="w-full">
      <ul className="m-4">
        {characters.map((character) => {
          return (
            <li
              key={character.name}
              className={`mb-4 flex flex-wrap items-center ${
                character.name === "Sebastian" ? "flex-row-reverse" : "flex-row"
              } `}
            >
              <ul className="min-h-[300px] w-[100%] rounded-2xl border-b-[6px] border-b-accent bg-secondary px-8 pt-8 text-primary sm:max-w-[50%] md:min-w-[250px] md:max-w-[40%] xl:max-w-[30%]">
                <li key={character.name}>
                  <div className="flex items-baseline">
                    <p>Namn: </p>
                    <h2 className="px-2 text-xl">{character.name}</h2>
                  </div>
                </li>
                <li key={character.age}>
                  <p>Ålder: {character.age}</p>
                </li>
                <li key={`${character.name}description`} className="py-4">
                  <p>{character.description}</p>
                </li>
              </ul>

              <img
                src={character.img}
                alt="Karaktär"
                className="m-4 mx-8 max-w-full"
              />

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
