import React, { useEffect } from "react";
import confetti from "canvas-confetti";

interface Props {
  showModal: boolean;
  setShowModal: (arg0: boolean) => void;
}

function ThankYouModal({ showModal, setShowModal }: Props) {
  useEffect(() => {
    confetti({
      particleCount: 40,
      spread: 360,
      startVelocity: 35,
      origin: { y: 0.3 },
    });
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-primary">
      <button
        className="ml-auto mr-4 mt-4 block transform rounded-full bg-accent py-4 px-6 text-right font-['Documan_heavy'] text-lg text-white transition duration-500 hover:bg-accentHover"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        STÄNG
      </button>
      <div className="mx-auto flex h-[50%] max-w-[60%] items-center justify-center bg-[url('/modal_bg.png')] bg-contain bg-center bg-no-repeat text-center lg:max-w-[40%] xl:max-w-[30%]">
        <p className="text-lg text-secondary">
          Tack för att du laddat ner spelet! 💖
        </p>
      </div>
    </div>
  );
}

export default ThankYouModal;
