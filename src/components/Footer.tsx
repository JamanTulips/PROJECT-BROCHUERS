import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <Link href="/" className="d-inline-block text-decoration-none">
                            <img
                                src="/img/saaitekremove.png"
                                alt="Saiitek"
                                style={{ width: "118px", height: "auto", objectFit: "contain" }}
                            />
                        </Link>
                        <h4 className="text-white mt-4 mb-3">Saiitek Solution Pvt. Ltd.</h4>
                        <p className="mb-4" style={{ color: "#9fc3ef", fontSize: "1.05rem", whiteSpace: "nowrap" }}>
                            Where your needs meet our Intelligence
                        </p>
                        {/* <div className="d-flex hightech-link">
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i
                                className="fab fa-facebook-f text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i
                                className="fab fa-twitter text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i
                                className="fab fa-instagram text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i
                                className="fab fa-linkedin-in text-primary"></i></a>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* Empty cols in original */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* Empty cols in original */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-white">Contact Us</a>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a href="#" className="pb-3 text-light border-bottom border-primary"><i
                                className="fas fa-map-marker-alt text-white me-2"></i>Thasikhel,Lalitpur,Nepal</a>
                            <a href="tel:+9779704788132" className="py-3 text-light border-bottom border-primary"><i
                                className="fas fa-phone-alt text-white me-2"></i> +977 9705384904</a>
                            <a href="mailto:kojuitsolutions@gmail.com" className="py-3 text-light border-bottom border-primary"><i
                                className="fas fa-envelope text-white me-2"></i> paarisha@saiitek.com.np</a>
                        </div>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light"><a href="#" className="text-white"><i
                            className="fas fa-copyright  me-2"></i>2026 Saiitek Solution Pvt. Ltd.</a>, All right
                            reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
