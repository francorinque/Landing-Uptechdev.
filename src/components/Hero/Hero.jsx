import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className='grid gap-10 lg:grid-cols-2 place-items-center'>
      <HeroText />
      <HeroImg />
    </div>
  );
};
export default Hero;
