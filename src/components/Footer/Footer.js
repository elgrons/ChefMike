import  { React } from "react";
import './Footer.scss';
import InstaLink from "../../assets/img/ig-icon.svg";


export const Footer = () => {
  return (
    <>
    <p>Chef Mike Footer</p>
    <div className="social-icon">
    <a href="https://www.instagram.com/advntrsekr/"><img src={InstaLink} alt="Instagram nav icon" /></a>
    </div>
    </>
  )
}