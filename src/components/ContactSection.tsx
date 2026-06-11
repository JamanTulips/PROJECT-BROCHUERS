"use client";

import React, { useActionState, useState } from "react";
import { sendContactEmail } from "@/actions/sendContactEmail";
import ReCAPTCHA from "react-google-recaptcha";

const initialState = {
  success: false,
  message: "",
};

const ContactSection = () => {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  return (
    <div id="contact" className="container-fluid py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          {/* <h5 className="text-primary">Get In Touch</h5> */}
          <h1 className="mb-3">Contact for any query</h1>
        </div>
        <div className="contact-detail position-relative p-3 p-md-4 p-lg-5">
          <div className="row g-3 g-md-4 g-lg-5 mb-0 justify-content-center">
            <div
              className="col-12 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay=".3s"
            >
              <div className="d-flex align-items-start bg-light p-3 rounded h-100">
                <div
                  className="flex-shrink-0 btn-square rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "#000000",
                  }}
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3 contact-info-text flex-grow-1">
                  <h4 className="text-black mb-1">Address</h4>
                  <span className="h5 d-block text-break mb-0">
                    Thasikhel, Lalitpur, Nepal
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay=".5s"
            >
              <div className="d-flex align-items-start bg-light p-3 rounded h-100">
                <div
                  className="flex-shrink-0 btn-square rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "#000000",
                  }}
                >
                  <i className="fa fa-phone text-white"></i>
                </div>
                <div className="ms-3 contact-info-text flex-grow-1">
                  <h4 className="text-black mb-1">Call Us</h4>
                  <a
                    href="tel:+9779705384904"
                    className="h5 d-block text-break mb-0 text-decoration-none"
                  >
                    +977 9705384904
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay=".7s"
            >
              <div className="d-flex align-items-start bg-light p-3 rounded h-100">
                <div
                  className="flex-shrink-0 btn-square rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "#000000",
                  }}
                >
                  <i className="fa fa-envelope text-white"></i>
                </div>
                <div className="ms-3 contact-info-text flex-grow-1">
                  <h4 className="text-black mb-1">Email Us</h4>
                  <a
                    href="mailto:paarisha@saiitek.com.np"
                    className="h5 d-block text-break mb-0 text-decoration-none"
                  >
                    paarisha@saiitek.com.np
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
