import baseUrl from "@/util/baseurl";

import formatVoteAverage from "@/util/functionmat";
import { MovieType } from "@/util/movietype";
import fetchOption from "@/util/mydata";
import Image from "next/image";
import { SeeMore1 } from "./SeeMore";
import Link from "next/link";

export default async function UpComing() {
  const response = await fetch(
    `${baseUrl}movie/upcoming?language=en-US&page=1`,
    fetchOption
  );
  const data = await response.json();
  console.log(data);
  return (
    <div
      key={data}
      className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]"
    >
      <SeeMore1 />
      {data.results?.slice(0, 10).map((movieup: MovieType, index: number) => {
        return (
          <Link href={`/catagory/${movieup.id}`}>
            <div
              key={index}
              className="w-[230px] rounded-sm h-[439px] flex flex-col p-2 items-start rounded-rounded-lg bg-secondary  gap-2"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieup?.poster_path}`}
                width={229.73}
                height={340}
                alt=""
              />
              <div>
                <div className="flex">
                  <img src="/star.svg" alt="" />
                  <p>{formatVoteAverage(movieup.vote_average)}</p>
                  <p>/10</p>
                </div>
                <div>
                  <p className="overflow-hidden text-ellipsis  font-inter text-lg font-normal leading-7">
                    {movieup.original_title}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
