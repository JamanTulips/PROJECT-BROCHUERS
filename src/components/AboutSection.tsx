import React from 'react';

const AboutSection = () => {
    return (
        <div className="container-fluid py-5 my-5">
            <div className="container pt-5">
                <div className="row g-5">
                    <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                        <div className="h-100 position-relative">
                            <img src="/img/about-1.jpg" className="img-fluid w-75 rounded" alt="Healthcare technology team at work" style={{ marginBottom: '25%' }} />
                            <div className="position-absolute w-75" style={{ top: '25%', left: '25%' }}>
                                <img src="/img/about-2.jpg" className="img-fluid w-100 rounded" alt="Medical software development workspace" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                        <h5 className="text-primary">About Koju IT Solutions</h5>
                        <h1 className="mb-4">Empowering Businesses with Innovative IT Solutions from Nepal</h1>
                        <p>Koju IT Solutions, based in the scenic landscapes of Nepal, is a leading IT agency dedicated to
                            providing cutting-edge solutions that elevate businesses to new heights. Our commitment to
                            excellence is reflected in our innovative approach to technology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;
