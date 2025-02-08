import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import baseUrl from "@/util/baseurl";
import { TOKEN } from "@/util/constant";
import { MovieType } from "@/util/movietype";
import fetchOption from "@/util/mydata";

import Link from "next/link";

export default async function PopoverDemo() {
  const response = await fetch(
    `${baseUrl}/genre/movie/list?language=en`,
    fetchOption
  );

  const data = await response.json();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 relative">
          <div className="absolute left-[8px]">
            <img src="arrow-down.svg" alt="" />
          </div>
          <Button
            variant="outline"
            className="flex w-[97px] h-[36px] p-[8px_16px] justify-center items-center gap-2"
          >
            Genre
          </Button>
        </div>
      </PopoverTrigger>
      <div className="relative">
        <PopoverContent className="w-[577px] flex p-[var(--spacing-5,20px)] flex-col items-start absolute left-[-50px] top-[18px] ">
          <div className="grid gap-4 ">
            {/* // */}
            <div className="space-y-2">
              <h4 className="text-[24px] font-semibold leading-[32px]">
                Genres
              </h4>
              <p className="text-[16px] font-normal leading-[24px] text-base">
                See lists of movies by genre
              </p>
            </div>
            {/* // */}
            <div className="shrink-0 bg-border h-[1px] w-full border-border border"></div>
            <div className="flex items-start content-start gap-x-4 gap-y-[var(--spacing-4,16px)] self-stretch flex-wrap ">
              {data.genres?.map((movie: MovieType, index: number) => {
                return (
                  <Link href={`/ganre/14?genreIds=${movie.id}`} key={index}>
                    <div key={index} className=" flex  flex-col items-start  ">
                      <div className=" inline-flex items-center border px-2.5 py-0.5 bg-secondary  text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-full cursor-pointer">
                        <p>{movie.name}</p>
                        <img className="bg-secondary" src="/arrow.png" alt="" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </PopoverContent>
      </div>
    </Popover>
  );
}
