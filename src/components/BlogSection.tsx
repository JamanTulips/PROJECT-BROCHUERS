import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: 'Top Web Development Trends to Watch in 2025',
        excerpt: 'The web development landscape is constantly evolving. From AI-driven interfaces to edge computing, discover the top trends shaping the future of modern web apps.',
        category: 'Web Development',
        date: 'March 15, 2025',
        author: 'Manish Koju',
        img: '/img/project-1.jpg',
        href: '#',
    },
    {
        id: 2,
        title: 'Why Every Business Needs a Mobile-First Strategy',
        excerpt: 'With over 60% of web traffic coming from mobile devices, having a mobile-first approach is no longer optional. Learn how to future-proof your digital presence.',
        category: 'Mobile Apps',
        date: 'February 28, 2025',
        author: 'Sajan Maharjan',
        img: '/img/project-2.jpg',
        href: '#',
    },
    {
        id: 3,
        title: 'Cloud Migration: Benefits, Risks & Best Practices',
        excerpt: 'Moving your infrastructure to the cloud can reduce costs and boost scalability. Here is a comprehensive guide to planning a successful cloud migration.',
        category: 'Cloud Solutions',
        date: 'February 10, 2025',
        author: 'Priya Shrestha',
        img: '/img/project-3.jpg',
        href: '#',
    },
    {
        id: 4,
        title: 'Cybersecurity Essentials for Small and Medium Businesses',
        excerpt: 'Cyber threats are growing in sophistication. SMBs are increasingly targeted — find out what security measures you must implement today to protect your business.',
        category: 'Cybersecurity',
        date: 'January 22, 2025',
        author: 'Anil Tamang',
        img: '/img/project-4.jpg',
        href: '#',
    },
    {
        id: 5,
        title: 'How AI Is Transforming IT Solution Delivery',
        excerpt: 'Artificial intelligence is reshaping how IT services are designed and delivered. Explore how AI-driven automation is streamlining workflows and cutting delivery time.',
        category: 'Artificial Intelligence',
        date: 'January 8, 2025',
        author: 'Manish Koju',
        img: '/img/project-1.jpg',
        href: '#',
    },
    {
        id: 6,
        title: 'Building Scalable APIs: REST vs GraphQL in 2025',
        excerpt: 'Choosing the right API architecture is critical for scalability. We break down the key differences between REST and GraphQL and help you decide which suits your project.',
        category: 'Backend Development',
        date: 'December 18, 2024',
        author: 'Sajan Maharjan',
        img: '/img/project-2.jpg',
        href: '#',
    },
];

const BlogSection = () => {
    return (
        <div className="container-fluid blog py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Blog</h5>
                    <h1>Latest News &amp; Insights</h1>
                    <p className="text-muted">
                        Stay up to date with the latest trends, tips, and insights from our team of IT experts at Koju IT Solutions.
                    </p>
                </div>
                <div className="row g-4">
                    {blogPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className="col-md-6 col-lg-4 wow fadeIn"
                            data-wow-delay={`${0.3 + (index % 3) * 0.2}s`}
                        >
                            <div className="blog-item rounded overflow-hidden h-100 shadow-sm">
                                <div className="overflow-hidden" style={{ height: '220px' }}>
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        width={600}
                                        height={220}
                                        className="img-fluid w-100 h-100"
                                        style={{ objectFit: 'cover', transition: '0.5s' }}
                                    />
                                </div>
                                <div className="p-4 d-flex flex-column h-auto">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="badge bg-primary px-3 py-2 rounded-pill">
                                            {post.category}
                                        </span>
                                        <small className="text-muted d-flex align-items-center">
                                            <i className="far fa-calendar-alt me-1"></i> {post.date}
                                        </small>
                                    </div>
                                    <h5 className="fw-bold mb-2">{post.title}</h5>
                                    <p className="text-muted mb-3 flex-grow-1">{post.excerpt}</p>
                                    <div className="d-flex align-items-center justify-content-between mt-auto">
                                        <small className="text-muted">
                                            <i className="far fa-user me-1 text-primary"></i> {post.author}
                                        </small>
                                        <div className="blog-btn">
                                            <Link href={post.href} className="btn btn-sm btn-primary rounded-pill px-3 blog-btn-icon mt-3 d-flex align-items-center justify-content-center">
                                                <span className="blog-icon-1" style={{ top: 0 }}>Read More</span>
                                                <span className="blog-icon-2">
                                                    <i className="fas fa-arrow-right me-1"></i> Read More
                                                </span>
                                            </Link>
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

export default BlogSection;
