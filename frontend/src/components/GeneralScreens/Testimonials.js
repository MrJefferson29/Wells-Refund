import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import test1 from '../../Assets/test1.jpg';
import test2 from '../../Assets/test2.jpg';
import test3 from '../../Assets/test3.jpg';
import test4 from '../../Assets/test4.jpg';
import test5 from '../../Assets/test5.jpg';

// --- 1. Testimonial Data Array ---
const testimonials = [
    {
        quote: "Swift Claim has revolutionized how I manage my finances. The digital-first approach and user-friendly interface make banking effortless and secure. Their customer service is exceptional and the web app is incredibly intuitive.",
        imgSrc: test1,
        name: "Sarah Johnson",
        role: "Tampa, FL",
        rating: 5
    },
    {
        quote: "The personalized financial solutions and cutting-edge technology have helped me grow my savings significantly. I trust Swift Claim BANK completely with my financial future. The investment tools are outstanding.",
        imgSrc: test2,
        name: "Michael Chen",
        role: "New York, NY",
        rating: 5
    },
    {
        quote: "As a long-time customer, I can confidently say that Swift Claim BANK provides the most reliable and innovative banking experience I've ever had. The security features give me complete peace of mind.",
        imgSrc: test3,
        name: "Connie Williams",
        role: "Washington, DC",
        rating: 5
    },
    {
        quote: "The loan process was incredibly smooth and transparent. Swift Claim BANK made what used to be a stressful experience completely hassle-free. I highly recommend them to anyone looking for reliable banking.",
        imgSrc: test4,
        name: "David Thompson",
        role: "Los Angeles, CA",
        rating: 5
    },
    {
        quote: "Their online banking platform is second to none. I can manage all my accounts, investments, and transactions from one place. Swift Claim BANK truly understands modern banking needs.",
        imgSrc: test5,
        name: "Lisa Green",
        role: "Seattle, WA",
        rating: 5
    }
];

// --- 2. Styled Components for Custom CSS ---

const TestimonialsSection = styled.section`
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.3;
    }
`;

const TestimonialSlider = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 2;
`;

const Testimonial = styled.div`
    border-left: 3px solid #000000;
    padding: 100px 0 100px 275px;
    position: relative;
    background: white;
    margin: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    &::before,
    &::after {
        content: "";
        width: 320px;
        height: 55px;
        border-right: 3px solid #000000;
        position: absolute;
        left: 0;
    }

    &::before {
        border-top: 3px solid #000000;
        top: 0;
    }

    &::after {
        border-bottom: 3px solid #000000;
        bottom: 0;
    }

    @media only screen and (max-width: 990px) {
        padding: 80px 0 80px 265px;
    }

    @media only screen and (max-width: 767px) {
        padding: 40px 20px;
        border: none;
        margin: 10px;

        &::before,
        &::after {
            border: none;
        }
    }
`;

const Pic = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 100px;
    left: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #000000;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }

    @media only screen and (max-width: 767px) {
        position: relative;
        top: 0;
        left: 0;
        margin: 0 auto 20px;
    }
`;

const PicImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${Pic}:hover & {
        transform: scale(1.1);
    }
`;

const TestimonialContent = styled.div`
    position: relative;
`;

const Description = styled.p`
    font-size: 14px;
    color: #7a7e82;
    line-height: 27px;
    position: relative;
    margin-bottom: 30px;

    &::before {
        content: "❝";
        font-family: serif;
        position: absolute;
        top: -50px;
        left: 0;
        font-size: 40px;
        color: #000000;
        opacity: 0.3;
    }

    @media only screen and (max-width: 767px) {
        margin-top: 15px;

        &::before {
            content: "";
        }
    }
`;

const TestimonialTitle = styled.h3`
    font-size: 22px;
    font-weight: 800;
    color: #22272c;
    text-transform: capitalize;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Post = styled.small`
    display: block;
    font-size: 15px;
    font-weight: 700;
    color: #000000;
    margin-top: 10px;
`;

const NavigationControls = styled.div`
    text-align: right;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
`;

const NavButton = styled.button`
    background: #000000;
    border: none;
    border-radius: 0;
    opacity: 1;
    padding: 12px 16px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;

    &:hover {
        background: #333333;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 30px;
`;

const Dot = styled.button`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: ${props => props.$active ? '#000000' : 'rgba(0, 0, 0, 0.3)'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #000000;
        transform: scale(1.2);
    }
`;

// --- 3. Reusable Testimonial Item Component ---

const TestimonialItem = ({ quote, imgSrc, name, role }) => (
    <Testimonial>
        <Pic>
            <PicImg src={imgSrc} alt={name} />
        </Pic>
        <TestimonialContent>
            <Description>{quote}</Description>
            <TestimonialTitle>
                {name}
                <Post>{role}</Post>
            </TestimonialTitle>
        </TestimonialContent>
    </Testimonial>
);

// --- 4. Main Component ---

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <TestimonialsSection>
        <Container>
                <Row>
                    <Col md={12}>
                        <TestimonialSlider>
                        <TestimonialItem 
                                key={currentSlide}
                                quote={testimonials[currentSlide].quote}
                                imgSrc={testimonials[currentSlide].imgSrc}
                                name={testimonials[currentSlide].name}
                                role={testimonials[currentSlide].role}
                            />
                            
                            <NavigationControls>
                                <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
                                    <ChevronLeft size={20} />
                                </NavButton>
                                <NavButton onClick={nextSlide} disabled={currentSlide === testimonials.length - 1}>
                                    <ChevronRight size={20} />
                                </NavButton>
                            </NavigationControls>
                        </TestimonialSlider>
                    </Col>
                </Row>
        </Container>
        </TestimonialsSection>
    );
}