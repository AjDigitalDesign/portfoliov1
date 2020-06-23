import React, { Fragment, useState } from 'react';
import Burger from "./Burger";
import BurgerMenu from "./Menu";
import DesktopMenu from "./Desktop";


const NavIndex = (props) =>{

    const [open, setOpen] = useState(false);
    return(
        <Fragment>
           <Burger open={open} setOpen={setOpen} />
           <BurgerMenu open={open} setOpen={setOpen} />
           <DesktopMenu/>
        </Fragment>
    )
}

export default NavIndex;
