import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import {GlobalStyles} from "../../style/global";
import {theme} from "../../style/theme";

export default function MyApp(props){
    const { Component, pageProps } = props;

    useEffect(() =>{
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return(
        <Fragment>
            <ThemeProvider theme={theme}>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <CssBaseline/>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </Fragment>
    );
}


MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};