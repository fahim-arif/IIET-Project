import type { NextPage } from 'next'
import dynamic from 'next/dynamic';

// import HomePage from "../components/pages/home/HomePage";
import Headers from "../components/common/headers";
import Footers from "../components/common/footers";


const HomePage = dynamic(
  () => import("../components/pages/home/HomePage"),
  // No need for SSR, when the module includes a library that only works in the
  // browser.
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
