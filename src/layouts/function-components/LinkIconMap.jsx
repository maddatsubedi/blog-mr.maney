import React from 'react';
import { FaBlog, FaDotCircle, FaRoute, FaUserCircle } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";

const DEFULT_ICON = <FaDotCircle />;

const map = {
    "/blog": <FaBlog />,
    "/about": <FaUserCircle />,
    "/journey": <FaRoute />,
    "/contact": <MdOutlineContactMail />
}

const LinkIconMap = ({ linkTo }) => {
    return (
        <>
            {map[linkTo] || DEFULT_ICON}
        </>
    )
}

export default LinkIconMap