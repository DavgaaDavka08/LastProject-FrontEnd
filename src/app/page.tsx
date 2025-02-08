import Head from "next/head";
import Image from "next/image";
import Header from "./_Components/Header";
import UpComing from "./_Components/UpComing";

export default function Home() {
  return (
    <div>
      <Header />
      <UpComing />
    </div>
  );
}
