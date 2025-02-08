import baseUrl from "@/util/baseurl";
import formatVoteAverage from "@/util/functionmat";
import { MovieType } from "@/util/movietype";
import fetchOption from "@/util/mydata";
import Image from "next/image";
import Link from "next/link";
import { SeeMore2 } from "./SeeMore";

export default async function Popular() {
  const incomedata = await fetch(
    `${baseUrl}/movie/popular?language=en-US&page=1`,
    fetchOption
  );
  const datapopular = await incomedata.json();
  console.log("dataaa", datapopular);
  return (
    <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]">
      <SeeMore2 />
      {datapopular.results
        ?.slice(0, 10)
        .map((movieup: MovieType, index: number) => {
          return (
            <Link href={`catagory/${movieup.id}`} key={index}>
              <div
                key={index}
                className="w-[230px] rounded-sm h-[439px] flex flex-col p-2 items-start rounded-rounded-lg bg-secondary gap-2 "
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
