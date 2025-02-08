import { ModeToggle } from "@/components/ui/my-shadchn/darkmode";
import { InputDemo } from "@/components/ui/my-shadchn/my-input";
import PopoverDemo from "@/components/ui/my-shadchn/Toggle";
import { Star } from "lucide-react";
import Link from "next/link";

export default async function Header() {
  return (
    <div className="max-w-[1280px] h-[80px] flex m-auto py-[16px] justify-between items-center flex-shrink-0 ">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <img src="/film.png" alt="" />
          <h4 className="text-indigo-700 font-inter italic font-bold text-base leading-5 tracking-wide">
            movie z
          </h4>
        </div>
      </Link>
      <div className="flex gap-3 items-center">
        <PopoverDemo />
        <InputDemo />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
