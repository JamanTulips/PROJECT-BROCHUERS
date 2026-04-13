import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Shrestha',
        profession: 'CEO, TechNepal',
        img: '/img/team-1.jpg',
        rating: 5,
        text: 'Koju IT Solutions transformed our business with an outstanding web platform. Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!',
    },
    {
        id: 2,
        name: 'Sunita Thapa',
        profession: 'Founder, EduConnect',
        img: '/img/team-2.jpg',
        rating: 5,
        text: 'The team at Koju IT Solutions built our e-learning platform flawlessly. Their expertise in modern technologies and commitment to quality is truly impressive.',
    },
    {
        id: 3,
        name: 'Bikram Rai',
        profession: 'Managing Director, FinServe Nepal',
        img: '/img/team-3.jpg',
        rating: 5,
        text: 'We partnered with Koju IT Solutions for our fintech application and the results were phenomenal. Their attention to detail and technical depth is unmatched.',
    },
    {
        id: 4,
        name: 'Anita Gurung',
        profession: 'Product Manager, ShopEase',
        img: '/img/team-4.jpg',
        rating: 5,
        text: 'From UI design to backend development, Koju IT Solutions handled everything seamlessly. Our e-commerce platform saw a 60% increase in user engagement after launch.',
    },
    {
        id: 5,
        name: 'Dipesh Karmacharya',
        profession: 'CTO, CloudBase Nepal',
        img: '/img/team-1.jpg',
        rating: 5,
        text: 'Exceptional service and top-notch technical skills. Koju IT Solutions understood our cloud infrastructure needs and delivered a robust, scalable solution on time.',
    },
    {
        id: 6,
        name: 'Roshani Bajracharya',
        profession: 'Director, HealthCare Plus',
        img: '/img/team-3.jpg',
        rating: 5,
        text: 'Our healthcare management system was built with great precision and care by Koju IT Solutions. They ensured compliance and security at every step. Fantastic experience!',
    },
];

const StarRating = ({ count }: { count: number }) => (
    <div className="d-flex mb-3">
        {Array.from({ length: count }).map((_, i) => (
            <i key={i} className="fas fa-star text-warning me-1"></i>
        ))}
    </div>
);

const TestimonialsSection = () => {
    return (
        <div className="container-fluid testimonials py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Testimonials</h5>
                    <h1>What Our Clients Say About Us</h1>
                    <p className="text-muted">
                        We take pride in delivering exceptional IT solutions. Here is what our valued clients have to say about their experience working with us.
                    </p>
                </div>
                <div className="row g-4">
                    {testimonials.map((item, index) => (
                        <div
                            key={item.id}
                            className="col-md-6 col-lg-4 wow fadeIn"
                            data-wow-delay={`${0.3 + (index % 3) * 0.2}s`}
                        >
                            <div className="testimonial-item rounded p-4 h-100">
                                <StarRating count={item.rating} />
                                <p className="mb-4 text-muted fst-italic">&ldquo;{item.text}&rdquo;</p>
                                <div className="d-flex align-items-center">
                                    <div
                                        className="rounded-circle overflow-hidden flex-shrink-0"
                                        style={{ width: '60px', height: '60px', border: '3px solid var(--bs-primary)' }}
                                    >
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={60}
                                            height={60}
                                            className="img-fluid w-100 h-100"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="mb-0 fw-bold">{item.name}</h5>
                                        <small className="text-primary">{item.profession}</small>
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

export default TestimonialsSection;
