"use client";
import { TOKEN } from "@/util/constant";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { MovieType } from "@/util/movietype";
import { ToggleGroupDemo } from "@/components/ui/my-shadchn/togglegroup";
import { Paginat } from "@/components/ui/my-shadchn/pagnition";

export default function Genre2() {
  const [movie, setMovie] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<{ id: string; name: string }[]>([]);
  const [datas, setDatas] = useState<MovieType | null>(null);

  const searchParams = useSearchParams();

  const genreId = searchParams.get("genreIds");
  const page = searchParams.get("page") || 1;
  const fetchOption = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  };
  React.useEffect(() => {
    const responce = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${page}`,
        fetchOption
      );
      const res = await response.json();
      setDatas(res);
      setMovie(res.results || []);
    };
    responce();
  }, [genreId, page]);

  React.useEffect(() => {
    const data = async () => {
      const responsehuuchin = await fetch(
        " https://api.themoviedb.org/3/genre/movie/list?language=en",
        fetchOption
      );
      const res = await responsehuuchin.json();

      setGenre(res.genres || []);
      console.log(res);
    };
    data();
  }, []);

  function formatVoteAverage(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ",");
  }

  return (
    <div className="w-[1420px] flex m-auto relative  ">
      <div className="shrink-0 bg-border w-[3px] h-[1420px] border-border border absolute left-[480px] bottom-[390px] "></div>
      <div className="h-[400px] flex flex-col gap-[10px] mt-[50px] ml-[50px]">
        <div className="ml-[10px]">
          <h1 className="text-2xl font-semibold text-foreground lg:text-3xl">
            Search Filter
          </h1>
          <p className="text-2xl font-semibold">Genres</p>
          <h2 className="text-base">See lists of movies by genre</h2>
        </div>

        <div className="w-[387px]  h-[352px] flex flex-wrap ">
          <ToggleGroupDemo genres={genre} />
        </div>
      </div>

      <div className="sticky top-14">
        <div className=" mt-[100px] ml-[100px] flex flex-wrap gap-5  lg:gap-x-12 lg:gap-y-6">
          {movie?.slice(0, 20).map((movie: MovieType, index: number) => {
            return (
              <Link href={`/catagory/${movie.id}`} key={index}>
                <div
                  key={index}
                  className="w-[165px] rounded-sm h-[331px] flex flex-col p-2 items-start rounded-rounded-lg bg-secondary"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    width={165}
                    height={244}
                    alt=""
                  />
                  <div className="flex">
                    <img src="/star.svg" alt="" />
                    <p>{formatVoteAverage(movie.vote_average)}</p>
                    <p>/10</p>
                  </div>
                  <h2 className="text-ellipsis  font-inter text-lg font-normal leading-7">
                    {movie.original_title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-[900px] flex justify-end">
          <Paginat
            currentPage={Number(page)}
            totalPages={datas?.total_pages || 0}
          />
        </div>
      </div>
    </div>
  );
}
