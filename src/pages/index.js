import React, {Fragment} from "react";
import Head from '../Component/Uility/NextHead'
import NavIndex from "../Component/Navigation";

const Home = () => {

  return(
    <Fragment>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
        <NavIndex />
    </Fragment>
  )
}

export default Home
