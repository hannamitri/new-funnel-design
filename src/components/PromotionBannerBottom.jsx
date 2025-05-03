import { useState, useEffect } from "react";

export default function PromoBannerBottom({ visible }) {
  const [showBanner, setShowBanner] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 19,
    minutes: 15,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Calculate new time
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY <= 20); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`promo-banner-bottom ${showBanner ? "visible" : "hidden"}`}>
      <div className="banner-content">
        <h1 className="banner-heading">Graduate into a career you'll love!</h1>

        <div className="banner-right">
          <div className="discount-badge">
            <span className="discount-amount">
              25<span className="percent">%</span>
            </span>
            <span className="off">OFF</span>
          </div>

          <div className="countdown">
            <span>{timeLeft.days} d</span>
            <span className="separator">:</span>
            <span>{timeLeft.hours} h</span>
            <span className="separator">:</span>
            <span>{timeLeft.minutes} m</span>
            <span className="separator">:</span>
            <span>{timeLeft.seconds} s</span>
          </div>

          <button className="claim-button">Claim offer</button>
        </div>
      </div>
    </div>
  );
}
