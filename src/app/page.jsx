import Image from "next/image";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { GoHistory } from "react-icons/go";
import { AiOutlineIdcard } from "react-icons/ai";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import SearchFilter from "@/components/sidebar/SearchFilter";

export default function Home() {
  return (
    <div className="flex min-h-screen  ">
      {/* nav Bar */}
      <nav className="flex flex-col border-r w-20">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="mb-8 mt-5 mx-auto"
        />

        {/* /* nav Icons */}
        <div className="nav-icons flex flex-col items-center gap-2">
          <div className="hover:cursor-pointer  w-full  flex justify-center items-center py-2 hover:border-l-4  hover:border-red-500  ">
            <RiHome6Line className="w-6 h-6 text-gray-400 hover" />
          </div>
          <div className="hover:cursor-pointer w-full  flex justify-center items-center py-2 hover:border-l-4  hover:border-red-500 ">
            <MdOutlineDirectionsCarFilled className="w-6 h-6 text-gray-400" />
          </div>
          <div className="hover:cursor-pointer w-full  flex justify-center items-center py-2 hover:border-l-4  hover:border-red-500 ">
            <LuNotepadText className="w-6 h-6 text-gray-400" />
          </div>
          <div className="hover:cursor-pointer w-full  flex justify-center items-center py-2 hover:border-l-4  hover:border-red-500 ">
            <GrFavorite className="w-6 h-6 text-gray-400" />
          </div>
          <div className="hover:cursor-pointer w-full  flex justify-center items-center py-2 hover:border-l-4  hover:border-red-500 ">
            <GoHistory className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        <div className="profile my-10  flex flex-col items-center gap-5">
          <AiOutlineIdcard className="w-6 h-6 text-gray-400" />
          <LuMessageCircleQuestion className="w-6 h-6 text-gray-400" />
        </div>

        {/* Logout  */}
        <div className="logout mt-auto mb-5 flex flex-col items-center">
          <IoIosLogOut className="w-6 h-6 text-gray-400" />
        </div>

      </nav>

      <div className="flex-none  w-64 ...">
       <SearchFilter/>
       </div>
       
      {/* Main div */}
      <div className="flex-auto border w-64 ...">03</div>
      {/* rent div */}
      <div className="flex-auto hidden border w-32 ...">03</div>
    </div>
  );
}
