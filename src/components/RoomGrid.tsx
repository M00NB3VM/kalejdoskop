import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function RoomGrid(props: Props) {
  return (
    <div className="absolute top-[110px] left-0 z-30 grid h-[calc(100%-140px)] w-full max-w-none grid-cols-6 gap-x-1">
      {props.children}
    </div>
  );
}

export default RoomGrid;
