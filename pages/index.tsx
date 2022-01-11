import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import Headers from "../components/common/headers";
import Footers from "../components/common/footers";


const HomePage = dynamic(
  () => import("../components/pages/home/HomePage"),

  { ssr: false }
);

const Home: NextPage = () => (
  <>
    <Headers />
    <HomePage />
    <Footers />

  </>
)

export default Home
