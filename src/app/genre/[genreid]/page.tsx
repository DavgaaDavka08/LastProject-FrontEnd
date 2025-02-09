import Genre2 from "../page";

const genre = async ({ params }: { params: Promise<{ genreid: string }> }) => {
  const { genreid } = await params;
  return (
    <div>
      <Genre2 />
    </div>
  );
};
export default genre;
