import React from 'react';
import { FaBlog, FaDotCircle, FaUserCircle } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";

const map = {
    blog: <FaBlog />,
    about: <FaUserCircle />,
    contact: <MdOutlineContactMail />
}

const LinkIconMap = ({ linkTo }) => {
    return (
        <>
            {map[linkTo] || <FaDotCircle />}
        </>
    )
}

export default LinkIconMap