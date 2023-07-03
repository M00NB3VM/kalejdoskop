import React from "react";
import { motion } from "framer-motion";

interface Character {
  name: string;
  nameImg: string;
  description: string;
  img: string;
  door: string;
}

function EnterRoom() {
  const characters: Character[] = [
    {
      name: "Milou",
      nameImg: "/milou_name.png",
      description:
        "Milou, 17 år, älskar alla typer av spel och har startat en spelförening med sina vänner. Hans dröm vore att träffa en tjej med samma intressen men trots hans försök har han inte lyckats charma någon. Lika mycket energi lägger han inte på sitt skolarbete, vilket hans lärare och föräldrar ofta påpekar.",
      img: "/miluo_fb_v2.png",
      door: "/milou_door_v1.png",
    },
    {
      name: "Liam",
      nameImg: "/liam_name.png",
      description:
        "Sedan Liam, 20 år, hoppade av gymnasiet har det varit svårt för honom att hamna rätt. Alla chefer han har haft är dumma i huvudet och att flytta hemifrån verkar vara omöjligt. Han har en flickvän men även hon har börjat vända sig emot honom.",
      img: "/liam_fb_v2.png",
      door: "/liam_door_v1.png",
    },
    {
      name: "Naomi",
      nameImg: "/naomi_name.png",
      description:
        "Naomi, 18 år, är stolt samlare av limited edition plushies och japanska rollspel. Hon har alltid gillat spelkultur och följer flera cosplayers på sociala medier. Hon hade gärna cosplayat själv men har aldrig haft några nära vänner och inte vågat åka på konvent ensam. Nu har hon dock bestämt sig för att börja våga mer och börja streama hennes favoritspel.",
      img: "/polka_fb_v2.png",
      door: "/polka_door_v1.png",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="mx-4 mt-4 mb-0 max-w-[1000px] text-lg md:mt-10 md:text-3xl lg:mx-auto">
        Möt våra karaktärer:
      </h2>
      <ul className="mx-4 mx-auto">
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
                        className="relative -top-[10%] left-[75%] inline-block md:-top-[10%] md:left-[80%]"
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

              <div className="relative flex h-[400px] w-[270px] flex-col items-end sm:h-[500px] sm:w-[300px] md:h-[580px] md:w-[380px]">
                <motion.div
                  className="relative h-full w-full"
                  initial={{ opacity: 0, y: 50 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "ease-out", bounce: 0.4, duration: 0.8 }}
                >
                  {character.name === "Milou" ? (
                    <div className="absolute top-[80px] left-[10px] w-[25px] md:top-[60px] md:-left-[20px] md:w-[50px]">
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
                        className="relative top-[30px] left-0 inline-block sm:-left-[40px] sm:top-[60px] md:top-[30px] md:-left-0 lg:-left-[80px] lg:top-[45px] xl:-left-[100px]"
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
                        className="relative top-[330px] left-[220px] z-10 inline-block sm:top-[420px] sm:left-[265px] md:top-[470px] md:left-[84%]"
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

                  <div className="relative h-full w-full">
                    <img
                      className="absolute bottom-0 left-0 mx-auto mt-4 max-h-[80%] max-w-full"
                      src={character.img}
                      alt={`${character.name}`}
                    />
                    <img
                      className="absolute bottom-6 right-4 -z-10 mx-auto mt-6 max-h-[83%] max-w-full sm:-right-2 md:bottom-10 md:right-2 lg:right-6"
                      src={character.door}
                      alt={`Dörr till ${character.name}s rum`}
                    />
                  </div>
                </motion.div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EnterRoom;
