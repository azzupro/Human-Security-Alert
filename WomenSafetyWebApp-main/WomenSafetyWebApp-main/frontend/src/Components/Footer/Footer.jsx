import React from "react";
import "../../styles/footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import logo from "../../images/logo.png";
import { useAuth } from "../../context/auth";

const Footer = (props) => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      {auth?.user?.role ? (
        <>
          <div>
            <section id="contact" className="footer_wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 footer_logo mb-4 mb-lg-0">
                    <img decoding="async" src={logo} width={150} />
                    {/* <h1 className='text-sm' style={{fontSize:'25px'}}>WOMEN SECURE</h1> */}

                    <p className="footer_text" style={{ textAlign: "justify" }}>
                      At Human Security , we're dedicated to making Secure website
                      for Human saftey and we give our best at what we do
                    </p>
                  </div>
                  <div className="col-lg-4 px-lg-5 mb-4 mb-lg-0">
                    <h3 className="footer_title">Contact</h3>
                    <p className="footer_text">
                      <a>arbazkhantheinnocentboy24@gmail.com</a>
                      <br />
                      <a className="footer-address">
                           Oxigen Park, Kali Charan Nigam Institute of Technology, <br />
                       Banda, Utter Pradesh, India
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-3 mb-4 mb-lg-0">
                    <h3 className="footer_title">Social Media</h3>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/arbaz-khan-929565249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="footer_social_media_icon"
                        style={{ color: "white" }}
                      >
                        <BsLinkedin size={25} />
                      </a>
                      <a
                        href="https://github.com/azzupro/Fees-Management"
                        className="footer_social_media_icon"
                        style={{ color: "white" }}
                      >
                        <BsGithub size={25} />
                      </a>
                    </p>
                  </div>
                  <div className="col-12 footer_credits text-center">
                    <span>
                      © 2025 <a>Human Security Alert</a>™. All Rights Reserved.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <div>
            <section id="contact" className="footer_wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 footer_logo mb-4 mb-lg-0">
                    <img decoding="async" src={logo} width={150} />
                    <h1 className='text-sm' style={{fontSize:'25px'}}>Human SECURE</h1>

                    <p className="footer_text" style={{ textAlign: "justify" }}>
                      At Human Security , we're dedicated to making Secure website
                      for Human saftey and we give our best at what we do
                    </p>
                  </div>
                  <div className="col-lg-4 px-lg-5 mb-4 mb-lg-0">
                    <h3 className="footer_title">Contact</h3>
                    <p className="footer_text">
                      <a>arbazkhantheinnocentboy24@gmail.com</a>
                      <br />
                      <a className="footer-address">
                        Oxigen Park, Kali Charan Nigam Institute of Technology, <br />
                       Banda, Utter Pradesh, India
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-3 mb-4 mb-lg-0">
                    <h3 className="footer_title">Social Media</h3>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/arbaz-khan-929565249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="footer_social_media_icon"
                        style={{ color: "white" }}
                      >
                        <BsLinkedin size={25} />
                      </a>
                      <a
                        href="https://github.com/azzupro/Fees-Management"
                        className="footer_social_media_icon"
                        style={{ color: "white" }}
                      >
                        <BsGithub size={25} />
                      </a>
                    </p>
                  </div>
                  <div className="col-12 footer_credits text-center">
                    <span>
                      © 2025 <a>Human Security Alert</a>™. All Rights Reserved.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
