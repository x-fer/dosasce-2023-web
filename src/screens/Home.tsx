import { Separator_1 } from "@/components";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-hero-pattern flex h-screen w-screen items-center justify-center">
        <div className="flex gap-40">
          <div className="h-64 w-96 rounded-3xl bg-green" />

          <div className="font-monomaniac flex flex-col text-red">
            <p className="text-4xl">Dobrodošli na</p>

            <p className="text-8xl">došašće++</p>
          </div>
        </div>
      </div>
      <img src={Separator_1} />
    </div>
  );
};

export default Home;
