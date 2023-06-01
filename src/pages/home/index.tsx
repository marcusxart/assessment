import CenterSection from "./components/CenterSection";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const Home = () => {
  return (
    <main className="min-h-screen pb-[80px] w-full flex justify-center px-[60px] bgPc:pl-[138px] bgPc:pr-[69px] ">
      <div className="max-w-[1640px] w-full flex justify-between">
        <LeftSection />
        <CenterSection />
        <RightSection />
      </div>
    </main>
  );
};

export default Home;
