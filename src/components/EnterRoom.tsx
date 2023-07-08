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
  door: string;
  openDoor: string;
}

function EnterRoom() {
  const characters: Character[] = [
    {
      name: "Milou",
      nameImg: "/milou_name.png",
      description:
        "Milou, 17 år, älskar alla typer av spel och har startat en spelförening med sina vänner. Hans dröm vore att träffa en tjej med samma intressen men trots hans försök har han inte lyckats charma någon. Lika mycket energi lägger han inte på sitt skolarbete, vilket hans lärare och föräldrar ofta påpekar.",
      path: "/roomone",
      img: "/milou_fb_v2.png",
      door: "/milou_door_v1.png",
      openDoor: "",
    },
    {
      name: "Liam",
      nameImg: "/liam_name.png",
      description:
        "Sedan Liam, 20 år, hoppade av gymnasiet har det varit svårt för honom att hamna rätt. Alla chefer han har haft är dumma i huvudet och att flytta hemifrån verkar vara omöjligt. Han har en flickvän men även hon har börjat vända sig emot honom.",
      path: "/roomtwo",
      img: "/liam_fb_v2.png",
      door: "/liam_door_v1.png",
      openDoor: "",
    },
    {
      name: "Naomi",
      nameImg: "/naomi_name.png",
      description:
        "Naomi, 18 år, är stolt samlare av limited edition plushies och japanska rollspel. Hon har alltid gillat spelkultur och följer flera cosplayers på sociala medier. Hon hade gärna cosplayat själv men har aldrig haft några nära vänner och inte vågat åka på konvent ensam. Nu har hon dock bestämt sig för att börja våga mer och börja streama hennes favoritspel.",
      path: "/roomthree",
      img: "/naomi_fb_v2.png",
      door: "/naomi_door_v1.png",
      openDoor: "",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="mx-4 mt-4 mb-0 max-w-[1000px] text-lg md:mt-10 md:text-3xl lg:mx-auto">
        Möt våra karaktärer:
      </h2>
      <ul className="m-4 mx-auto">
        {characters.map((character) => {
          return (
            <li
              key={character.name}
              className={`mb-14 mt-4 flex flex-col-reverse flex-wrap items-center justify-center md:mt-14 ${
                character.name === "Liam"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } `}
            >
              <div
                className={`${
                  character.name === "Liam" ? "md:ml-[80px]" : "md:mr-20"
                }  mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-[40%] xl:max-w-[25%]`}
              >
                <div className="relative">
                  <img
                    className="h-auto max-w-full pt-0 md:pt-0"
                    src={character.nameImg}
                    alt={character.name}
                  />
                  {character.name === "Naomi" ? (
                    <div className="absolute top-0 left-0 h-full w-full">
                      <motion.div
                        className="relative top-[-5px] -left-[10px] inline-block"
                        initial={{ x: 0, y: 0 }}
                        animate={{
                          x: [0, 10, 0],
                          y: [0, -5, 0],
                          rotate: [0, 15, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                        }}
                      >
                        <img
                          alt="Körsbärsblomma"
                          src="/sakura.png"
                          className="h-[25px] w-[25px]"
                        />
                      </motion.div>
                      <motion.div
                        className="relative top-[70%] left-[20%] inline-block"
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
                          className="h-[20px] w-[20px]"
                        />
                      </motion.div>
                      <motion.div
                        className="relative -top-[10%] left-[75%] inline-block md:-top-[20%] md:left-[80%]"
                        initial={{ y: 0, x: 0 }}
                        animate={{
                          y: [0, -5, 0, -5, 0],
                          x: [0, -10, 0],
                          rotate: [0, -5, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                        }}
                      >
                        <img
                          alt="Körsbärsblomma"
                          src="/sakura.png"
                          className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                        />
                      </motion.div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

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

                <div className="mt-4 w-full rounded-2xl border-b-[6px] border-b-accent bg-secondary px-6 py-4  text-sm text-primary md:text-base">
                  <p key={`${character.name}description`} className="py-4">
                    {character.description}
                  </p>
                </div>
              </div>

              <nav className="relative flex h-[400px] w-[270px] flex-col items-end sm:h-[500px] sm:w-[300px] md:h-[580px] md:w-[380px]">
                <div className="relative h-full w-full">
                  <Link
                    href={character.path}
                    className="relative flex h-[400px] w-[270px] flex-col items-end sm:h-[500px] sm:w-[300px] md:h-[580px] md:w-[380px]"
                  >
                    <div className="relative h-full w-full">
                      {character.name === "Milou" ? (
                        <div className="absolute top-[50px] left-[10px] w-[25px] md:top-[60px] md:-left-[20px] md:w-[50px]">
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
                                className="ml-auto h-[15px] max-w-[10px] md:h-[30px] md:max-w-[20px]"
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
                                className="h-[15px] max-w-[10px] md:h-[30px] md:max-w-[20px]"
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
                                className="ml-[15px] h-[15px] max-w-[10px] md:ml-[30px] md:h-[30px] md:max-w-[20px]"
                              />
                            </motion.li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}

                      {character.name === "Liam" ? (
                        <div className="absolute top-0 left-0 h-full w-full">
                          <motion.div
                            className="relative top-[50px] -left-[5px] inline-block sm:-left-[50px] sm:top-[55px] md:top-[60px] md:-left-[55px] lg:-left-[90px] lg:top-[30px] xl:top-[10px] xl:-left-[110px]"
                            animate={{ rotate: [0, -5, 0] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                          >
                            <img
                              alt="Pratbubbla"
                              src="/bubble.png"
                              className="h-[50px] w-[50px] sm:h-[80px] sm:w-[80px] lg:h-[130px] lg:w-[130px]"
                            />
                          </motion.div>
                        </div>
                      ) : (
                        ""
                      )}

                      {character.name === "Naomi" ? (
                        <div className="absolute top-0 left-0 h-full w-full overflow-hidden sm:overflow-visible">
                          <motion.div
                            className="relative top-[280px] left-[220px] z-10 inline-block sm:top-[370px] sm:left-[265px] md:top-[420px] md:left-[80%]"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            <img
                              alt="Nallebjörn"
                              src="/teddy.png"
                              className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
                            />
                          </motion.div>
                        </div>
                      ) : (
                        ""
                      )}

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative h-full w-full"
                      >
                        <img
                          className="absolute bottom-0 left-[8%] mx-auto mt-4 max-h-[85%] max-w-full md:left-0"
                          src={character.img}
                          alt={`${character.name}`}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        viewport={{ once: true }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="absolute bottom-[25px] right-4 -z-10 mx-auto mt-6 flex max-h-[90%] max-w-full justify-end sm:bottom-[35px] sm:-right-2 md:bottom-10 md:right-2 lg:right-6"
                      >
                        <img
                          className="max-h-[100%] max-w-[75%] md:max-w-[78%]"
                          src={character.door}
                          alt={`Dörr till ${character.name}s rum`}
                        />
                      </motion.div>
                    </div>

                    <div className="relative mt-4 mr-1 min-h-[40px] w-[98%] rounded-full outline outline-1 outline-offset-[1px] outline-black">
                      <div className="absolute -top-[6px] right-[6px] -z-10 flex w-full items-center justify-center rounded-full bg-accent px-2 py-2">
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
                </div>
              </nav>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EnterRoom;
