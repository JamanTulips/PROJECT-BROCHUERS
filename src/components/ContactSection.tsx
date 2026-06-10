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
        <div className="contact-detail position-relative p-5">
          <div className="row g-5 mb-5 justify-content-center">
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square rounded-circle"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#000000",
                  }}
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-black">Address</h4>
                  <a
                    // href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6"
                    // target="_blank"
                    className="h5"
                  >
                    Thasikhel,Lalitpur,Nepal
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square rounded-circle"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#000000",
                  }}
                >
                  <i className="fa fa-phone text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-black">Call Us</h4>
                  <a className="h5">+977 9705384904</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square rounded-circle"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#000000",
                  }}
                >
                  <i className="fa fa-envelope text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-black">Email Us</h4>
                  <a className="h5">paarisha@saiitek.com.np</a>
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
