import React from "react";
import FooterApi from "../Api/FooterApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
function Footer() {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container grid grid-three-cols">
          {FooterApi.map((curr, index) => {
            const { icon, title, details } = curr;
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{footerIcons[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved
                  <NavLink to="" target="_blank">
                   GauravPrajapati
                  </NavLink>
                </p>
              </div>

              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li>
                    <NavLink to="" target="_blank">
                      Social
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="" target="_blank">
                      Source Code
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
