import { Button } from "@/components/ui/button";
import { FiDownload, Discord } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import Photo from "@/components/Photo";
import Services from "@/components/Services";

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fejlesztő</span>
            <h1 className="h1">Üdvözöllek a weboldalamon!</h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Szakértelmem a Fivem szerver fejlesztés és script készítés.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Kapcsolat</span>
                <FaDiscord className="text-xl" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Discord</span>
                <FaDiscord className="text-xl" />
              </Button>
            </div>
          </div>
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Services />
    </section>
  );
};

export default Home;
