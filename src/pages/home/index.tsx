import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const Home = () => {
  return (
    <main className="min-h-screen pb-[80px] w-full flex justify-center pl-[138px] pr-[69px]">
      <div className="max-w-[1840px] w-full flex justify-between">
        <LeftSection />
        <RightSection />
      </div>
    </main>
  );
};

export default Home;
