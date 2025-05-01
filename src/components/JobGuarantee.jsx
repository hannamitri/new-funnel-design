import React from 'react';
import { Zap, Lock, CreditCard, ArrowRight } from 'lucide-react';

function JobGuaranteeSection() {
  return (
    <div className="job-guarantee-section">
      <div className="container">
        <div className="guarantee-heading">
          <h2 className="main-heading">
            Get a job <img src="/api/placeholder/24/24" alt="cursor icon" className="cursor-icon" /> in tech.
            <span className="highlight-text">or your tuition back</span>
          </h2>
        </div>
        
        <div className="guarantee-cards">
          {/* Externship Card */}
          <div className="guarantee-card">
            <div className="card-icon">
              <Zap size={24} />
            </div>
            <h3 className="card-title">
              Externship opportunities<br />
              for <span className="accent-text">work experience</span>
            </h3>
            <p className="card-description">
              Students have the opportunity to complete business projects for 
              real companies that we've partnered with.
            </p>
            <a href="#" className="card-link">
              What's that? <ArrowRight size={16} />
            </a>
          </div>
          
          {/* Money-back Card */}
          <div className="guarantee-card highlighted-card">
            <div className="card-icon">
              <Lock size={24} />
            </div>
            <h3 className="card-title">
              Money-back<br />
              guarantee
            </h3>
            <p className="card-description">
              If it takes more than 10 months after completing your program to 
              get the job you trained for, we will refund 100% of your tuition.
            </p>
            <a href="#" className="card-link">
              About <ArrowRight size={16} />
            </a>
          </div>
          
          {/* Payment Options Card */}
          <div className="guarantee-card">
            <div className="card-icon">
              <CreditCard size={24} />
            </div>
            <h3 className="card-title">
              <span className="accent-text">Flexible</span> payment<br />
              options
            </h3>
            <ul className="payment-options-list">
              <li><span className="bullet">•</span> Upfront to pay up to 30% less</li>
              <li><span className="bullet">•</span> Installment plans</li>
              <li><span className="bullet">•</span> Tuition financing</li>
            </ul>
            <a href="#" className="card-link">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        {/* Success Rate Section */}
        <div className="success-rate-section">
          <div className="graduate-images">
            {/* These would be actual graduate images in a real implementation */}
            <div className="grad-img img-1"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-2"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-3"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-4"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-5"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-6"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-7"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-8"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-9"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
            <div className="grad-img img-10"><img src="/api/placeholder/50/50" alt="Graduate" /></div>
          </div>
          
          <div className="success-content">
            <h2 className="success-percentage">82%</h2>
            <p className="success-description">
              of our grads get hired within 6 months<br />
              of completing our program
            </p>
            <a href="#" className="success-link">
              See our 2025 Outcomes Report <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobGuaranteeSection;