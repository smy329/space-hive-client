import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi2';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between">
      <Link className="flex items-center gap-1">
        <HiOutlinePaperAirplane className="h-6 w-6" />
        <span className="font-extrabold text-2xl">Space Hive</span>
      </Link>

      {/* search widget */}
      <div className="flex items-center border border-gray-300 rounded-full px-5 py-2 gap-2 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="text-gray-300">|</div>
        <div>Any Week</div>
        <div className="text-gray-300">|</div>
        <div>Add Guests</div>
        <button className="p-3 bg-primary text-white rounded-full">
          <RiSearchLine />
        </button>
      </div>

      {/* user widget */}
      <div className="flex items-center border border-gray-300 rounded-full px-5 py-2 gap-2">
        <GiHamburgerMenu className=" h-5 w-5" />
        <HiUserCircle className="text-gray-500 h-10 w-10" />
      </div>
    </div>
  );
};

export default Navbar;
