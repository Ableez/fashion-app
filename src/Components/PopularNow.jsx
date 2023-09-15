import { popularProducts } from "../assets/PopularProducts";

const PopularNow = () => {
  const pop = popularProducts;

  return (
    <div className="grid grid-flow-row gap-12 md:px-32 px-3 my-12">
      <h4 className="md:text-3xl text-3xl font-bold">Popular right now</h4>
      <div className="flex flex-wrap">
        {pop.map((prod) => {
          return (
            <div key={prod.title} className="md:w-1/3 w-full pr-4">
              <a
                className="md:text-4xl text-3xl text-neutral-500 w-full font-bold py-8 text-start justify-start border-b hover:border-b-black"
                href="#"
              >
                {prod.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularNow;
