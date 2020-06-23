import React, {Fragment} from "react";
import {server} from "../lib/pageUrl";
import Head from '../Component/Uility/NextHead'
import NavIndex from "../Component/Navigation";

export default function Home ({global}) {
console.log(global);

  return(
    <Fragment>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
        <NavIndex logo={global.global.logo} title={global.global.title} nav={global.global.nav} />
    </Fragment>
  )
}


export async function getStaticProps(){

    const res = await fetch(
        `${server}/api/global`
    )
    const global = await res.json()


    return {
        props: {
            global,
        }
    }
}

