import { React } from "react";
import "./Footer.scss";
import InstaLink from "../../assets/img/ig-icon.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <p>Copyright 2024. All Rights Reserved.</p>
        <div className="social-icon">
          <a href="https://www.instagram.com/advntrsekr/">
            <img src={InstaLink} alt="Instagram nav icon" />
          </a>
        </div>
      </div>
    </>
  );
};
