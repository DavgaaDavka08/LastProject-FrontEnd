"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import baseUrl from "@/util/baseurl";
import fetchOption from "@/util/mydata";
import { MovieType } from "@/util/movietype";
import Image from "next/image";
import formatVoteAverage from "@/util/functionmat";
import Link from "next/link";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2200, stopOnInteraction: false })
  );

  const [movies, setMovies] = React.useState<MovieType[]>([]);

  React.useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${baseUrl}/movie/now_playing?language=en-US&page=1`,
        fetchOption
      );
      const data = await response.json();
      setMovies(data.results || []);
      console.log("zuraggg", data);
    }
    fetchMovies();
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full h-[600px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full h-[600px]">
        {movies.map((movie: MovieType, index) => (
          <CarouselItem key={index} className="w-full h-full relative">
            <Link href={`/catagory/${movie.id}`}>
              {/* Зураг */}
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                width={1280}
                height={600}
                className="w-full h-full object-cover "
                priority
              />

              <div className="absolute  left-[170px] bottom-[220px] w-[350px] h-[250px] flex flex-col items-start ">
                <p className="text-white text-[26px] font-normal leading-9">
                  Now Playing:
                </p>
                <p className="text-white text-3xl font-bold leading-[40px]">
                  {movie?.original_title}
                </p>
                <div className="flex items-center gap-2">
                  <img src="/star.svg" alt="rating" className="w-5 h-5" />
                  <p className="text-[#FAFAFA] text-lg font-semibold">
                    {formatVoteAverage(movie?.vote_average)}
                  </p>
                  <p className="text-gray-400 text-base">/10</p>
                </div>
                <p className="text-[#FAFAFA] text-[15px] leading-9 line-clamp-3">
                  {movie?.overview}
                </p>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-[50px]" />
      <CarouselNext className="absolute right-[50px]" />
    </Carousel>
  );
}
