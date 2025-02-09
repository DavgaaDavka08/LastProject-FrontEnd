import baseUrl from "@/util/baseurl";
import { TOKEN } from "@/util/constant";
import formatVoteAverage from "@/util/functionmat";

import { MovieType } from "@/util/movietype";
import fetchOption from "@/util/mydata";
import Image from "next/image";
import Link from "next/link";

export default async function pagecatagory({
  params: { movieid },
}: {
  params: { movieid: string };
}) {
  const response = await fetch(
    `${baseUrl}/movie/${movieid}?language=en-US`,
    fetchOption
  );
  const data = await response.json();
  console.log("data :>> ", data);
  const responseStar = await fetch(
    `${baseUrl}/movie/${movieid}/credits?language=en-US`,
    fetchOption
  );
  const dataStar = await responseStar.json();
  console.log("fdsadfdsa", dataStar);
  const responseSimilar = await fetch(
    `${baseUrl}/movie/${movieid}/similar?language=en-US&page=1`,
    fetchOption
  );
  const dataSimilar = await responseSimilar.json();
  console.log("dataSimilar :>> ", dataSimilar);

  function formatVoteAverage2(vote: number) {
    const hours = Math.floor(vote / 60);
    const minutes = vote % 60;
    return `${hours}h ${minutes}m`;
  }
  return (
    <div className="w-[1280px] m-auto">
      <div className=" flex justify-between w-[1080px] ">
        <div>
          <h1 className="text-[36px] leading-10 font-bold tracking-[-0.9px]">
            {data.original_title}
          </h1>
          <div className="flex w-211px m-auto  font-inter text-[18px] font-normal leading-[28px] gap-3">
            <h2>{data.release_date}</h2>
            <p>{data.adult ? "· R· " : "·PG·  "}</p>
            <p>{formatVoteAverage2(data.runtime)}</p>
          </div>
        </div>
        <div>
          <p>Rating</p>
          <div className="flex">
            <img src="/star.svg" alt="" />
            <p>{formatVoteAverage(data.vote_average)}</p>
            <p className="text-gray-300 text-[14px]"> /10</p>
          </div>
          <p className="tex-[10px]">2.6k</p>
        </div>
      </div>

      <div className="flex items-center gap-[32px]">
        <img
          className="w-[290px] h-[428px]"
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          alt=""
        />

        <div className="w-[760px] h-[428px] bg-cover bg-center bg-no-repeat rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)]"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative top-[300px] left-[100px]"></div>
          </div>
        </div>
      </div>

      <div className="flex w-[1080px] flex-col items-start gap-5">
        <div className=" flex gap-[12px]">
          {data.genres?.map((genres: MovieType, index: number) => {
            return (
              <div key={index} className="mt-[20px]">
                <p className=" items-start p-[2px_10px] rounded-full border border-[#27272A]  font-inter text-[12px] font-semibold leading-[16px]">
                  {genres.name}
                </p>
              </div>
            );
          })}
        </div>
        <p>{data.overview}</p>
        <div className="flex items-center gap-[53px]">
          <h1 className=" font-inter text-[16px] font-bold leading-[28px] w-64px">
            Director
          </h1>
          {dataStar.crew
            ?.filter((crew: MovieType) => crew.department == "Directing")
            .slice(0, 1)
            .map((crew: MovieType, id: number) => {
              return (
                <div className="flex gap-[53px]" key={id}>
                  <p>{crew.name}</p>
                </div>
              );
            })}
        </div>
        <div className="flex items-center gap-[53px]">
          <h1 className=" font-inter text-[16px] font-bold leading-[28px] w-64px">
            Writers
          </h1>
        </div>
        <div className="flex items-center gap-[53px] ">
          <h1 className=" font-inter text-[16px] font-bold leading-[28px] w-64px">
            Stars
          </h1>
          {dataStar.cast?.slice(0, 5).map((actor: MovieType, index: number) => {
            return (
              <div className="flex gap-[53px]" key={index}>
                <p className=" font-inter text-[16px] font-normal leadin-[24px]">
                  {actor.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {dataSimilar?.results
          ?.slice(0, 1)
          .map((movie: MovieType, index: number) => {
            return (
              <div
                key={index}
                className="w-[1080px] h-[36px] flex items-center justify-between mt-[30px] mb-[30px]"
              >
                <div>
                  <h3 className="text-foreground text-2xl font-semibold">
                    More Like This
                  </h3>
                </div>
                <div>
                  <Link href={`/similar/${movie.id}`}>SeeMore</Link>
                </div>
              </div>
            );
          })}
      </div>
      <div key={dataSimilar} className="flex items-start gap-8 self-stretch ">
        {dataSimilar.results
          ?.slice(0, 5)
          .map((movie: MovieType, index: number) => {
            return (
              <Link href={`/catagory/${movie.id}`}>
                <div
                  key={index}
                  className="w-[190px] h-[372px] flex flex-col items-start bg-secondary gap-1 px-[8px] py-[8px] rounded-sm"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    width={190}
                    height={281}
                    alt=""
                  />
                  <div className="flex">
                    <img src="/star.svg" alt="" />
                    <p>{formatVoteAverage(movie.vote_average)}</p>
                    <p>/10</p>
                  </div>
                  <h2 className="overflow-hidden text-ellipsis  font-inter text-lg font-normal leading-7">
                    {movie.original_title}
                  </h2>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
