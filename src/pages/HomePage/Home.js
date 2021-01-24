import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
  homeObjectFour,
} from "./Data";
import { InfoSection, Pricing } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <Pricing />
      <InfoSection {...homeObjectFour} />
    </>
  );
};

export default Home;
