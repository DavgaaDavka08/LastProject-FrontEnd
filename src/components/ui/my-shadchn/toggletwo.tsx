"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MovieType } from "@/util/movietype";

import { useRouter, useSearchParams } from "next/navigation";

export function ToggleGroupDemos({ genre }: { genre: MovieType[] }) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("value");
  const handleClick = (value: string[]) => {
    push(`/search?page=1&genreIds=${value}&value=${searchValue}`);
  };

  return (
    <div>
      <ToggleGroup type="multiple" onValueChange={handleClick}>
        <div>
          {genre.map((genre: MovieType, index: number) => {
            return (
              <ToggleGroupItem key={index} value={genre.id.toString()}>
                <p className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-full cursor-pointer">
                  {genre.name}
                  <img src="/arrow.svg" alt="" />
                </p>
              </ToggleGroupItem>
            );
          })}
        </div>
      </ToggleGroup>
    </div>
  );
}
