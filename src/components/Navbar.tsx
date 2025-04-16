"use client";

import Image from "next/image";
import ShakeHand from "../../public/img/ShakeHand.png";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import DropDownMenu from "./DropDownMenu";

interface NavbarProps {
  name: string;
  time?: string;
}

export default function Navbar({ name, time }: NavbarProps) {
  const getTimeOfDay = () => {
    if (time) return time;
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };

  return (
    <div className="flex h-20 w-full justify-between items-center p-4">
      <div className=" pl-5 " style={{paddingLeft: "5px"}} >
        <div className="flex gap-3">
          <div>
            <div className="flex gap-1">
              <h1 className="text-lg font-semibold">Hello {name}</h1>
              <Image
                src={ShakeHand}
                alt="Handshake icon"
                width={25}
                height={25}
              />
            </div>
            <h3 className="text-sm text-gray-600">Good {getTimeOfDay()}</h3>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-1/2 justify-center items-center ">
        <div className="flex justify-center gap-1 border-1 border-gray-200 rounded-[8px] h-12 items-center focus:outline-blue-600 focus:border-blue-600">
          <LuSearch size={45} style={{padding: "10px"}}/>
          <div>
            <Input type="text" placeholder="Search" className="outline-none border-0 shadow-none focus:outline-0 focus:border-0 focus:shadow-none"/>
          </div>
        </div>

        <div className="flex w-12 h-12 bg-[#34495E1A] border-1 border-gray-200 rounded-[8px] justify-center items-center">
          <GoBell size={20} />
        </div>

        <div>
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
}
