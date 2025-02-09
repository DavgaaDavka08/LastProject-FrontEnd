import { TOKEN } from "@/util/constant";
import { MovieType } from "@/util/movietype";

import Image from "next/image";
import Link from "next/link";

export default async function similar({
  params: { similarid },
}: {
  params: { similarid: string };
}) {
  const responseSimilar = await fetch(
    ` https://api.themoviedb.org/3/movie/${similarid}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const dataSimilar = await responseSimilar.json();

  console.log("similar", dataSimilar);
  function formatVoteAverage(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ",");
  }
  return (
    <div>
      <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]">
        {dataSimilar.results
          ?.slice(0, 20)
          .map((movieup: MovieType, index: number) => {
            return (
              <Link key={index} href={`/catagory/${movieup.id}`}>
                <div className="w-[230px] h-[439px] flex flex-col p-2 items-start rounded-lg  ">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movieup?.poster_path}`}
                    width={229.73}
                    height={340}
                    alt=""
                  />
                  <div>
                    <div className="flex">
                      <img src="star.svg" alt="" />
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
      </div>
    </div>
  );
}
