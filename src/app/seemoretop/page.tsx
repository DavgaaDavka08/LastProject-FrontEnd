import baseUrl from "@/util/baseurl";
import { TOKEN } from "@/util/constant";
import formatVoteAverage from "@/util/functionmat";
import { MovieType } from "@/util/movietype";
import fetchOption from "@/util/mydata";

import Image from "next/image";
import Link from "next/link";

export default async function page1() {
  const response = await fetch(
    `${baseUrl}/movie/top_rated?language=en-US&page=1`,
    fetchOption
  );

  const data = await response.json();
  console.log(data);
  return (
    <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]">
      <div className="w-[1280px] h-[36px] flex items-center justify-between m-auto">
        <h1 className="leading-[36px] text-[30px] font-semibold">Top-Rated</h1>
      </div>

      {data.results?.slice(0, 20).map((movieup: MovieType, index: number) => {
        return (
          <Link href={`/catagory/${movieup.id}`} key={index}>
            <div
              key={index}
              className="w-[230px] h-[439px] flex flex-col p-2 items-start rounded-lg bg-secondary "
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieup?.poster_path}`}
                width={229.73}
                height={340}
                alt=""
              />
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
          </Link>
        );
      })}
      {/* <PaginationDemo /> */}
    </div>
  );
}
