import { InputDemo } from "@/components/ui/my-shadchn/my-input";
import { ModeToggle } from "@/components/ui/my-shadchn/theme-toggle";
import PopoverDemo from "@/components/ui/my-shadchn/Toggle";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./Input";

export default async function Header() {
  return (
    <div className="max-w-[1280px] h-[80px] flex m-auto py-[16px] justify-between items-center flex-shrink-0 ">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <Image src="/filmg.svg" alt="" width={20} height={20} />
          <h4 className="text-indigo-700 font-inter italic font-bold text-base leading-5 tracking-wide">
            movie z
          </h4>
        </div>
      </Link>
      <div className="flex gap-3 items-center">
        <PopoverDemo />
        <SearchInput />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
