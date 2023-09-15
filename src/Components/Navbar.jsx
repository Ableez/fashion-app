import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useMediaQuery } from "@mui/material";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const smallScreen = useMediaQuery("(max-width:863px)");
  const [open, setOpen] = useState(false);

  return (
    <div className="md:px-8 p-2 gap-2 grid bg-white z-[960] shadow-sm sticky top-0">
      <div className="grid grid-flow-col justify-between place-items-center bg-white p-1 h-fit">
        {smallScreen && (
          <div className="grid grid-flow-col">
            <button onClick={() => setOpen(true)}>
              <Bars3Icon width={26} />
            </button>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-[999]" onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-red-100 bg-opacity-60 transition-opacity backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <Dialog.Panel className="pointer-events-auto relative w-screen max-w-screen">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="absolute right-0 top-0 mr-4 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                              <button
                                type="button"
                                className="relative rounded-md text-neutral-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-white bg-red-100 p-2"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </Transition.Child>
                          <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                              <Dialog.Title className="font-semibold leading-6 text-base text-gray-900">
                                Menu
                              </Dialog.Title>
                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
            <button className="hover:bg-red-200 duration-200 rounded-full p-1">
              <HeartIcon width={22} />
            </button>
          </div>
        )}
        <a href="#" className="h-fit">
          <img
            width={80}
            src="https://curawears.com/wp-content/uploads/2023/07/CURA-LOGO-3.svg"
            alt=""
          />
        </a>
        {!smallScreen && (
          <nav className="grid navbar-links md:grid-flow-col gap-4">
            <Link to={"/#"} className="hover:font-semibold hover:underline">
              Women
            </Link>
            <Link to={"/#"} className="hover:font-semibold hover:underline">
              Men
            </Link>
            <Link to={"/shop"} className="hover:font-semibold hover:underline">
              Shop
            </Link>
            <Link to={"/#"} className="hover:font-semibold hover:underline">
              Explore
            </Link>
            <Link to={"/#"} className="hover:font-semibold hover:underline">
              Styles
            </Link>
            <Link to={"/#"} className="hover:font-semibold hover:underline">
              Category
            </Link>
          </nav>
        )}
        <div className="grid grid-flow-col place-items-center gap-3  h-fit">
          <div
            className={`grid grid-flow-col place-items-center  ${
              !smallScreen && "bg-blue-50 px-2"
            } rounded-md`}
          >
            {!smallScreen && (
              <input
                type="text"
                placeholder="Search"
                className="active:outline-none bg-transparent outline-none px-2 py-3 text-sm"
              />
            )}
            <MagnifyingGlassIcon width={22} color="#222" />
          </div>

          <button className="hover:bg-red-200 duration-200 rounded-full p-1">
            <UserIcon width={22} />
          </button>
          {!smallScreen && (
            <button className="hover:bg-red-200 duration-200 rounded-full p-1">
              <HeartIcon width={22} />
            </button>
          )}

          <button className="hover:bg-red-200 duration-200 rounded-full p-1">
            <ShoppingBagIcon width={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
