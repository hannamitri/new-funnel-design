import React, { useState } from "react";
import "./FaqSection.css"; // Importing CSS for styling
import Navbar from "../Navbar"; // Importing Navbar component

const FaqSection = () => {
  // State to track which FAQ item is currently open
  const [openItem, setOpenItem] = useState(null);

  // Toggle function to open/close FAQ items
  const toggleItem = (id) => {
    if (openItem === id) {
      setOpenItem(null); // Close if already open
    } else {
      setOpenItem(id); // Open the clicked item
    }
  };

  // FAQ data - Bootcamps section
  const bootcampFaqs = [
    {
      id: 1,
      question: "What bootcamps do you offer?",
      answer:
        "We offer several bootcamps including Software Engineering, Data Science, Data Analytics, UX/UI Design, and Quality Assurance. Each bootcamp is designed to prepare you for a specific tech career path with curriculum developed by industry experts.",
    },
    {
      id: 2,
      question:
        "Do I need any prior experience before enrolling in a bootcamp?",
      answer:
        "No, our bootcamps are designed for beginners. You don't need any prior coding or tech experience. We start with the fundamentals and gradually build up to more complex concepts. All you need is dedication and willingness to learn.",
    },
    {
      id: 3,
      question: "What is the workload and format like?",
      answer:
        "Our bootcamps are available in both full-time and part-time formats. Full-time requires about 40-50 hours per week, while part-time typically requires 20-25 hours weekly. Coursework includes video lessons, reading materials, practical assignments, and live sessions with instructors.",
    },
    {
      id: 4,
      question: "Do I need a STEM degree or tech background to join TripleTen?",
      answer:
        "Not at all! Our students come from diverse backgrounds including teaching, healthcare, retail, and many other non-technical fields. The bootcamps are designed to be accessible for career-changers with no tech background.",
    },
    {
      id: 5,
      question: "What is the admissions process?",
      answer:
        "Our admissions process includes a brief application, a call with an admissions advisor to discuss your goals, and a technical challenge that doesn't require prior knowledge. We're looking for motivated individuals with a passion for learning, not technical expertise.",
    },
    {
      id: 6,
      question:
        "What tools, software, and programming languages will I learn during the bootcamp?",
      answer:
        "Depending on your bootcamp, you may learn languages like JavaScript, Python, HTML/CSS, SQL, and tools like React, Node.js, Git, Figma, Tableau, and more. Our curriculum is constantly updated to align with current industry demands.",
    },
    {
      id: 7,
      question: "Will I get a certificate when I graduate?",
      answer:
        "Yes, upon successful completion of the bootcamp, you'll receive a TripleTen certificate. More importantly, you'll graduate with a professional portfolio showcasing your skills to potential employers.",
    },
    {
      id: 8,
      question: "Which profession is right for me?",
      answer:
        "The best profession depends on your interests and strengths. Software engineers build applications, data analysts interpret data, UX/UI designers create user experiences, and QA engineers ensure product quality. We recommend speaking with our admissions team to find the best fit.",
    },
    {
      id: 9,
      question: "How long does a TripleTen bootcamp take?",
      answer:
        "Bootcamp durations vary from 4 to 10 months depending on the program and whether you choose full-time or part-time. Software Engineering is typically 7-9 months part-time, Data Science is 8-10 months, and other programs have similar timeframes.",
    },
    {
      id: 10,
      question: "How much does a TripleTen bootcamp cost?",
      answer:
        "Tuition varies by program, but we offer various payment options including installment plans and income share agreements where you only pay after you're employed. We also offer scholarships and discounts for eligible students.",
    },
    {
      id: 11,
      question: "Do I have to quit my job?",
      answer:
        "Not necessarily. Our part-time bootcamps are specifically designed for working professionals. Many of our students successfully complete the bootcamp while maintaining full-time employment by dedicating evenings and weekends to studying.",
    },
    {
      id: 12,
      question: "What is TripleTen?",
      answer:
        "TripleTen is a tech education platform that offers immersive bootcamps designed to help people launch new careers in tech. We focus on practical skills, real-world projects, and career support to ensure our graduates are job-ready.",
    },
    {
      id: 13,
      question: "Is a TripleTen bootcamp worth it?",
      answer:
        "Our 82% employment rate within 6 months of graduation suggests yes! Our graduates work at companies like Google, Amazon, and Microsoft. The return on investment can be substantial when comparing tuition costs to potential salary increases after transitioning to tech.",
    },
    {
      id: 14,
      question: "How does TripleTen work?",
      answer:
        "TripleTen combines self-paced learning, live sessions with instructors, hands-on projects, and career support. You'll learn through our proprietary platform, receive feedback on your work, build a portfolio, and get help with your job search after graduation.",
    },
  ];

  // FAQ data - Learning Process section
  const learningFaqs = [
    {
      id: 101,
      question: "What equipment will I need?",
      answer:
        "You'll need a computer (Windows, Mac, or Linux) with reliable internet access. We recommend at least 8GB of RAM and 256GB of storage. A second monitor is helpful but not required. All software used in our programs is either free or provided by us.",
    },
    {
      id: 102,
      question: "How do TripleTen bootcamps work?",
      answer:
        "Our bootcamps combine self-paced learning with scheduled live sessions and regular deadlines. You'll watch videos, read materials, complete coding exercises, build projects, and attend webinars. Throughout the process, you'll receive support from tutors, code reviewers, and your dedicated community.",
    },
    {
      id: 103,
      question: "What support do you offer students during the program?",
      answer:
        "We provide multi-layered support including technical tutors, code reviewers who give feedback on your projects, community managers, and career coaches. Students also support each other through our online community platforms. Help is available 7 days a week.",
    },
    {
      id: 104,
      question: "When do we have live classes?",
      answer:
        "Live webinars are typically scheduled in the evenings (Eastern Time) to accommodate working students. These sessions are recorded if you can't attend. For part-time programs, most live sessions are on weekday evenings or weekends.",
    },
    {
      id: 105,
      question: "Are there 1:1 meetings with tutors?",
      answer:
        "Yes, you can schedule one-on-one sessions with tutors to get personalized help with concepts you're struggling with. These sessions are conducted via video call and can be booked through our learning platform.",
    },
    {
      id: 106,
      question: "What is code review?",
      answer:
        "Code review is our feedback process where professional developers examine your project code, provide comments, and suggest improvements. This is similar to how code is reviewed in actual tech companies and helps you develop professional-quality coding practices.",
    },
    {
      id: 107,
      question: "How much time will I spend studying?",
      answer:
        "Full-time programs require approximately 40-50 hours per week. Part-time programs require 20-25 hours per week. The actual time may vary based on your learning pace and prior experience. We recommend setting aside dedicated study time consistently throughout the week.",
    },
    {
      id: 108,
      question: "What happens if I fall behind?",
      answer:
        "We understand life happens! If you fall behind, your community manager will reach out to help you create a catch-up plan. We offer flexibility with deadlines when needed and can provide additional support. Our goal is to help you succeed, not to penalize you for unexpected challenges.",
    },
    {
      id: 109,
      question: "How many projects will I do?",
      answer:
        "Depending on the program, you'll complete between 15-25 projects, ranging from small exercises to comprehensive capstone projects. These projects form your professional portfolio that you'll use in your job search.",
    },
    {
      id: 110,
      question:
        "Will I gain real work experience in TripleTen? Will I do internships or externships as part of the program?",
      answer:
        "Yes, many of our programs include externship opportunities where you'll work on real-world projects for actual companies. Additionally, all our projects are designed to simulate real work tasks you'd encounter in the industry, providing practical experience that employers value.",
    },
    {
      id: 111,
      question: "How did you design your curriculum? How often is it updated?",
      answer:
        "Our curriculum is designed by industry professionals with input from hiring companies to ensure it's relevant to current job market demands. We update our materials quarterly to incorporate new technologies and best practices, with major revisions at least annually.",
    },
    {
      id: 112,
      question: "How long will I have access to TripleTen course materials?",
      answer:
        "You'll have access to all course materials for 6 months after graduation. This gives you time to review concepts during your job search. Extended access can be purchased if needed. Certain resources, like our career support platform, remain available for a full year after graduation.",
    },
  ];

  // FAQ data - Career Services section
  const careerFaqs = [
    {
      id: 201,
      question: "What career services are included in TripleTen programs?",
      answer:
        "Our career services include personalized career coaching, resume and portfolio review, LinkedIn optimization, interview preparation, technical mock interviews, salary negotiation guidance, and job search strategy sessions. We also provide networking opportunities with hiring partners and alumni.",
    },
    {
      id: 202,
      question: "Is there an additional fee for career services?",
      answer:
        "No, all career services are included in your tuition at no additional cost. Career support begins during your program and continues for up to 6 months after graduation or until you land a job.",
    },
    {
      id: 203,
      question: "Will I receive personalized career coaching?",
      answer:
        "Yes, you'll be assigned a dedicated career coach who will work with you one-on-one to develop a personalized job search strategy based on your background, goals, and local job market.",
    },
    {
      id: 204,
      question: "How many 1:1 sessions with a career coach can I do?",
      answer:
        "You can schedule up to 10 one-on-one sessions with your career coach during and after the program. Additional sessions may be available based on your needs and progress in your job search.",
    },
    {
      id: 205,
      question: "What are HR and tech mock interviews like?",
      answer:
        "We conduct two types of mock interviews: HR interviews that focus on behavioral questions and your career story, and technical interviews that simulate the coding challenges and technical questions you'll face in real interviews. Both are conducted by professionals with industry experience and include detailed feedback.",
    },
    {
      id: 206,
      question:
        "How long after graduation are career services available? What's included?",
      answer:
        "Career services are available for 6 months after graduation. This includes ongoing one-on-one coaching, mock interviews, resume updates, job application reviews, and access to our job search resources and employer networks.",
    },
    {
      id: 207,
      question: "How many of your graduates get the jobs they trained for?",
      answer:
        "82% of our graduates secure relevant jobs in their field of study within 6 months of graduation. We have a strong track record of helping career changers successfully transition into tech roles aligned with their training.",
    },
    {
      id: 208,
      question: "How much do TripleTen grads get paid?",
      answer:
        "The average starting salary for TripleTen graduates varies by program and location, but typically ranges from $60,000 to $90,000 for entry-level positions. Software Engineering graduates tend to command the highest starting salaries, with Data Science and UX/UI Design following closely behind.",
    },
    {
      id: 209,
      question:
        "How long after graduating TripleTen does it take to find a job?",
      answer:
        "On average, our graduates find relevant employment within 3-4 months after graduation. However, this can vary based on factors like your location, the specific tech field, your prior experience, and how actively you participate in the job search process.",
    },
    {
      id: 210,
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes, we offer a job guarantee for eligible graduates. If you don't secure a job within 6 months of graduation despite completing all career service requirements and actively engaging in the job search, you may be eligible for a tuition refund. Specific terms and conditions apply, which we're happy to discuss in detail.",
    },
  ];

  // FAQ data - Tuition section
  const tuitionFaqs = [
    {
      id: 301,
      question: "What are your payment options?",
      answer:
        "We offer several payment options including upfront payment (with a discount), monthly installment plans, and income share agreements (ISAs) where you only pay after you're employed. We also accept payments via credit card, bank transfer, or third-party financing through our lending partners.",
    },
    {
      id: 302,
      question: "Can I get a loan for my TripleTen bootcamp?",
      answer:
        "Yes, we partner with several financing providers who offer education loans specifically for bootcamps. These loans typically offer competitive interest rates and flexible repayment terms. Our admissions team can help you explore these options and connect you with our lending partners.",
    },
    {
      id: 303,
      question: "What is your refund policy?",
      answer:
        "If you withdraw within the first 7 days of the program, you're eligible for a full refund. After that, refunds are prorated based on the portion of the program completed. Specific refund terms are outlined in your enrollment agreement, which we'll review with you before you commit.",
    },
    {
      id: 304,
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes, we offer a job guarantee for eligible graduates. If you follow our career services program requirements and don't secure a job within 6 months of graduation, you may be eligible for a full tuition refund. Terms and conditions apply, and we're happy to provide the specific details.",
    },
  ];

  // FAQ data - Other section
  const otherFaqs = [
    {
      id: 401,
      question: "Who could I contact if I have more questions?",
      answer:
        "You can reach out to our admissions team at admissions@tripleten.com or call us at (555) 123-4567. We also offer live chat on our website and regular information sessions where you can ask questions directly to our team. We're here to help and would be happy to address any additional questions you may have.",
    },
  ];

  return (
    <div className="faq">
      <div className="faq__header">
        <Navbar />
        <div className="faq__header-wrapper">
          <h2 className="faq__title">
            Get answers to your
            <br />
            questions
          </h2>
          <p className="faq__subtitle">
            We're big on transparency. Making a career change through a bootcamp
            is a big decision, so we want you to have all the information you
            need going in.
          </p>
        </div>
      </div>

      <div className="faq__content">
        {/* Bootcamps Section */}
        <h3 className="faq__section-title">TripleTen Bootcamps</h3>

        <div className="faq__list">
          {bootcampFaqs.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${
                openItem === item.id ? "faq__item--open" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                {item.question}
                <span className="faq__toggle">+</span>
              </button>

              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Process Section */}
        <h3 className="faq__section-title faq__section-title--second">
          Learning Process
        </h3>

        <div className="faq__list">
          {learningFaqs.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${
                openItem === item.id ? "faq__item--open" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                {item.question}
                <span className="faq__toggle">+</span>
              </button>

              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Career Services Section */}
        <h3 className="faq__section-title faq__section-title--second">
          Career Services
        </h3>

        <div className="faq__list">
          {careerFaqs.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${
                openItem === item.id ? "faq__item--open" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                {item.question}
                <span className="faq__toggle">+</span>
              </button>

              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tuition Section */}
        <h3 className="faq__section-title faq__section-title--second">
          Tuition
        </h3>

        <div className="faq__list">
          {tuitionFaqs.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${
                openItem === item.id ? "faq__item--open" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                {item.question}
                <span className="faq__toggle">+</span>
              </button>

              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Section */}
        <h3 className="faq__section-title faq__section-title--second">Other</h3>

        <div className="faq__list">
          {otherFaqs.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${
                openItem === item.id ? "faq__item--open" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                {item.question}
                <span className="faq__toggle">+</span>
              </button>

              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
