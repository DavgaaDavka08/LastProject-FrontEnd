import Link from "next/link";

export const SeeMore1 = () => {
  return (
    <div className="w-[1280px] h-[36px] flex items-center justify-between m-auto">
      <div>
        <h3 className="text-foreground text-2xl font-semibold">Upcoming</h3>
      </div>
      <div>
        <Link href={"/seemoreup"}>SeeMore</Link>
      </div>
    </div>
  );
};
export const SeeMore2 = () => {
  return (
    <div className="w-[1280px] h-[36px] flex items-center justify-between m-auto">
      <div>
        <h3 className="text-foreground text-2xl font-semibold">Pupular</h3>
      </div>
      <div>
        <Link href={"/seemorepopular"}>SeeMore</Link>
      </div>
    </div>
  );
};
export const SeeMore3 = () => {
  return (
    <div className="w-[1280px] h-[36px] flex items-center justify-between m-auto">
      <div>
        <h3 className="text-foreground text-2xl font-semibold">Top Rated</h3>
      </div>
      <div>
        <Link href={"/seemoretop"}>SeeMore</Link>
      </div>
    </div>
  );
};
