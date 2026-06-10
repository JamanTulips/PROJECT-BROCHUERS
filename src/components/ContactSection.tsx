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
                  style={{ width: "64px", height: "64px", backgroundColor: "#000000" }}
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-black">Address</h4>
                  <a
                    href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6"
                    target="_blank"
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
                  style={{ width: "64px", height: "64px", backgroundColor: "#000000" }}
                >
                  <i className="fa fa-phone text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-black">Call Us</h4>
                  <a className="h5" href="tel:+9779705384904" target="_blank">
                    +977 9705384904
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square rounded-circle"
                  style={{ width: "64px", height: "64px", backgroundColor: "#000000" }}
                >
                  <i className="fa fa-envelope text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-black">Email Us</h4>
                  <a
                    className="h5"
                    href="mailto:paarisha@saiitek.com.np"
                    target="_blank"
                  >
                    paarisha@saiitek.com.np
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
              <div className="p-5 h-100 rounded contact-map">
                <iframe
                  className="rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.0470328712695!2d85.385657!3d27.684630799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b3d7f7f23d1:0xe561399f5c0355ad!2sKoju%20I.T.%20Solutions!5e1!3m2!1sen!2snp!4v1770521868482!5m2!1sen!2snp"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
              <form action={formAction} className="p-5 rounded contact-form">
                {state.message && (
                  <div
                    className={`alert ${state.success ? "alert-success" : "alert-danger"} mb-4`}
                    role="alert"
                  >
                    {state.message}
                  </div>
                )}
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control border-0 py-3"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control border-0 py-3"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="project"
                    className="form-control border-0 py-3"
                    placeholder="Project"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    className="w-100 form-control border-0 py-3"
                    rows={6}
                    cols={10}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                                        onChange={(token) => setCaptchaToken(token)}
                                    />
                                    <input type="hidden" name="g-recaptcha-response" value={captchaToken || ''} />
                                </div>

                <div className="text-start">
                  <button
                    className="btn bg-primary text-white py-3 px-5"
                    type="submit"
                    disabled={isPending || !captchaToken}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
