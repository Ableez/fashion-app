import { Menu, Transition } from "@headlessui/react";
import { ArrowRightIcon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const NavBanner = () => {
  return (
    <div className="bg-black">
      <Menu as="div" className="w-full flex justify-center">
        <div>
          <Menu.Button className="inline-flex justify-center rounded-md bg-black bg-opacity-20 px-1 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="text-white text-sm font-bold">
              QUICK INFO GOES HERE
            </div>
            <ChevronDownIcon
              className="h-5 w-5 text-white font-bold hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 -mt-52"
          enterTo="transform opacity-100 mt-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 mt-0"
          leaveTo="transform opacity-0 -mt-52"
        >
          <Menu.Items className="absolute right top-0 divide-y z-[999] divide-gray-100 w-full bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className={"md:p-16 p-4 h-fit"}>
              <div className="flex align-middle justify-between w-full mb-3">
                <h4 className={"font-bold text-lg"}>
                  SPECIAL INFORMATION HERE
                </h4>
                <Menu.Button className="btn">
                  <XMarkIcon className="w-6" />
                </Menu.Button>
              </div>
              <div className="max-w-lg mb-4">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere recusandae enim debitis quaerat cum.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fuga, inventore! Iusto nostrum ut ratione quasi itaque,
                  praesentium laboriosam harum odit sit suscipit, laborum
                  voluptatum. Nam laboriosam modi reprehenderit voluptate ex!
                </p>
              </div>
              <a href="#">
                Join The Self Care Club
                <ArrowRightIcon className="aArr opacity-0" width={12} />
              </a>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NavBanner;
