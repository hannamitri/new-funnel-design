import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';

function FAQSection() {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);
  
  // Toggle FAQ item open/closed
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };
  
  // FAQ data
  const faqItems = [
    {
      question: "What is a coding bootcamp?",
      answer: "A coding bootcamp is an intensive, short-term training program designed to equip students with the technical skills needed for a career in tech. Unlike traditional 4-year computer science degrees, FES bootcamps focus on practical, job-ready skills that employers are looking for right now. Our programs range from 4-9 months, depending on the track, and include project-based learning, 1-on-1 mentorship, and job placement assistance."
    },
    {
      question: "Will I gain real work experience in FES?",
      answer: "Yes, you'll gain practical work experience through our externship program. Students work on real business projects for companies we've partnered with, allowing you to build a professional portfolio. These projects mirror the challenges you'll face in your future tech role and demonstrate to employers that you can deliver value from day one. Our partnerships with industry leaders ensure you're working on relevant, current technologies and business problems."
    },
    {
      question: "Will I get a new job after graduation?",
      answer: "Our graduates have an 82% job placement rate within 6 months of completing the program. We provide comprehensive career support including resume building, LinkedIn optimization, portfolio development, interview preparation, and direct connections to our hiring partners. Our curriculum is designed with input from industry experts to ensure you're learning the skills employers are actively seeking. Additionally, our job guarantee means if you don't secure a role within 10 months of graduating, we'll refund 100% of your tuition."
    },
    {
      question: "What if I don't get a new job?",
      answer: "If you don't secure a job within 10 months after completing your program, we'll refund 100% of your tuition. We stand behind our curriculum and career support with our job guarantee. To qualify, students must complete all program requirements, actively participate in the job search process, and follow our career team's guidance. We're invested in your success and will work closely with you throughout your job search to maximize your opportunities."
    },
    {
      question: "What career services do you offer?",
      answer: "Our career services include personalized career coaching, resume and LinkedIn profile optimization, portfolio development, technical and behavioral interview preparation, salary negotiation guidance, and direct introductions to hiring partners. We also provide ongoing support through weekly group coaching sessions, networking events, and alumni community access. Our career team works with you one-on-one to tailor your job search strategy based on your background, skills, and career goals."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">FAQ</h2>
          <a href="#full-faq" className="complete-faq-link">
            Complete FAQ <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <button 
                className={`faq-question ${openItem === index ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
              >
                {item.question}
                <span className="question-icon">
                  <Plus size={24} />
                </span>
              </button>
              
              <div 
                className={`faq-answer ${openItem === index ? 'open' : ''}`}
                id={`faq-answer-${index}`}
                aria-hidden={openItem !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;