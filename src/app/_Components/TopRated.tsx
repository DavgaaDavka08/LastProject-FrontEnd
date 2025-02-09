import baseUrl from "@/util/baseurl";
import { TOKEN } from "@/util/constant";
import formatVoteAverage from "@/util/functionmat";
import { MovieType } from "@/util/movietype";
import fetchOption from "@/util/mydata";
import Image from "next/image";

import Link from "next/link";
import { format } from "path";
import { SeeMore3 } from "./SeeMore";

export default async function TopRated() {
  const response = await fetch(
    `${baseUrl}/movie/top_rated?language=en-US&page=1`,
    fetchOption
  );
  const data = await response.json();

  return (
    <div key={data} className="w-[1280px] m-auto flex flex-wrap gap-[32px]">
      <SeeMore3 />
      {data.results?.slice(0, 10).map((movie: MovieType, index: number) => {
        return (
          <Link href={`/catagory/${movie.id}`}>
            <div
              key={index}
              className="w-[230] h-[439px] bg-secondary gap-2 flex flex-col rounded-sm py-2 px-2"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                width={229.73}
                height={340}
                alt=""
              />
              <div className="flex">
                <img src="/star.svg" alt="" />
                <p>{formatVoteAverage(movie.vote_average)}</p>
                <p>/10</p>
              </div>

              <p className="overflow-hidden text-ellipsis  font-inter text-lg font-normal leading-7">
                {movie.original_title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
