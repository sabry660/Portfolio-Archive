import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Zenvora</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading the development of innovative digital solutions and web applications. Overseeing technical strategy, product development, and team management to deliver cutting-edge front-end solutions for clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Developer</h4>
                <h5>Google</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to the development of large-scale web applications at Google. Worked with modern front-end technologies to build responsive, high-performance user interfaces for millions of users worldwide.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Training</h4>
                <h5>Quriv</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed intensive training program at Quriv, focusing on modern web development technologies, best practices, and industry standards. Gained hands-on experience with React, Angular, TypeScript, and various front-end frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
