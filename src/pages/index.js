import React, {Fragment} from "react";
import {serverUrl} from "../lib/pageUrl";
import {NextPageContext} from "next";
import Head from '../Component/Uility/NextHead'
import NavIndex from "../Component/Navigation";

const Home = props => {
// console.log(props.global.logo);
  return(
    <Fragment>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
        <NavIndex logo={props.global.logo} title={props.global.title}  />
    </Fragment>
  )
}

Home.getInitialProps = async (ctx) => {
    const {slug} = ctx.query;

    const url = await serverUrl(ctx);

    const global = await fetch(
        `${url}/api/global`
    ).then(res => res.json());

    return { ...global}
}


export default Home;
