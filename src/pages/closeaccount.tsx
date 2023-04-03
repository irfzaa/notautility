import type { NextPage } from "next";
import Head from "next/head";
import { CloseAccountView } from "../views";


const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>NOT A UTILITY</title>
        <meta name="description" content="NOT A UTILITY" />
      </Head>
      <CloseAccountView />
      
    </div>
  );
};

export default Home;