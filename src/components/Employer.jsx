import React from "react";

function EmployersSection() {
  // Company logos organized in rows
  const companyRows = [
    [
      { name: "Discord", logo: "/api/placeholder/120/40" },
      { name: "Google Play", logo: "/api/placeholder/120/40" },
      { name: "Spotify", logo: "/api/placeholder/120/40" },
      { name: "Pantone", logo: "/api/placeholder/120/40" },
      { name: "PlayStation", logo: "/api/placeholder/120/40" },
      { name: "Samsung", logo: "/api/placeholder/120/40" },
    ],
    [
      { name: "Accenture", logo: "/api/placeholder/120/40" },
      { name: "Decathlon", logo: "/api/placeholder/120/40" },
      { name: "Societe Generale", logo: "/api/placeholder/120/40" },
      { name: "Apple", logo: "/api/placeholder/120/40" },
      { name: "Salesoft", logo: "/api/placeholder/120/40" },
      { name: "Nielsen", logo: "/api/placeholder/120/40" },
    ],
    [
      { name: "Aviagen", logo: "/api/placeholder/120/40" },
      { name: "Aiven", logo: "/api/placeholder/120/40" },
      { name: "HubSpot", logo: "/api/placeholder/120/40" },
      { name: "Neurogazer", logo: "/api/placeholder/120/40" },
      { name: "Zencare", logo: "/api/placeholder/120/40" },
      { name: "IBM", logo: "/api/placeholder/120/40" },
    ],
  ];

  return (
    <section className="employers-section">
      <div className="container">
        <h2 className="employers-title">
          Our grads get great jobs with both
          <br />
          startups and industry giants
        </h2>

        <div className="logo-container">
          {companyRows.map((row, rowIndex) => (
            <div className="logo-row" key={rowIndex}>
              {row.map((company, companyIndex) => (
                <div className="logo-item" key={companyIndex}>
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="company-logo"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmployersSection;
