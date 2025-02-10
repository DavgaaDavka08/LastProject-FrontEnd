import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="">
      <div className="max-w-[1080px] py-[52px] m-auto flex flex-col">
        <div className="flex justify-between">
          <div className="mb-6 flex flex-col gap-3">
            <Skeleton className="bg-secondary rounded-full h-10 w-[250px]" />
            <Skeleton className="bg-secondary rounded-full h-8 w-[250px]" />
          </div>
          <div className=" flex flex-col gap-3">
            <Skeleton className="bg-secondary rounded-full h-5 w-[83px]" />
            <Skeleton className="bg-secondary rounded-full h-4 w-[83px]" />
          </div>
        </div>
        <div className="flex gap-8 w-full h-[600px]">
          <Skeleton className="w-[290px] rounded-xl" />
          <Skeleton className="w-[760px] h-[100%]" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="mt-6 flex gap-3">
            <Skeleton className="w-[350px] h-6 rounded-full  py-[2px] px-2" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="rounded-full bg-secondary h-10 w-full" />
            <Skeleton className="rounded-full  bg-secondary h-8 w-[400px]" />
            <Skeleton className="rounded-full  bg-secondary h-8 w-[700px]" />
            <Skeleton className="rounded-full  bg-secondary h-8 w-[700px]" />
          </div>
        </div>
        <div className="flex justify-between mt-[52px]">
          <Skeleton className="rounded-full w-[230px] h-8" />
          <Skeleton className="rounded-full w-[230px] h-8" />
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {Array.from({ length: 5 }, (_: unknown, i: number) => {
            return <Skeleton key={i} className="w-[190px] h-[387px]" />;
          })}
        </div>
      </div>
    </div>
  );
}
