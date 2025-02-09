function formatVoteAverage(vote: number) {
  return (Math.floor(vote * 10) / 10).toString().replace(".", ",");
}
export default formatVoteAverage;
export function formatVoteAverage2(vote: number) {
  const hours = Math.floor(vote / 60);
  const minutes = vote % 60;
  return `${hours}h ${minutes}m`;
}
