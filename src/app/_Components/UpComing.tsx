import baseUrl from "@/util/baseurl";

import formatVoteAverage from "@/util/functionmat";
import { MovieType } from "@/util/movietype";
import fetchOption from "@/util/mydata";
import Image from "next/image";

export default async function UpComing() {
  const response = await fetch(
    `${baseUrl}movie/upcoming?language=en-US&page=1`,
    fetchOption
  );
  const data = await response.json();
  console.log(data);
  return (
    <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]">
      {data.results?.slice(0, 10).map((movieup: MovieType, index: number) => {
        return (
          <div
            key={index}
            className="w-[230px] rounded-sm h-[439px] flex flex-col p-2 items-start rounded-rounded-lg bg-secondary "
          >
            {/* <Image
              src={`https://image.tmdb.org/t/p/w500${movieup?.poster_path}`}
              width={229.73}
              height={340}
              alt=""
            /> */}
            <div>
              <div className="flex">
                <img src="/star.png" alt="" />
                <p>{formatVoteAverage(movieup.vote_average)}</p>
                <p>/10</p>
              </div>
              <div>
                <h2 className="overflow-hidden text-ellipsis  font-inter text-lg font-normal leading-7">
                  {movieup.original_title}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
