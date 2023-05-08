import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

interface Character {
  name: string;
  nameImg: string;
  description: string;
  path: string;
  img: string;
  imgWalking: string;
  door: string;
  openDoor: string;
}

function EnterRoom() {
  const characters: Character[] = [
    {
      name: "Milou",
      nameImg: "/milou.png",
      description:
        "Milou, 17 år, älskar alla typer av spel och har startat en spelförening med sina vänner. Hans dröm vore att träffa en tjej med samma intressen men trots hans försök har han inte lyckats charma någon. Lika mycket energi lägger han inte på sitt skolarbete, vilket hans lärare och föräldrar ofta påpekar.",
      path: "/roomone",
      img: "/Char1_FBody.png",
      imgWalking: "/Char1_FBody_Walk.png",
      door: "/Char1_Door.png",
      openDoor: "/Char1_Door_Open.png",
    },
    {
      name: "Liam",
      nameImg: "/liam.png",
      description:
        "Sedan Liam, 20 år, hoppade av gymnasiet har det varit svårt för honom att hamna rätt. Alla chefer han har haft är dumma i huvudet och att flytta hemifrån verkar vara omöjligt. Han har en flickvän men även hon har börjat vända sig emot honom.",
      path: "/roomtwo",
      img: "/Char2_FBody.png",
      imgWalking: "/Char2_FBody_Walk.png",
      door: "/Char2_Door.png",
      openDoor: "/Char2_Door_Open.png",
    },
    {
      name: "Polka",
      nameImg: "/polka.png",
      description:
        "Polka, 18 år, är stolt samlare av limited edition plushies och japanska rollspel. Hon har alltid gillat spelkultur och följer flera cosplayers på sociala medier. Hon hade gärna cosplayat själv men har aldrig haft några nära vänner och inte vågat åka på konvent ensam. Nu har hon dock bestämt sig för att börja våga mer och börja streama hennes favoritspel.",
      path: "/roomthree",
      img: "/Char3_FBody.png",
      imgWalking: "/Char3_FBody_Walk.png",
      door: "/Char3_Door.png",
      openDoor: "/Char3_Door_Open.png",
    },
  ];

  return (
    <div className="w-full">
      <ul className="m-4">
        {characters.map((character) => {
          return (
            <li
              key={character.name}
              className={`mb-14 flex flex-col flex-wrap  items-center justify-center ${
                character.name === "Liam"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } `}
            >
              <div
                className={`${
                  character.name === "Liam" ? "md:ml-[100px]" : "md:mr-10"
                }  mt-8 sm:max-w-[80%] md:max-w-[40%] xl:max-w-[30%]`}
              >
                <img
                  className="h-auto max-w-full"
                  src={character.nameImg}
                  alt={character.name}
                />
                <div className="flex h-[25px] max-w-full justify-between bg-gradient-to-t from-primary to-primary bg-[length:100%_2px] bg-center bg-no-repeat">
                  <img
                    src="/sparkle.png"
                    alt="stjäna"
                    className="mx-2 max-h-full w-auto"
                  />
                  <img
                    src="/sparkle.png"
                    alt="stjäna"
                    className="mx-2 max-h-full w-auto"
                  />
                </div>

                <div className="mt-4 w-full rounded-2xl border-b-[6px] border-b-accent bg-secondary px-6 py-4 text-primary ">
                  <p key={`${character.name}description`} className="py-4">
                    {character.description}
                  </p>
                </div>
              </div>

              <nav>
                <Link
                  href={character.path}
                  className="maw-w-full mt-8 flex flex-col justify-center"
                >
                  <div className="relative h-[500px] w-[250px]">
                    {character.name === "Milou" ? (
                      <div className="absolute top-[50px] left-[20px] w-[50px]">
                        <ul className="flex flex-col bg-[url('/swirl.png')] bg-cover bg-no-repeat">
                          <motion.li
                            initial={{ y: 0 }}
                            animate={{ y: [0, 6, 0], rotate: [0, 10, 0] }}
                            transition={{
                              duration: 3.2,
                              repeat: Infinity,
                              delay: 0.5,
                            }}
                          >
                            <img
                              alt="Musiknot"
                              src="/note2.png"
                              className="ml-auto h-[30px] max-w-[20px]"
                            />
                          </motion.li>
                          <motion.li
                            initial={{ y: 0 }}
                            animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
                            transition={{
                              delay: 0.2,
                              duration: 3,
                              repeat: Infinity,
                            }}
                          >
                            <img
                              alt="Musiknot"
                              src="/note1.png"
                              className="h-[30px] max-w-[20px]"
                            />
                          </motion.li>
                          <motion.li
                            initial={{ y: 0 }}
                            animate={{ y: [0, 6, 0], rotate: [0, -15, 0] }}
                            transition={{ duration: 2.8, repeat: Infinity }}
                          >
                            <img
                              alt="Musiknot"
                              src="/note3.png"
                              className="ml-[30px] h-[30px] max-w-[20px]"
                            />
                          </motion.li>
                        </ul>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {character.name === "Liam" ? (
                      <div className="absolute top-0 left-0 w-full">
                        <motion.div
                          className="relative -top-[10px] right-[50px]"
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          <img
                            alt="Pratbubbla"
                            src="/bubble.png"
                            className="h-[130px] w-[130px]"
                          />
                        </motion.div>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {character.name === "Polka" ? (
                      <div className="absolute right-0 bottom-0 top-0 left-0 ">
                        <motion.div
                          className="relative top-0 left-0 inline-block"
                          initial={{ y: 0 }}
                          animate={{ y: [0, 10, 0], rotate: [0, 15, 0] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                          }}
                        >
                          <img
                            alt="Körsbärsblomma"
                            src="/sakura.png"
                            className="h-[30px] w-[30px]"
                          />
                        </motion.div>
                        <motion.div
                          className="relative top-[60px] left-[15px] inline-block"
                          initial={{ y: 0 }}
                          animate={{ y: [0, 5, 0], rotate: [0, -15, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                        >
                          <img
                            alt="Körsbärsblomma"
                            src="/sakura.png"
                            className="h-[30px] w-[30px]"
                          />
                        </motion.div>
                        <motion.div
                          className="relative -top-[70px] left-[80px] inline-block"
                          initial={{ y: 0 }}
                          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                        >
                          <img
                            alt="Körsbärsblomma"
                            src="/sakura.png"
                            className="h-[30px] w-[30px]"
                          />
                        </motion.div>
                        <motion.div
                          className="relative top-[410px] left-[240px] inline-block"
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <img
                            alt="Nallebjörn"
                            src="/teddy.png"
                            className="h-[70px] w-[70px]"
                          />
                        </motion.div>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    <motion.div
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full w-full"
                    >
                      <img
                        src={character.img}
                        alt="Karaktär"
                        className="absolute left-0 bottom-0 z-10 max-h-[90%]"
                      />
                      <img
                        className="absolute left-[90px] top-0 h-full w-full"
                        src={character.door}
                        alt="Dörr till karaktärs rum"
                      />
                    </motion.div>

                    <div className="absolute top-0 left-0 -z-50 h-full w-full">
                      <img
                        src={character.img}
                        alt="Karaktär som går"
                        className="absolute left-0 bottom-0 z-10 max-h-[90%]"
                      />
                      <img
                        className="absolute left-[90px] top-0 h-full w-full"
                        src={character.openDoor}
                        alt="Öppen dörr till karaktärs rum"
                      />
                    </div>
                  </div>

                  <div className="relative mx-auto mt-4 min-h-[40px] min-w-[245px] rounded-full outline outline-1 outline-offset-[1px] outline-black">
                    <div className="absolute -top-[6px] right-[4px] -z-10 flex min-w-[250px] max-w-[275px] items-center justify-center rounded-full bg-accent px-2 py-2">
                      <p className="mr-2 text-lg font-bold text-white ">
                        Gå till {character.name}s rum
                      </p>
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="pr-[15px] pl-[5px]"
                      >
                        <BsArrowRight className="stroke-[2] text-white" />
                      </motion.div>
                    </div>
                  </div>
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
