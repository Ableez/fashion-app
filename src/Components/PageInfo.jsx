import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const PageInfo = () => {
  return (
    <div className="py-4 px-16">
      <nav className="flex -ml-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 md:space-x-3 w-fit">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="flex gap-1 bg-neutral-200 px-2 py-1 rounded-md items-center text-sm font-medium text-neutral-800"
            >
              <ArrowLeftIcon width={15} />
              Back
            </a>
          </li>
          <li className="inlineLlex items-center">
            <a
              href="#"
              className="flex gap-1 items-center text-sm font-medium text-neutral-700 hover:text-blue-100 dark:text-neutral-400 dark:hover:text-white"
            >
              <HomeIcon width={15} />
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronLeftIcon width={15} />
              <a
                href="#"
                className="ml-1 duration-200 text-sm font-medium text-neutral-700 hover:text-blue-100 dark:text-neutral-400 dark:hover:text-white"
              >
                Projects
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronLeftIcon width={15} />
              <span className="ml-1 duration-200 text-sm font-medium text-neutral-500  dark:text-neutral-400">
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageInfo;
