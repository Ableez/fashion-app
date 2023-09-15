import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";



const NavHelper = () => {
  return (
    <div>
      <div
        className={`grid grid-flow-col justify-center md:justify-end gap-4 p-1 `}
      >
        <nav className="grid grid-flow-col gap-4 text-sm">
          <a href="#" className="hover:underline">
            help <ArrowRightIcon width={8} className="aArr opacity-0" />
          </a>
          <a href="#" className="hover:underline">
            Join Self Care Club
            <ArrowRightIcon width={8} className="aArr opacity-0" />
          </a>
          <a href="#" className="hover:underline">
            Orders & Returns
            <ArrowRightIcon width={8} className="aArr opacity-0" />
          </a>
        </nav>
        <p>&#127475;&#127468;</p>
      </div>
      <Divider />
    </div>
  );
}

export default NavHelper