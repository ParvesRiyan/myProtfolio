import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <Typography variant="h5">About Me</Typography>
            <Typography>
                Hay, my name is parves riyan . I am a full-stack developer 
                for web application, now i'm working on MERN web Developing .
                and i learned every single day , I belive to learn every second
                and minute , <b>I LOVE PROGRAMING </b> it's make me happy .
            </Typography>
            <Link to="/contack" className='footerContactBtn'>
                <Typography>Contact Us</Typography>
            </Link>
        </div>

        <div>
            <Typography variant="h6">Social Media</Typography>
            <a href="https://github.com/ParvesRiyan" target="blank">
                <BsGithub />
            </a>
            <a href="https://youtube.com/ParvesRiyan" target="blank">
                <BsYoutube />
            </a>
            <a href="https://instagram.com/ParvesRiyan" target="blank">
                <BsInstagram />
            </a>
            <a href="https://linkedin.com/ParvesRiyan" target="blank">
                <BsLinkedin/>
            </a>
        </div>

    </div>
  )
}

export default Footer