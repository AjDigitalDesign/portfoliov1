import React from "react";
import NextHead from 'next/head';

const siteTitle = '| AjDigitalDesign | ajdigitaldesign.com';
const defaultDescription = 'AJ Jardiah Jr is a Front-End developer'

const Head = () => {
    return(
        <NextHead>
            <meta charSet='UTF-8' />
            <title>{siteTitle}</title>
            <meta name='robots' content='noindex nofollow' />
            <meta name='description' content={defaultDescription} />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
        </NextHead>
    )
}

export default Head;