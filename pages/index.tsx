import type { NextPage } from "next";
import { RiCopperCoinLine } from "react-icons/ri";
import Button from "../components/Button";
import Heading from "../components/heading";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <Heading></Heading>
        <Button>Connect to wallet</Button>
      </div>
    </>
  );
};

export default Home;
