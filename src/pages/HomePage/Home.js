import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
  homeObjectFour,
} from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <InfoSection {...homeObjectFour} />
    </>
  );
};

export default Home;
