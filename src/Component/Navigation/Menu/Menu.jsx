import React from "react";
import {useRouter} from "next/router";
import Link from 'next/link'
import Container from "@material-ui/core/Container";
import {bool} from "prop-types";
import { StyledMenu } from './Menu.styled';


const BurgerMenu = ({open}) => {
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
            slug: "/"
        },
        {
            id: 3,
            label: "Portfolio",
            slug: "/"
        },
        {
            id: 4,
            label: "Blog",
            slug: "/"
        },
        {
            id: 5,
            label: "Contact",
            slug: "/"
        }
    ];
    return (
        <StyledMenu open={open}>
            <Container>
                <div className="mobile-menu-slider">
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
            </Container>

        </StyledMenu>
    )
}

BurgerMenu.propTypes = {
    open: bool.isRequired,
}
export default BurgerMenu;
