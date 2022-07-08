import { useAddress, useMetamask } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { RiCopperCoinLine } from "react-icons/ri";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Home: NextPage = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  const walletInfo = address ? (
    <Button disabled>{`${address.slice(0, 6)}...${address.slice(-4)}`}</Button>
  ) : (
    <Button onClick={connectWithMetamask}>Connect to wallet</Button>
  );

  return (
    <>
      <div className="flex justify-between">
        <Heading></Heading>
        {walletInfo}
      </div>
      <div className="text-center mt-10">
        <p className="text-7xl">
          Create your own crypto currency on the Etherum blockchain!
        </p>
        <Button>start</Button>
      </div>
    </>
  );
};

export default Home;
