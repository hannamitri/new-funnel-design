import React from "react";
import discord from "../assets/discord.svg";

function EmployersSection() {
  const companyRows = [
    [
      { name: "Discord", logo: discord },
      { name: "Google Play", logo: discord },
      { name: "Spotify", logo: discord },
      { name: "Pantone", logo: discord },
      { name: "PlayStation", logo: discord },
      { name: "Samsung", logo: discord },
    ],
    [
      { name: "Accenture", logo: discord },
      { name: "Decathlon", logo: discord },
      { name: "Societe Generale", logo: discord },
      { name: "Apple", logo: discord },
      { name: "Salesoft", logo: discord },
      { name: "Nielsen", logo: discord },
    ],
    [
      { name: "Aviagen", logo: discord },
      { name: "Aiven", logo: discord },
      { name: "HubSpot", logo: discord },
      { name: "Neurogazer", logo: discord },
      { name: "Zencare", logo: discord },
      { name: "IBM", logo: discord },
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
