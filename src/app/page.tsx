import Head from "next/head";
import Image from "next/image";
import Header from "./_Components/Header";
import UpComing from "./_Components/UpComing";
import Popular from "./_Components/Popular";
import TopRated from "./_Components/TopRated";
import Slider from "./_Components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <UpComing />
      <Popular />
      <TopRated />
    </div>
  );
}
