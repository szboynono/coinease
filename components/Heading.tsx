import React from "react";
import { RiCopperCoinLine } from "react-icons/ri";

export default function Heading() {
  return (
    <div className="flex align-baseline">
      <RiCopperCoinLine size={40} className="mr-3" />
      <h1 className="text-3xl font-bold">Coinease</h1>
    </div>
  );
}
