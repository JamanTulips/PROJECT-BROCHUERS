import React from 'react';
import Image from 'next/image';

const teamMembers = [
    {
        id: 1,
        name: 'Manish Koju',
        role: 'CEO & Founder',
        img: '/img/team-1.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        id: 2,
        name: 'Sajan Maharjan',
        role: 'Lead Developer',
        img: '/img/team-2.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        id: 3,
        name: 'Priya Shrestha',
        role: 'UI/UX Designer',
        img: '/img/team-3.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        id: 4,
        name: 'Anil Tamang',
        role: 'Project Manager',
        img: '/img/team-4.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
];

const TeamSection = () => {
    return (
        <div className="container-fluid team py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Team</h5>
                    <h1>Meet Our Expert Team Members</h1>
                </div>
                <div className="row g-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="col-md-6 col-lg-3 wow fadeIn"
                            data-wow-delay={`${0.3 + index * 0.2}s`}
                        >
                            <div className="team-item rounded overflow-hidden">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle overflow-hidden">
                                            <Image
                                                src={member.img}
                                                alt={member.name}
                                                width={200}
                                                height={200}
                                                className="img-fluid w-100"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4 className="mb-0">{member.name}</h4>
                                            <p className="text-primary mb-2">{member.role}</p>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <a
                                                    href={member.social.facebook}
                                                    className="btn btn-square btn-primary rounded-circle mx-1"
                                                    aria-label="Facebook"
                                                >
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a
                                                    href={member.social.twitter}
                                                    className="btn btn-square btn-primary rounded-circle mx-1"
                                                    aria-label="Twitter"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a
                                                    href={member.social.instagram}
                                                    className="btn btn-square btn-primary rounded-circle mx-1"
                                                    aria-label="Instagram"
                                                >
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                                <a
                                                    href={member.social.linkedin}
                                                    className="btn btn-square btn-primary rounded-circle mx-1"
                                                    aria-label="LinkedIn"
                                                >
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
