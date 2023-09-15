import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log(location.pathname.split("/").reverse()[0]);

  const crumbs = [];
  const menCategories = [
    "All Men's Clothing",
    "T-Shirts & Tops",
    "Hoodies & Sweatshirts",
    "Shorts",
    "Pants",
    "Jackets",
    "Tracksuits",
    "Matching Sets",
    "Jerseys",
    "Tall",
  ];

  return (
    <div className="my-4 px-16">
      <div>
        <h4 className="text-4xl font-semibold">Men</h4>
      </div>
      <div className="grid grid-flow-col place-items-center">
        <nav className="grid grid-flow-col w-full">
          {menCategories.map((cat) => {
            return (
              <Link
                className="text-center border-b-2 border-b-neutral-50 w-full hover:border-b-black"
                key={cat}
              >
                {cat}
              </Link>
            );
          })}
        </nav>
        <div>
          <button className="filter py-2 px-8 bg-black text-white">Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
