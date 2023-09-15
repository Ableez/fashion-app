import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from "@mui/material";

const ImagesHero = () => {
  const bg1 =
    "https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
  const bg2 =
    "https://images.unsplash.com/photo-1685328403783-00925c2a4301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";


  const smallScreen = useMediaQuery("(max-width:863px")
  
  return (
    <div className="md:h-[90vh] h-fit grid lg:grid-flow-col lg:grid-cols-2 grid-flow-row bg-neutral-100 md:p-3 md:gap-3 p-2 gap-2">
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "fill",
          backgroundPosition: "center",
        }}
        className="md:h-full h-screen rounded-3xl p-4 place-items-center grid justify-start"
      >
        <div className="grid grid-flow-row w-fit gap-2">
          <div id="headerText" className="text-white mb-5">
            <h4 className="font-extrabold text-5xl md:text-6xl text-opacity-80 bg-blend-exclusion text-white">MORE FLEX</h4>
            <p className="w-4/6 text-md md:text-lg">
              Discover the beauty of minimalism, where simplicity meets care in
              every stitch.
            </p>
          </div>
          <a href="#" className="py-3 hover:no-underline hover:px-9 px-8 uppercase tracking-wide text-start font-bold md:text-lg text-md border border-transparent hover:border-black grid grid-flow-col place-items-center gap-3 w-fit duration-400  rounded-md bg-white">
            Shop Men
            <ArrowRightIcon width={20} className="aArr" />
          </a >
          <a href="#" className="py-3 hover:no-underline hover:px-9 px-8 uppercase tracking-wide text-start font-bold md:text-lg text-md border border-transparent hover:border-black grid grid-flow-col place-items-center gap-3 w-fit duration-400  rounded-md bg-white">
            Shop Women
            <ArrowRightIcon width={20} className="aArr" />
          </a >
          <a href="#" className="py-3 hover:no-underline hover:px-9 px-8 uppercase tracking-wide text-start font-bold md:text-lg text-md border border-transparent hover:border-black grid grid-flow-col place-items-center gap-3 w-fit duration-400  rounded-md bg-white">
            Shop Kids
            <ArrowRightIcon width={20} className="aArr" />
          </a >
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "fill",
          backgroundPosition: "center",
        }}
        className="md:h-full h-screen rounded-3xl"
      />
    </div>
  );
};

export default ImagesHero;
