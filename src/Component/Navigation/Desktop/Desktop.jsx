import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import {theme} from "../../../../style/theme";
import useScrollTrigger from "@material-ui/core";
import {StyledDesktop} from "./Desktop.styled";
// import imageUrlBuilder from '@sanity/image-url'
// import client from "../../../lib/client";

// const builder = imageUrlBuilder(client)
//
// function urlFor(source) {
//     return builder.image(source)
// }


const DesktopMenu = () => {

    const router = useRouter();
    let menuList = [
        {
            id: 1,
            label: "Home",
            slug: "/"
        },
        {
            id: 2,
            label: "About",
            slug: "/about"
        },
        {
            id: 3,
            label: "Portfolio",
            slug: "/portfolio"
        },
        {
            id: 4,
            label: "Blog",
            slug: "/blog"
        },
        {
            id: 5,
            label: "Contact",
            slug: "/contact"
        }
    ];
    return(
        <StyledDesktop>
            <Container>
                <div className="navbar-area">
                    <div className="navbar-brand-area">
                            <a className="home">

                            </a>
                    </div>
                    <div className="navbar-menu">
                        <ul className="menu-item">
                            {menuList.map(nav => {
                                return (
                                    <li className={router.asPath === nav.slug ? "active" : ""} key={nav.id}>
                                        <Link href={nav.slug}>
                                            <a>{nav.label}</a>
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </Container>
        </StyledDesktop>
    )
};

export default DesktopMenu;
