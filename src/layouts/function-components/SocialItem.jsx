import React from 'react';
import {
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoYoutube,
    IoMail,
} from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialAtCircular } from 'react-icons/ti';

const instagramSvg = (
    <svg
        class="w-[30px]"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        viewBox="0 0 16 16"
        id="instagram"
    >
        <linearGradient
            id="a"
            x1="1.464"
            x2="14.536"
            y1="14.536"
            y2="1.464"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset="0" stop-color="#FFC107" />
            <stop offset=".507" stop-color="#F44336" />
            <stop offset=".99" stop-color="#9C27B0" />
        </linearGradient>
        <path
            fill="url(#a)"
            d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
        />
        <linearGradient
            id="b"
            x1="5.172"
            x2="10.828"
            y1="10.828"
            y2="5.172"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset="0" stop-color="#FFC107" />
            <stop offset=".507" stop-color="#F44336" />
            <stop offset=".99" stop-color="#9C27B0" />
        </linearGradient>
        <path
            fill="url(#b)"
            d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
        />
        <linearGradient
            id="c"
            x1="11.923"
            x2="12.677"
            y1="4.077"
            y2="3.323"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset="0" stop-color="#FFC107" />
            <stop offset=".507" stop-color="#F44336" />
            <stop offset=".99" stop-color="#9C27B0" />
        </linearGradient>
        <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)" />
    </svg>
)

const DEFAULT_STYLE = {
    icon: <TiSocialAtCircular size={35} />,
    theme: "rgb(220,38,38)"
};

const platformStyle = {
    facebook: {
        icon: <IoLogoFacebook size={35} />,
        theme: "rgb(60,60,255)"
    },
    instagram: {
        icon: instagramSvg,
        theme: "#c026d3"
    },
    twitter: {
        icon: <RiTwitterXFill size={30} />,
        theme: "black"
    },
    linkedin: {
        icon: <IoLogoLinkedin size={30} />,
        theme: "rgb(40,104,225)"
    },
    youtube: {
        icon: <IoLogoYoutube size={30} />,
        theme: "red"
    },
    x: {
        icon: <RiTwitterXFill size={30} />,
        theme: "black"
    },
    email: {
        icon: <IoMail size={30} />,
        theme: "#6B46C1"
    }
};

const SocialItem = ({ platform, link, label, className, type = "normal" }) => {
    return (
        <>
            {
                <a href={link} class={`social-link ${className} flex gap-3 justify-evenly py-2 px-4 transition duration-[250ms] ease-in-out rounded-md bg-white hover:bg-[#FED6D6] shadow-small-3 items-center`} target="_blank" style={{
                    color: platformStyle[platform]?.theme || DEFAULT_STYLE.theme,
                }}>
                    <div className="icon">
                        {
                            platformStyle[platform]?.icon || DEFAULT_STYLE.icon

                        }
                    </div>
                    <span class="text-[1.125rem] overflow-hidden text-ellipsis text-black">
                        {label || platform || "Social"}
                    </span>
                </a>
            }
        </>
    )
}

export default SocialItem